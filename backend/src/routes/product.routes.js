import { Router } from "express"
import { addProduct } from "../controllers/product.controllers.js"

const router = Router()

router.post("/addProducts", addProduct)


export default router