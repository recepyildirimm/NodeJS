import mongoose from "mongoose"
import Joi from "@hapi/joi"
import createError from "http-errors"
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken"
const Schema = mongoose.Schema

const userSchema = new Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
    userName: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50,
        unique: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 5,

    },
    isAdmin: {
        type: Boolean,
        default: false
    }


}, { collection: "kullanicilar", timestamps: true })

const schema = Joi.object({
    name: Joi.string().min(3).max(50).trim().required(),
    userName: Joi.string().min(3).max(50).trim().required(),
    email: Joi.string().trim().email().required(),
    password: Joi.string().trim().min(5).required()
});
//POST İŞLEMLERİ İÇİN BU ŞEMA KULLANILIR
userSchema.methods.joiValidation = function (userObject) {
    return schema.validate(userObject, { allowUnknown: true });
}

//PATCH İŞLEMLERİ İÇİN BU ŞEMA
userSchema.statics.joiValidationForUpdate = function (userObject) {
    return schema.validate(userObject);

}

userSchema.methods.toJSON = function () {

    const user = this.toObject();
    delete user._id;
    delete user.password;
    delete user.createdAt;
    delete user.updatedAt;
    delete user.__v
    return user
}
//GİRİŞ YAPMA İŞLEMİ
userSchema.statics.girisYap = async (email, password) => {
    const { error, value } = schema.validate({ email, password });
    if (error) {
        throw createError(400, error)
    }
    const user = await User.findOne({ email: email })
    if (!user) {
        throw createError(400, "Girilen email veya şifre hatalı")
    }
    const passwordKontrol = await bcrypt.compare(password, user.password)
    if (!passwordKontrol) {
        throw createError(400, "Girilen şifre hatalı")

    }
    return user
}

userSchema.methods.generateToken = async function () {
    const girisYapanUser = this;
    const token = await Jwt.sign({ _id: girisYapanUser._id, email: girisYapanUser.email, }, "1234", { expiresIn: "20h" })
    return token

};

export const User = mongoose.model("User", userSchema)

