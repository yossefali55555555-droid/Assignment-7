import { db } from "../../db/db.connection.js"
export const insert = async(data)=>{
    const data1 = await db.collection("authors").insertOne(data)
    return {data1}
}