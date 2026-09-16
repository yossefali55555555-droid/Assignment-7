import { BSONType } from "mongodb"
import { db } from "../../db/db.connection.js"

export const CTC = async ()=>{
        const data = await db.createCollection("books",{
                validator:{
                    $jsonSchema:{
                        bsonType:"object",
                        required:["title"],
                        properties:{
                            title:{
                                minLength:1
                            }
                        }
                    }
                }
        })
            return {
        "ok":1
    };
}


export const createindex = async ()=>{
    const data = await db.collection("books").createIndex({title:1})
    return {data}
}


export const insertdoc = async (data) =>{
    const data1 = await db.collection("books").insertOne(data)
    return {data1}
}

export const insertmany = async (data)=>{
    const data1 = await db.collection("books").insertMany(data)
    return {data1}
}
  

export const future =async()=>{
    const data = await db.collection("books").updateOne({
        title:"Future"
    },{
    
        $set:{
            year:2022
        }
    
    })
    return {data}
}


export const findbytitle =async(title)=>{
    const data = await db.collection("books").findOne({title:title})
    return{data}
}

export const findbyYear =async(from,to)=>{
    const data = await db.collection("books").find({year:{
        $gt:from,
        $lt:to
    }}).toArray()
    return{data}
}


export const findbygenre =async(genre)=>{
    const data = await db.collection("books").find({genres:genre}).toArray()
    return{data}
}

export const findall =async()=>{
    const data = await db.collection("books").find().sort({year:-1}).skip(2).limit(3).toArray()
    return{data}
}

export const intonly =async()=>{
    const data = await db.collection("books").find({year:{
        $type:"int"
    }}).toArray()
    return{data}
}


export const nin =async()=>{
    const data = await db.collection("books").find({genre:{
        $nin:["Horror","Science Fiction"]
    }}).toArray()
    return{data}
}


export const deletebefore =async(year)=>{
    const data = await db.collection("books").deleteMany({
        year:{
            $lt:year
        }
    })
    return {data}
}


export const after2000 = async ()=>{
    const data = await db.collection("books")
.aggregate(
    [
        {
            $match:{
                year:{
                    $gt :2000
                }
            }
        },
        {
            $sort:{
                year:-1
            }
        }
    ]
).toArray()
return {data}
}



export const after2 = async ()=>{
    const data = await db.collection("books")
.aggregate(
    [
        {
            $match:{
                year:{
                    $gt :2000
                }
            }
        },
        {
           $project:{
            _id:0,
            title:1,
            author:1,
            year:1
           }
        }
    ]
).toArray()
return {data}
}


export const after3 = async ()=>{
    const data = await db.collection("books")
.aggregate(
    [{
        $unwind:"$genres"
    },{
        $project:{
            _id:0,
            title:1,
            genres:1
        }
    }]).toArray()
return {data}
}






