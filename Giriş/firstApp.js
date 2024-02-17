const myModule = require("./module-nedir");
const pcInfo = require("./pcInfo")
require ("./module-nedir");
function selamVer(){
    console.log("Merhaba NodeJS");
}
console.log(myModule.ad);
console.log(myModule.personel.yas);
myModule.ekle(3,5)
myModule.cikar(8,3)
selamVer();
pcInfo.pcInfo()