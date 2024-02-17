import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/test").then(result => {
    console.log("Bağlantı başarılı");
}).catch(err => {
    console.log("Bağlantıda sorun oldu", err);
})

const userSchema = new mongoose.Schema({
    isim: String,
})
const User = mongoose.model("user", userSchema);
const Recep = User({ isim: ["RECEP"] });
Recep.save().then(result => { 
    console.log(result);
}).catch(err  =>{
    console.log(err);
})