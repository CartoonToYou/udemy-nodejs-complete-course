const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  products: [
    {
      productData: { type: Object },
    },
  ],
});

module.exports = mongoose.model("Order", orderSchema);
