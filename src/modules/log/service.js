import { db } from "../../db/db.connection.js"
export const createcapped = async ()=>{
    await db.createCollection("log",{capped:true,size:1024 * 1024})
    return {"ok":1}
}


export const insert = async (data)=>{
    const data1 = await db.collection("log").insertOne(data)
    return{data1}
}

export const after4 = async () => {
    const data = await db.collection("log")
        .aggregate([
            {
                $lookup: {
                    from: "books",
                    localField: "book_id",
                    foreignField: "_id",
                    as: "book_details"
                }
            },
            {
                $project: {
                    _id: 0,
                    action: 1,
                    book_details:1

                }
            }
        ]).toArray();

    return { data };
};