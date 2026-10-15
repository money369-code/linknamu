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
    global._mongoClientPromise = new MongoClient(uri).connect();
  }
  return global._mongoClientPromise;
}

export async function getClicksCollection() {
  const clientPromise = getMongoClient();
  if (!clientPromise) return null;

  const client = await clientPromise;
  return client
    .db(process.env.MONGODB_DB ?? "linknamu")
    .collection<{ linkId: string; count: number }>("clicks");
}
