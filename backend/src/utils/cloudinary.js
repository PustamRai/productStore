import { v2 as cloudinary } from "cloudinary"
import fs from "fs"
import dotenv from 'dotenv';

dotenv.config(); 

    // configuration
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_SECRET_KEY
    })

    // upload on cloudinary
    const uploadOnCloudinary = async (localFilePath) => {
        try {
            if(!localFilePath) return null;
            // upload the file on cloudinary
            const uploadResult = await cloudinary.uploader.upload(localFilePath, {
                resource_type: "auto"
            });

            // file has been uploaded successfully
            
            console.log("file successfully uploaded on cloudinary", uploadResult.url);
            console.log("uploadResult :", uploadResult);
            fs.unlinkSync(localFilePath);
            return uploadResult;
        } catch (error) {
            console.log("Error in uploading file on cloudinary", error);
            fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
            return null;
        }
    }

export { uploadOnCloudinary }