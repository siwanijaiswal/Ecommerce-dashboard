const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});
const product = mongoose.model("products", productSchema);

module.exports = product;
