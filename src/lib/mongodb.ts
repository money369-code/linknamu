import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

declare global {
  // 개발 모드 핫 리로드 시 연결이 계속 늘어나지 않도록 전역에 보관
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

export function getMongoClient(): Promise<MongoClient> | null {
  if (!uri) return null;

  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(uri).connect().catch((err) => {
      // 연결 실패를 캐시하지 않고 다음 요청에서 다시 시도
      global._mongoClientPromise = undefined;
      throw err;
    });
  }
  return global._mongoClientPromise;
}

let indexReady: Promise<string> | undefined;

export async function getClicksCollection() {
  const clientPromise = getMongoClient();
  if (!clientPromise) return null;

  const client = await clientPromise;
  const collection = client
    .db(process.env.MONGODB_DB ?? "linknamu")
    .collection<{ linkId: string; count: number }>("clicks");

  // 첫 클릭이 동시에 들어와도 링크별 문서가 하나만 생기도록 고유 인덱스 보장
  indexReady ??= collection.createIndex({ linkId: 1 }, { unique: true }).catch((err) => {
    indexReady = undefined;
    throw err;
  });
  await indexReady;
  return collection;
}
