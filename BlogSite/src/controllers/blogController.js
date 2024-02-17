import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';
import fs from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const navbarContent = fs.readFileSync(path.join(__dirname, '../views/navbar/navbar.html'), 'utf8');
const pageContent = fs.readFileSync(path.join(__dirname, '../views/makaleler/makaleIndex.html'), 'utf8');

export const tumMakaleleriGetir = async (req, res) => {
    try {
        const blogAPI = await axios.get("https://emrealtunbilek.com/wp-json/wp/v2/posts")
        const fullPageContent = `
    ${navbarContent}
    ${pageContent}

`;        res.send(fullPageContent);


    } catch (err) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.header);
        res.json({
            mesaj: "HATA " + err.response.data
        })

    }
    //res.sendFile(fullPageContent);
}


export const tekMakaleGetir = async (req, res) => {
    try {
        const makaleID = req.params.makaleID
        const tekMakale = await axios.get("https://emrealtunbilek.com/wp-json/wp/v2/posts/" + makaleID)

    } catch (err) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.header);
        res.json({
            mesaj: "HATA " + err.response.data
        })

    }
    res.sendFile(path.join(__dirname, '../views/makaleler/makale.html'));

}