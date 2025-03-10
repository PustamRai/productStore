import { Product } from "../models/products.models.js";

export const addProduct = async (req, res) => {
    try {
        const { name, price, image } = req.body
    
        if(!name || !price  || !image) {
            return res.status(400)
            .json({
                success: false,
                message: "please provide all fields"
            })
        }
    
        const newProduct = await Product.create({
            name,
            price,
            image
        })
    
        return res.status(201).
        json({
            success: true,
            data: newProduct,
            message: "new product added successfully"
        })
    } catch (error) {
        console.error("Error adding products: ", error);
        return res.status(500).
        json({
            success: false,
            message: "internal server error",
            error: error.message
        })
    }
}