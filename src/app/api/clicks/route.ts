import { NextResponse } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";
import { profile } from "@/data/profile";

export const dynamic = "force-dynamic";

const validIds = new Set(profile.links.map((link) => link.id));

const dbError = () => NextResponse.json({ error: "데이터베이스에 연결하지 못했습니다." }, { status: 500 });

// 모든 링크의 클릭 수를 한 번에 조회 → { linkId: count }
export async function GET() {
  try {
    const clicks = await getClicksCollection();
    if (!clicks) {
      return NextResponse.json({ error: "MONGODB_URI가 설정되지 않았습니다." }, { status: 503 });
    }

    const docs = await clicks.find({ linkId: { $in: Array.from(validIds) } }).toArray();
    const counts = Object.fromEntries(docs.map((doc) => [doc.linkId, doc.count]));
    return NextResponse.json(counts);
  } catch (err) {
    console.error("[clicks GET]", err);
    return dbError();
  }
}

// 링크 클릭 1회 기록 (sendBeacon은 text/plain으로 보내므로 text로 읽어서 파싱)
export async function POST(request: Request) {
  let linkId: unknown;
  try {
    linkId = JSON.parse(await request.text()).linkId;
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  if (typeof linkId !== "string" || !validIds.has(linkId)) {
    return NextResponse.json({ error: "존재하지 않는 링크입니다." }, { status: 400 });
  }

  try {
    const clicks = await getClicksCollection();
    if (!clicks) {
      return NextResponse.json({ error: "MONGODB_URI가 설정되지 않았습니다." }, { status: 503 });
    }

    await clicks.updateOne({ linkId }, { $inc: { count: 1 } }, { upsert: true });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[clicks POST]", err);
    return dbError();
  }
}
