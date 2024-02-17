import express from "express";
import { User } from "../models/userModel.js";
import { tumUserlarListele, kullaniciBilgisi, oturumAcanKullaniciBilgisi, yeniUserOluştur, girisYap, adminKullaniciGuncelleme, kullaniciKendiniSilme, adminUserSilme, adminTumUserSilme } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { adminMiddleware } from "../middleware/adminMiddleware.js";


const Router = express.Router;

const userRouter = Router();
//tüm kullanıcıları admin listeleyebilsin
userRouter.get("/", [authMiddleware, adminMiddleware], tumUserlarListele)
//Oturum açan kullanıcı bilgisi
userRouter.get("/me", authMiddleware, kullaniciBilgisi)
//Oturum açan kullanıcı güncellemesi
userRouter.patch("/me", authMiddleware, oturumAcanKullaniciBilgisi)
//Yeni kullanici kayit
userRouter.post("/", yeniUserOluştur)
//Giriş yapma 
userRouter.post("/giris", girisYap)
//Admin kullanici güncelleme
userRouter.patch("/:id", adminKullaniciGuncelleme);
//Kullanici kendini silme
userRouter.delete("/me", authMiddleware, kullaniciKendiniSilme)
//Admin tüm kullanıcıları silme

userRouter.delete("/deleteAll", [authMiddleware, adminMiddleware], adminTumUserSilme)

//Admin user silme
userRouter.delete("/:id", [authMiddleware, adminMiddleware], adminUserSilme)
export default userRouter;


