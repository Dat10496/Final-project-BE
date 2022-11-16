const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = Schema(
  {
    user_id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    paymentId: {
      type: String,
      required: true,
    },
    address: {
      type: Object,
      required: true,
      default: {
        address_line_1: { type: String, default: "" },
        admin_area_2: { type: String, default: "" },
        admin_area_1: { type: String, default: "" },
        postal_code: { type: String, default: "" },
        country_code: { type: String, default: "" },
      },
    },

    data: {
      type: Object,
      default: {
        status: { type: String, default: "" },
        amount: { type: String, default: "" },
        create_time: { type: String, default: "" },
        update_time: { type: String, default: "" },
        currency_code: { type: String, default: "" },
        payee: {
          type: Object,
          default: {
            email_address: { type: String, default: "" },
            merchant_id: { type: String, default: "" },
          },
        },
      },
    },
    product: { type: Array, default: [] },

    isDeleted: { type: Boolean, default: false, select: false, required: true },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
