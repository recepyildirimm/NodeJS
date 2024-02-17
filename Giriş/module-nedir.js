let isim = "Recep YILDIRIM";
let topla = function (a, b) {
    console.log(a + b);
}
console.log(module);

// module.exports.ad = isim;
// module.exports.ekle = topla;
exports.ad = isim;
exports.personel = {
    isim: "Recep",
    yas:23

};

exports.ekle = topla;
exports.cikar = function (a,b){
    console.log(a-b);
};