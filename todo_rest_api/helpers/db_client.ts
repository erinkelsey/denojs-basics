import { MongoClient, Database } from "https://deno.land/x/mongo@v0.13.0/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

let db: Database

/**
 * Connect to MongoDB database.
 */
export function connect() {
  const mongoConnection = Deno.env.get('MONGODB_SRV_CONNECTION')!
  const mongoDBName = Deno.env.get('MONGODB_DB')!

  const client = new MongoClient();
  client.connectWithUri(mongoConnection);

  db = client.database(mongoDBName);
}

/**
 * Get a MongoDB database, which was previously opened with connect(). 
 * 
 * @returns {Database} the mongo database. 
 */
export function getDb() {
  return db
}