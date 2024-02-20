const {
  after: uploadAfterHook,
  before: uploadBeforeHook,
} = require("./actions/upload-image.hook");

const Components = require("./components/customComponent.tsx");

const option = {};

// Set option of models in adminjs
// User option
option.userOption = {
  parent: {
    name: "Admin Content",
    icon: "fas fa-cogs",
  },
  properties: {
    cart: {
      isArray: true,
      type: "mixed",
    },
    "cart.product": {
      type: "mixed",
    },
    "cart.product.brand": {
      type: "string",
    },
    "cart.product.totalSold": {
      type: "number",
    },
    "cart.product.price": {
      type: "number",
    },
    "cart.product.details": {
      type: "string",
    },
    "cart.quantity": {
      type: "number",
    },
  },
  listProperties: ["email", "name", "_id", "googleId"],
};

// Item Option
option.itemOption = {
  parent: {
    name: "Admin Content",
    icon: "fas fa-cogs",
  },
  listProperties: ["brand", "totalSold", "price", "rating", "details", "image"],
  editProperties: ["brand", "totalSold", "price", "rating", "details", "image"],
  filterProperties: [
    "_id",
    "brand",
    "totalSold",
    "price",
    "rating",
    "createdAt",
    "updatedAt",
    "isDeleted",
  ],
  properties: {
    image: {
      type: "string",
      components: {
        edit: Components.Image,
        list: Components.ImageList,
      },
    },
  },
  actions: {
    new: {
      after: async (response, request, context) => {
        return uploadAfterHook(response, request, context);
      },
      before: async (request, context) => {
        return uploadBeforeHook(request, context);
      },
    },
    edit: {
      after: async (response, request, context) => {
        return uploadAfterHook(response, request, context);
      },
      before: async (request, context) => {
        return uploadBeforeHook(request, context);
      },
    },
    show: {
      isVisible: false,
    },
  },
};

// Payment Option
option.paymentOption = {
  parent: {
    name: "Admin Content",
    icon: "fas fa-cogs",
  },
  properties: {
    data: {
      isObject: true,
      type: "mixed",
    },
    "data.id": {
      type: "string",
    },
    "data.status": {
      type: "string",
    },
    "data.create_time": {
      type: "string",
    },
    "data.amount": {
      type: "string",
    },
    "data.currency_code": {
      type: "string",
    },
    "data.payee": {
      isObject: true,
      type: "mixed",
    },
    "data.payee.email_address": {
      type: "string",
    },
    "data.payee.merchant_id": {
      type: "string",
    },
    product: {
      isArray: true,
      type: "mixed",
    },
    "product.product": {
      type: "mixed",
    },
    "product.product.brand": {
      type: "string",
    },
    "product.product.totalSold": {
      type: "number",
    },
    "product.product.price": {
      type: "number",
    },
    "product.product.details": {
      type: "string",
    },
    "product.quantity": {
      type: "number",
    },
    address: {
      isObject: true,
      type: "mixed",
    },
    "address.address_line_1": {
      type: "string",
    },
    "address.admin_area_1": {
      type: "string",
    },
    "address.admin_area_2": {
      type: "string",
    },
    "address.country_code": {
      type: "string",
    },
    "address.postal_code": {
      type: "string",
    },
  },
  listProperties: ["_id", "name", "createdAt", "user_id", "email"],
};

module.exports = option;
