import { Router } from "express";
const authorrouter = Router();
import * as all from "./service.js"

authorrouter.post("/create",async(req,res)=>{
    const body = req.body
    const data1 = await all.insert(body)
    res.json(data1)
})


export default authorrouter
