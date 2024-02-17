const express = require("express");
const app = express();

function m1(req,res,next) {

    console.log("m1 deyim")
    next();
}


app.use(m1)
app.use((req,res,next)=> {

    console.log("m2 deyim");
   // res.send("m2 tamamlandı");

   req.zaman=Date.now();
   next();

})

app.use('/',(req,res)=>{
    console.log("m3 yani root rotasındayız req zamanı "+req.zaman);
    res.send(""+ req.zaman)
})
console.log("Burada");
app.listen(3000,()=>{
    console.log("3000 Portu dinleniyor");
})