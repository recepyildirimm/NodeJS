import mongoose from "mongoose";

const Schema = mongoose.Schema
mongoose.connect("mongodb://localhost:27017/test").then(result => {
    console.log("Veritabanına bağlandı");
}).catch(err => {
    console.log("Veritabanına bağlanılırken hata oluştu ", err);
})
const userSchema = new Schema({ _id: String, age: Number, name: String, gender: String, eyeColor: String })
const User = mongoose.model("users", userSchema)
//.countDocuments() = kaç eleman varsa dödürüyor
// User.find({name:"Chavez Mcleod"},{name:1 , age:0  }).then(user=>{console.log(user);})
// User.find({age:23},{_id:0, address:1,name:1},{skip:3 ,limit:3}).then(res=>{
//     console.log(res);
// })

// User.find({age:23}).limit(3).skip(3).sort({name:1}).select({name:1,address:1}).then(res =>{
//     console.log(res);
// })



// User.findById("6521596263c778eb3578f6db").then(res => {
//     console.log(res);
// })

//Karşılaştrma operatörleri

//eq : Eşitlik
//ne : Eşit değil
// gt, gte, gt : Büyük \\ gte : Büyük Eşit
//lt, lte,  lt : Küçük \\ lte : Küçük Eşit
//in, nin, in : o değeri içeren  nin :o değeri içermeyen in nin birden çok değer kullanabilirsin


// User.find({ age: {$gte:25, $lte:30 }}, { name: 1, age: 1 }).then(user => { console.log(user); })
// User.find({ age: {$in:[20,23] }}, { name: 1, age: 1 }).then(user => { console.log(user); })// Yaşı 20 veya 23 olanları getiriyor in çoklu kullanım
//User.find().select({name:1,eyeColor:1,age:1,_id:0}).and([{age:23},{eyeColor:"blue"}]).then(user=>{console.log(user);}) //AND KULLANIIMI
// User.find().select({name:1,eyeColor:1,age:1,_id:0}).or([{age:23},{eyeColor:"blue"}]).then(user=>{console.log(user);}) //OR KULLANIMI



//SAYFALANDIRMA
// const sayfaNumarasi = 2;
// const sayfaBasinaGonderi = 10;
// User.find()
//     .skip((sayfaNumarasi - 1) * sayfaBasinaGonderi)
//     .limit(sayfaBasinaGonderi)
//     .then(result => {
//         console.log(result);
//     })

//Idye göre update

// User.findByIdAndUpdate("6521596255c04180c3c8fa4a", { eyeColor: "Brown" }, { new: true }).lean().select({ name: 1, gender: 1, age: 1 }).then(result => {
//     console.log(result);
// })
 

//Idye göre delete
User.findByIdAndDelete("6521596255c04180c3c8fa4a").then(result =>{
    console.log(result );
})