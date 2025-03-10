import express from "express"
import dotenv from "dotenv"
import { connectDB } from "./db/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8002;

app.get("/", (req, res) => {
    res.status(200).json("sever is ready");
})

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

