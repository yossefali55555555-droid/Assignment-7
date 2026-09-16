import { MongoClient } from "mongodb";
const client = new MongoClient ("mongodb://localhost:27017")
export const db = await client.db("bookStore")
export const test = async ()=>{
    await client.connect()
    console.log("database is connected")
}