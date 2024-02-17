import express from "express";
import dbConnection from "./database/dbConnection.js";
import userRouter from "./router/userRouter.js";
import hataYakalayici from "./middleware/hataMiddleware.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRouter);


app.get("/", (req, res) => {
    res.status(200).json({ "mesaj": "Hoşgeldiniz" });
})
app.use(hataYakalayici);


app.listen(3000, () => {
    console.log("3000 portundan server ayaklandırıldı");
})