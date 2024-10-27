const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({});
const product = mongoose.model("products", productSchema);

module.exports = product;
