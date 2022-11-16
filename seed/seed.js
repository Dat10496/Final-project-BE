require("dotenv").config();
const csv = require("csvtojson");
const Item = require("../models/Item");
const mongoose = require("mongoose");

const mongoUri = process.env.MONGO_URI;

const refractorData = async () => {
  // read data from csv file
  let data = await csv().fromFile("MEN_SHOES.csv");

  data = Array.from(data);
  data = data.slice(0, 300);

  /**
   * refractor data
   */
  data = data.map((data, index) => {
    return {
      admin: "631c4f3f721b4a9290ea1f3b",
      brand: data.Brand_Name,
      totalSold: parseInt(data.How_Many_Sold),
      price: Math.floor(Math.random() * (2000 - 10) + 10),
      details: data.Product_details,
      rating: parseFloat(data["RATING"]),
      image: `/images/${index + 1}.jpg`,
    };
  });

  /**
   * Connect to DB & create data
   */
  mongoose
    .connect(mongoUri)
    .then(() => console.log("Connected DB"))
    .then(async () => await Item.create(data))
    .then(console.info)
    .catch((err) => console.log(err));
};

refractorData().catch((err) => console.log(err, "refractorData error"));
