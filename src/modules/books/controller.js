import { Router } from "express";
const bookrouter = Router();
import * as all from "./service.js"
bookrouter.post("/books",async(req,res)=>{
    const data = await all.CTC()
    res.json(data)
})

bookrouter.post("/books/index",async(req,res)=>{
    const data = await all.createindex()
    res.json(data)
})


bookrouter.post("/books/insertone",async(req,res)=>{
    const body = req.body
    const data = await all.insertdoc(body)
    res.json(data)
})


bookrouter.post ("/books/insertmany",async(req,res)=>{
    const body = req.body 
    const data = await all.insertmany(body)
    res.json(data)
})

bookrouter.get ("/books/future",async(req,res)=>{
    const data = await all.future()
    res.json(data)
})

bookrouter.get("/books/find",async(req,res)=>{
    const title = req.query.title 
    const data = await all.findbytitle(title)
    res.json(data)
})


bookrouter.get("/books/find/year",async(req,res)=>{
    const from = Number(req.query.from)
    const to = Number(req.query.to) 
    const data = await all.findbyYear(from,to)
    res.json(data)
})


bookrouter.get("/books/find/genre",async(req,res)=>{
    const genre = req.query.genre 
    const data = await all.findbygenre(genre)
    res.json(data)
})


bookrouter.get("/books/findall",async(req,res)=>{
    const data = await all.findall()
    res.json(data)
})



bookrouter.get("/books/findint",async(req,res)=>{
    const data = await all.intonly()
    res.json(data)
})


bookrouter.get("/books/exclude-genres",async(req,res)=>{
    const data = await all.nin()
    res.json(data)
})


bookrouter.get("/books/deletebefore",async(req,res)=>{
const year =Number( req.query.year)
const data =await all.deletebefore(year)
res.json(data)
})


bookrouter.get("/books/agg1",async(req,res)=>{
    const data = await all.after2000()
    res.json(data)
})


bookrouter.get("/books/agg2",async(req,res)=>{
    const data = await all.after2()
    res.json(data)
})


bookrouter.get("/books/agg3",async(req,res)=>{
    const data = await all.after3()
    res.json(data)
})



export default bookrouter