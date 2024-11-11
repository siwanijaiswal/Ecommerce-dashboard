const product = require("../models/product");

async function handleAddProduct(req, res) {
  let products = new product(req.body);
  let result = await products.save();
  console.log(result);
  res.send(result);
}

async function handleListProduct(req, res) {
  const products = await product.find();
  console.log(products);
  if (products.length > 0) {
    res.send(products);
  } else {
    res.send({ message: "No products found" });
  }
}
module.exports = { handleAddProduct, handleListProduct };
