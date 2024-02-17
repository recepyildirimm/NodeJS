const os = require('node:os');
const fs = require('node:fs');
function pcInfo() {
    let freeRam = byteToGB(os.freemem())
let totalRam = byteToGB(os.totalmem())
let usedRam = (totalRam - freeRam).toFixed(2)
let cpuSayisi = os.cpus().length
fs.writeFile("Pc_info.txt", verileriGoster(), (err) => {
    if (err) console.log("dosyaya yazarken hata oldu" + err);
})
function byteToGB(toplamByte) {
    return (toplamByte / 1024 / 1024 / 1024).toFixed(2)
}

function verileriGoster() {

    return `Toplam Ram: ${totalRam} , Kullanılan Ram: ${usedRam}, Free Mem :${freeRam}, CPU sayisi: ${cpuSayisi}`;

}
verileriGoster()
    
}
exports.pcInfo=pcInfo;