const product = require("../models/product");

async function handleAddProduct(req, res) {
  let products = new product(req.body);
  let result = await products.save();
  console.log(result);
  res.send(result);
}

async function handleListProduct(req, res) {
  try {
    const products = await product.find();
    console.log(products);
    if (products.length > 0) {
      res.send(products);
    } else {
      res.send({ message: "No products found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error finding product", error });
  }
}

async function handleRemoveProduct(req, res) {
  try {
    const delProduct = await product.deleteOne({ _id: req.params.id });
    res.send(delProduct);
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
}

module.exports = { handleAddProduct, handleListProduct, handleRemoveProduct };
