import mongoose from "mongoose";


const Schema = mongoose.Schema
mongoose.connect("mongodb://localhost/test").then(() => {
    console.log("Bağlantı başarılı");
}).catch(err => {
    console.log(err, "Bağlantı hatası");
})
const blogSchema = new Schema({
    title: String,
    author: String,
    body: String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
        votes: Number,
        favs: Number
    }
},{timestamps:true});
blogSchema.statics.basligaGoreElemanGetir = function (baslik) {
    return this.find({ title: baslik });
};
blogSchema.virtual("ozet").get(function () {
    return "Bu blogun başlığı" + this.title + "Ve oluşturma tarihi" + this.date;
    
})
const Blog = mongoose.model("blog", blogSchema);
// const myBlog = new Blog({ title: "iLK Blog" })

// myBlog.save().then(result => {
//     console.log(result);
// }).catch(err => {
//     console.log(err);
// })

// Blog.create({ title: "ikinci blog" })



// Blog.basligaGoreElemanGetir("ikinci blog").then(result => {
//     console.log(result);
// });

const myBlog = new Blog({ title: "Virtual Blog" })
console.log(myBlog.ozet);

const myBlog2 = new Blog({ title: "Timestamps Blog" })
myBlog2.save();