import createHttpError from "http-errors";
import Jwt from "jsonwebtoken"
import { User } from "../models/userModel.js";
export const authMiddleware = async (req, res, next) => {
    try {
        const authorizationHeader = req.header("Authorization");

        if (!authorizationHeader) {
            return next(createHttpError(400, "Token boş tekrar giriş yapınız"))
        }

        const token = authorizationHeader.replace("Bearer ", "");
        const sonuc = Jwt.verify(token, "1234");
        console.log("burası",await User.findById({ _id: sonuc._id }));
        const bulunanUser = await User.findById({ _id: sonuc._id })
        if (bulunanUser){
            req.user = bulunanUser
        }
        else {
            throw new Error("Lütfen giriş yapınız")
        }

        next();
    } catch (err) {
        next(err);
    }
}
