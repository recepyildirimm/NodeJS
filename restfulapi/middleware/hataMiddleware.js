
export default function hataYakalayici(err,req,res,next) {

    console.log(err);
    if(err.code ===11000){
        return res.json({
            mesaj: Object.keys(err.keyValue)+ " için girdiğiniz "+Object.values(err.keyValue)+" değeri daha önceden kullanılmış",
            hataKodu:400
        })
    }
    if(err.code ===66){
        return res.json({
            mesaj:  "Değiştirilemez alanı güncellemeye çalıştınız",
            hataKodu:400
        })
    }

    res.status(err.statusCode ||500)
res.json({
    hataKodu:err.statusCode||400,
    mesaj: err.message
})

}