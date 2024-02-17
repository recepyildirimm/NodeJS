const path = require('path')
const fs = require('fs')
const { log } = require('console')


fs.readdir("./",{withFileTypes:true},function(err,files){
    if(err) console.log("hata çıktı" +err);
    console.log(files[0].isDirectory());
})
const pathObject = path.parse(__dirname)
console.log(pathObject);