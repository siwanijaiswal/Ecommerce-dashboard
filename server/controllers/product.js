const product = require("../models/product");

async function handleAddProduct(req, res) {
  let products = new product(req.body);
  let result = await products.save();
  console.log(result);
  res.send(result);
}

module.exports = handleAddProduct;
