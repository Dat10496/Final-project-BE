const User = require("./User");

const Item = require("./Item");
const Payment = require("./Payment");
const {
  componentLoader,
  Components,
} = require("../admin/components/customComponent.tsx");

const {
  userOption,
  itemOption,
  paymentOption,
} = require("../admin/admin.option");

const {
  dashboardHandler,
} = require("../admin/components/adminDashBoard/dashboardHandler.tsx");

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
  componentLoader,
  dashboard: {
    component: Components.DashBoard,
    handler: dashboardHandler,
  },
};

module.exports = Admin;
