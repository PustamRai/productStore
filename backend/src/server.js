import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { connectDB } from "./db/db.js";
import productRouter from "./routes/product.routes.js";

dotenv.config();

const app = express()

const PORT = process.env.PORT || 8002;

// middleware
app.use(
    cors({
        origin: process.env.CORS_ORIGIN, 
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
)
app.use(express.json())
app.use(express.static('public'))

// routes
app.use("/api/products", productRouter)


// when connection is build with "async" with database it returns promises automatically. So, .then and .catch is required to handle the error.
connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`server is listening at PORT ${PORT}`)
    })
})
.catch((error) => {
    console.error("connection to mongodDB failed...", error.message)
    process.exit(1) // process code 1 means exit with failure, 0 means success
})

