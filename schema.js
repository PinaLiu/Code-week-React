// schema.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  nome: String,
  pizza: String,
  base: String,
  impasto: String,
  ingredienti: [String],
});

let Order;
if (mongoose.models.Order) {
  Order = mongoose.model("Order");
} else {
  Order = mongoose.model("Order", orderSchema);
}

module.exports = Order;
