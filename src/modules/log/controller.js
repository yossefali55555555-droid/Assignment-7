import { Router } from "express";
const logrouter = Router();
import * as all from "./service.js"
logrouter.get("/log/capped",async(req,res)=>{
    const data = await all.createcapped()
    res.json(data)
})


logrouter.post("/log/insert",async(req,res)=>{
    const body = req.body
    const data = await all.insert(body)
    res.json(data)
})

logrouter.get("/log/agg4",async(req,res)=>{
    const data = await all.after4()
    res.json(data)
})

export default logrouter