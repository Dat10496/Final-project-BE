const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * @typedef Item
 * @property {integer} id
 * @property {string} brand.required - Some description for product
 * @property {string} totalSold.required - Some description for product
 * @property {number} price.required - Some description for product
 * @property {number} quantity.required - Some description for product
 * @property {string} details.required - Some description for product
 * @property {string} image - Some description for product
 * @property {string} admin - Some description for product
 * @property {boolean} isDeleted - Some description for product
 */
/**
 * @typedef Error
 * @property {string} code.required
 */

/**
 * @typedef Response
 * @property {[integer]} code
 */
const itemSchema = Schema(
  {
    brand: { type: String, required: true },
    totalSold: { type: Number },
    price: { type: Number, select: true },
    quantity: { type: Number, required: true, default: 1 },
    details: { type: String, required: true },
    rating: { type: Number },
    image: { type: String },

    isDeleted: { type: Boolean, default: false, select: false, required: true },
  },
  { timestamps: true }
);

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
