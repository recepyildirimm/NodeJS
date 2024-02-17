import Express  from "express"
import { tekMakaleGetir, tumMakaleleriGetir } from "../controllers/blogController.js";
const router = Express.Router();

router.get("/",tumMakaleleriGetir)
router.get("/:makaleID",tekMakaleGetir)

export default router