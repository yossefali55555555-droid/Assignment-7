import express from "express"
import { test } from "./db/db.connection.js"
import bookrouter from "./modules/books/controller.js"
 import authorrouter from "./modules/authors/controller.js"
 import logrouter from "./modules/log/controller.js"
const app = express()
app.use(express.json())
export const bootstrap=async()=>{
    await test()
    app.use("/collection",bookrouter)
     app.use("/collection",authorrouter)
     app.use("/collection",logrouter)
    app.listen(3000)
}