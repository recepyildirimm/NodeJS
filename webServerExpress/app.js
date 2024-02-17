const express = require("express");
const morgan = require("morgan");
const kullaniciRouter = require("./router/kullanici_router")
const anasayfaRouter = require("./router/anasayfaRouter")
const Router404 = require("./router/404Routes")
const app = express();
app.use(express.json());
app.use(express.urlencoded( {extended: true}))
app.use(express.static("public"))
app.use(morgan("common"))
app.use("/users",kullaniciRouter)
app.use("/",anasayfaRouter)
app.use(Router404)

app.listen(3000)