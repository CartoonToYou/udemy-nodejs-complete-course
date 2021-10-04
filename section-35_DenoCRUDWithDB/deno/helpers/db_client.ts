import { MongoClient, Database } from "https://deno.land/x/mongo@v0.22.0/mod.ts";

let db: Database;

export async function connect() {
  const client = new MongoClient()
  await client.connect(
    "mongodb+srv://node-complete:dhvd6gdiupo@node-complete-cluster.dq9dg.mongodb.net/?retryWrites=true&w=majority",
  );
  
  db = client.database('todo-app')
}

export function getDb() {
  return db
}