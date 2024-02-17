
const express = require("express")
const router = express.Router()
const Joi = require("@hapi/joi");

const kullanicilar = [
    { id: 1, ad: "Recep", yas: 23 },
    { id: 2, ad: "Sabri", yas: 20 },
    { id: 3, ad: "Furkan", yas: 21 },
    { id: 4, ad: "Mehmet", yas: 22 }
]


router.get("/", (req, res) => {
    console.log("users girildi");
    res.send(kullanicilar)

})
router.get("/:id", (req, res) => {
    console.log(req.params.id);
    const bulunanUser = kullanicilar.find(user => user.id === parseInt(req.params.id))
    if (bulunanUser) {
        res.send(bulunanUser)
    } else {
        res.status(404).send(req.params.id + " idli user bulunamadı")
    }
}
)


router.post("/", (req, res) => {


    const { error } = kullaniciBilgileri(req.body)

    if (error) {
        res.status(400).send(error.details[0].message)
    } else {
        const yeniKullanici = {
            id: kullanicilar.length + 1,
            ad: req.body.ad,
            yas: req.body.yas
        }
        console.log("İstek atılıyor");
        console.log(req.body);
        kullanicilar.push(yeniKullanici);
        res.send(yeniKullanici);
    }
});

router.put("/:id", (req, res) => {

    const bulunanUser = kullanicilar.find(user => user.id === parseInt(req.params.id))
    if (!bulunanUser) {
        return res.status(404).send(`${req.params.id} li kullanıcı bulunamadı`);
    }
    const { error } = kullaniciBilgileri(req.body)
    if (error) {
        res.status(400).send(error.details[0].message)
    } else {
        bulunanUser.ad = req.body.ad
        bulunanUser.yas = req.body.yas
    }
    console.log("İstek atılıyor");
    res.send(bulunanUser);

})

router.delete("/:id", (req, res) => {
    const bulunanUser = kullanicilar.find(user => user.id === parseInt(req.params.id))
    if (bulunanUser) {
        const index = kullanicilar.indexOf(bulunanUser);
        kullanicilar.splice(index, 1)
        res.send(bulunanUser)

    } else {
        res.status(404).send(req.params.id + " idli user bulunamadı")
    }
})


function kullaniciBilgileri(user) {
    const schema = Joi.object({
        ad: Joi.string().min(3).max(30).required(),
        yas: Joi.number().integer().required().min(10).max(99)

    })
    return schema.validate(user)

}


module.exports = router