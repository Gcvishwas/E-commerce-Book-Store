import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: {
      city: { type: String, required: true },
      country: String,
      state: String,
      zipcode: String,
    },
    phone: { type: Number, required: true },
    productIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
      },
    ],
    totalprice: { type: Number, required: true },
  },
  { timestamps: true }
);
export const Order = mongoose.model("Order", orderSchema);
