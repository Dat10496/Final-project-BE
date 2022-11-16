const express = require("express");
const router = express.Router();
const { param } = require("express-validator");
const { checkObjectId, validate } = require("../middlewares/validator");
const {
  getAllItems,
  getItemDetail,
} = require("../controllers/item.controllers");

/**
 * This function comment is parsed by doctrine
 * @route GET /items
 * @group Item - Operations about item
 * @returns {object} 200 - An array of item
 * @returns {Error}  default - Unexpected error
 */
router.get("/", getAllItems);

/**
 * @route GET /items/:id
 * @description Get the item's detail
 * @access Public
 **/
router.get(
  "/:id",
  validate([param("id").exists().isString().custom(checkObjectId)]),
  getItemDetail
);

module.exports = router;
