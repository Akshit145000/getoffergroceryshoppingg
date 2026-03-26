const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    fullName: { type: String },
    city: { type: String },
    state: { type: String },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    pincode: { type: String, required: true },
    cardNumber: { type: String, required: true },
    expiryDate: { type: String, required: true },
    cvv: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Data", dataSchema);
