require("dotenv").config();
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_KEY,
});

const cloudinaryUpload = async (image) => {
  if (!image) return "";

  try {
    const res = await cloudinary.uploader.upload(image.path);

    return res.secure_url;
  } catch (error) {
    console.log("upload to cloudinary error", error);
    throw error;
  }
};

module.exports = cloudinaryUpload;
