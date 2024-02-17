console.log("Başladı");
setTimeout(() => {
    console.log("3 saniye geçti");
}, 3000)

setTimeout(() => console.log("0 saniyelik işlem bitti"), 0)
console.log("Bitti");