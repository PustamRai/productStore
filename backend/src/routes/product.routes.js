import { Router } from "express"
import { 
    addProduct,
    allProducts,
    updateProduct

} from "../controllers/product.controllers.js"

const router = Router()

router.get("/allProducts", allProducts)
router.post("/addProduct", addProduct)
router.post("/updateProduct/:product_id", updateProduct)


export default router