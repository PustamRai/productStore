import { Router } from "express"
import { 
    addProduct,
    allProducts,
    updateProduct,
    deleteProduct
} from "../controllers/product.controllers.js"
import { upload } from "../middleware/multer.middleware.js"

const router = Router()

router.get("/allProducts", allProducts)

// router.post("/addProduct", addProduct)
router.post("/addProduct", upload.single("image"), addProduct);

router.post("/updateProduct/:product_id", updateProduct)
router.post("/deleteProduct/:product_id", deleteProduct)

export default router