const Item = require("../models/Item");
const { sendResponse, AppError, catchAsync } = require("../helpers/utils");

const itemControllers = {};

itemControllers.getAllItems = catchAsync(async (req, res, next) => {
  // Get req from client
  let { page, limit, ...filter } = { ...req.query };
  page = parseInt(page) || 1;
  limit = parseInt(limit) || 10;

  // Process
  // Set Filter
  const filterConditions = [{ isDeleted: false, createdAt: -1, updatedAt: -1 }];
  const sortConditions = {};

  if (filter.brand) {
    filterConditions.push({ brand: { $regex: filter.brand, $options: "i" } });
  }

  if (filter.price) {
    if (filter.price === "$lte 500") {
      filterConditions.push({ price: { $lte: 500 } });
    } else if (filter.price === "$gte 500, $lte 1500") {
      filterConditions.push({ price: { $gte: 500, $lte: 1500 } });
    } else if (filter.price === "$gte 1500") {
      filterConditions.push({ price: { $gte: 1500 } });
    }
  }

  if (filter.rating) {
    if (filter.rating === "$lte 3") {
      filterConditions.push({ rating: { $lte: 3 } });
    } else if (filter.rating === "$gt 3, $lt 4") {
      filterConditions.push({ rating: { $gt: 3, $lt: 4 } });
    } else if (filter.rating === "$gte 4") {
      filterConditions.push({ rating: { $gte: 4 } });
    }
  }

  if (filter.value) {
    if (filter.value === "createdAt: -1") {
      sortConditions.createdAt = -1;
    } else if (filter.value === "price: -1") {
      sortConditions.price = -1;
    } else if (filter.value === "price: 1") {
      sortConditions.price = 1;
    }
  }

  const filterCriteria = filterConditions.length
    ? { $and: filterConditions }
    : {};

  const count = await Item.countDocuments(filterCriteria);
  const totalPages = Math.ceil(count / limit);
  const offset = limit * (page - 1);

  let items = await Item.find(filterCriteria)
    .sort(sortConditions)
    .limit(limit)
    .skip(offset);

  // Send response
  return sendResponse(
    res,
    200,
    true,
    { items, totalPages, count },
    null,
    "Get Items Successfully"
  );
});

itemControllers.getItemDetail = catchAsync(async (req, res, next) => {
  // Get id from client
  const { id } = req.params;

  // Process
  let item = await Item.findById(id);
  if (!item) throw new AppError(404, "Item not Found", "Get Item Error");

  // Send response
  return sendResponse(
    res,
    200,
    true,
    item,
    null,
    "Get Single Item Successfully"
  );
});

module.exports = itemControllers;
