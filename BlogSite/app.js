import Express  from "express";
import blogRouter from "./src/routers/blogRouter.js"
import path from "path"

const app = Express();

app.use(Express.static("public"))
app.use("/",blogRouter)
app.use("/blog",blogRouter)
app.listen(3000,()=>{
    console.log("3000 portundan ayaklandı ");
})