import { User } from "../models/userModel.js ";
import createError from "http-errors"
import bcrypt from "bcrypt"

export const tumUserlarListele = async (req, res) => {
    const tumUserlar = await User.find({});
    res.json({ tumUserlar });
}
export const kullaniciBilgisi = (req, res) => {
    res.json(req.user);
}
export const oturumAcanKullaniciBilgisi = async (req, res, next) => {
    delete req.body.createdAt
    delete req.body.updatedAt
    if (req.body.hasOwnProperty("sifre")) {
        req.body.sifre = await bcrypt.hash(req.body.sifre, 10)
    }
    const { error, value } = User.joiValidationForUpdate(req.body)
    if (error) {
        next(createError(400, error))

    } else {
        try {
            const sonuc = await User.findByIdAndUpdate({ _id: req.user._id }, req.body, { new: true, runValidators: true })
            if (sonuc) {
                return res.json(sonuc)
            } else {
                return res.status(404).json({
                    mesaj: "Kullanıcı bulunamadı"
                })
            }
        } catch (err) {
            next(err)
        }

    }

}

export const yeniUserOluştur = async (req, res, next) => {
    try {

        const eklenecekUser = new User(req.body);
        eklenecekUser.sifre = await bcrypt.hash(req.body.sifre, 10);
        const { error, value } = eklenecekUser.joiValidation(req.body);
        if (error) {
            next(createError(400, error))
        } else {
            const sonuc = await eklenecekUser.save();
            res.json(sonuc)
        }

    } catch (err) {
        next(err)
    }

};

export const girisYap = async (req, res, next) => {
    try {
        const user = await User.girisYap(req.body.email, req.body.sifre);
        const token = await user.generateToken();
        res.json({
            user: user,
            token: token
        })

    } catch (err) {
        next(err)
    }

}

export const adminKullaniciGuncelleme = async (req, res, next) => {

    if (req.body.hasOwnProperty("sifre")) {
        req.body.sifre = await bcrypt.hash(req.body.sifre, 10)
    }
    const { error, value } = User.joiValidationForUpdate(req.body)
    if (error) {
        next(createError(400, error))

    } else {
        try {
            const sonuc = await User.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            if (sonuc) {
                return res.json(sonuc)
            } else {
                return res.status(404).json({
                    mesaj: "Kullanıcı bulunamadı"
                })
            }
        } catch (err) {
            next(err)
        }

    }

}

export const kullaniciKendiniSilme = async (req, res, next) => {
    try {
        const sonuc = await User.findByIdAndDelete({ _id: req.user._id });
        if (sonuc) {
            return res.json({
                mesaj: "Kullanıcı silindi"
            })

        } else {
            throw createError(404, "Kullanıcı bulunamadı")
        }
    }
    catch (err) {
        next(createError(400, err))

    }
}

export const adminUserSilme = async (req, res, next) => {
    try {
        const sonuc = await User.findByIdAndDelete({ _id: req.params.id });
        if (sonuc) {
            return res.json({
                mesaj: "Kullanıcı silindi"
            })

        } else {
            throw createError(404, "Kullanıcı bulunamadı")
        }
    }
    catch (err) {
        next(createError(400, err));

    }
}

export const adminTumUserSilme = async (req, res, next) => {
    try {
        
        const sonuc = await User.deleteMany({ isAdmin: false });
        if (sonuc) {
            return res.json({
                mesaj: "Tüm kullanıcılar silindi"
            });
        } else {
            throw createError(404, "Kullanıcı bulunamadı");
        }
    } catch (err) {
        console.error("Hata: ", err);
        next(createError(500, err));
    }
};