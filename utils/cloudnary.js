import { v2 as cloudinary } from 'cloudinary';
import { response } from 'express';
import fs from 'fs';

cloudinary.config({
   cloudName:process.env.CLOUDINARY_CLOUD_NAME,
   api_key:process.env.CLOUDINARY_API_KEY,
   api_secret:process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath)=>{
    try{
              if(!localFilePath){
                return null
              }
              //upload the file on cloudinary
              cloudinary.uploader.upload(localFilePath,
                {
                    resource_type:"auto"
                }
              )
              // file has been uploaded successfull
              console.log("File is uploaded on cloudinary",response.url);
              return url              
    }
    catch(error){
               fs.unlinkSync(localFilePath) // remove the locally saved temporary file as upload operation got failed
               return null;
    }
}

export {uploadOnCloudinary}