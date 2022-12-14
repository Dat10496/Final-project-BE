const User = require("./User");
const Item = require("./Item");
const Payment = require("./Payment");

const {
  userOption,
  itemOption,
  paymentOption,
} = require("../admin/admin.option");

const Admin = {
  resources: [
    {
      resource: User,
      options: userOption,
    },
    {
      resource: Item,
      options: itemOption,
    },
    {
      resource: Payment,
      options: paymentOption,
    },
  ],
  branding: {
    companyName: "Sneaker Store",
  },
};

module.exports = Admin;
