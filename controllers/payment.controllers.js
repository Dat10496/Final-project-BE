const { sendResponse, AppError, catchAsync } = require("../helpers/utils");
const User = require("../models/User");
const Payment = require("../models/Payment");
const Item = require("../models/Item");
const sendMail = require("../sendgrid/sgMail");

const paymentControllers = {};

const sold = async (id, quantity, oldSold) => {
  await Item.findOneAndUpdate(
    { _id: id },
    {
      totalSold: quantity + oldSold,
    }
  );
};

paymentControllers.createPayment = catchAsync(async (req, res, next) => {
  const userId = req.userId;

  const { details, cart } = req.body;

  const address = details.purchase_units[0].shipping.address;

  const data = {
    create_time: details.create_time,
    update_time: details.update_time,
    status: details.status,
    amount: details.purchase_units[0].amount.value,
    currency_code: details.purchase_units[0].amount.currency_code,
    payee: details.purchase_units[0].payee,
  };

  //  Validate user
  const userById = await User.findById(userId).select("name email");
  if (!userById) throw new AppError(404, "User not found", "Transaction error");

  const { _id, name, email } = userById;

  const payment = await Payment.create({
    user_id: _id,
    name,
    email,
    paymentId: details.id,
    address: address,
    data,
    product: cart,
  });

  // Update quantity of product in DB
  cart.forEach((item) => {
    return sold(item.product._id, item.quantity, item.product.totalSold);
  });

  // Sendgrid send email to customer
  if (details.status === "COMPLETED") {
    let userPayment = await Payment.find({ paymentId: details.id });
    userPayment = userPayment[0];
    sendMail(userPayment);
  }

  sendResponse(res, 200, true, payment, null, "Create payment successfully");
});

paymentControllers.getPaymentDetail = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const paymentDetail = await Payment.findById(id);
  if (!paymentDetail)
    throw new AppError(404, "Payment not found", "Get payment error");

  sendResponse(
    res,
    200,
    true,
    paymentDetail,
    null,
    "Get payment's detail successfully"
  );
});

module.exports = paymentControllers;
