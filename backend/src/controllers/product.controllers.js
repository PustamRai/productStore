import { Product } from "../models/products.models.js";


export const allProducts = async (req, res) => {
    try {
        const allProducts = await Product.find({})

        if(allProducts.length === 0) {
            return res.status(404).
            json({
                success: false,
                message: "No products found"
            })
        }

        return res.status(200).
        json({
            success: true,
            data: allProducts,
            message: "products fetched successfully"
        })
    } catch (error) {
        console.error("error in fetching products: ", error)
        return res.status(500).
        json({
            success: false,
            message: "internal server error",
            error: error.message
        })
    }
}

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
        console.error("Error adding product: ", error);
        return res.status(500).
        json({
            success: false,
            message: "error while adding product",
            error: error.message
        })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const { product_id } = req.params
        const { name, price, image } = req.body
    
        if(!product_id) {
            return res.status(400).
            json({
                success: false,
                message: "Invalid Id"
            })
        }
    
        const updateProduct = await Product.findByIdAndUpdate(
            product_id,
            {
                $set: {
                    name,
                    price,
                    image
                }
            },
            {
                new: true
            }
        )

        return res.status(200).
        json({
            success: true,
            data: updateProduct,
            message: "product updated successfully"
        })
    } catch (error) {
        console.log("error in updating product: ", error)
        return res.status(400).
        json({
            success: false,
            message: "error while updating product",
            error: error.message
        })
    }
}