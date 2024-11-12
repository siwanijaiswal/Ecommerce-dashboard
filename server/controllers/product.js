const product = require("../models/product");

async function handleAddProduct(req, res) {
  let products = new product(req.body);
  let result = await products.save();
  res.send(result);
}

async function handleListProduct(req, res) {
  try {
    const products = await product.find();
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

async function handleGetProductById(req, res) {
  try {
    const singleProduct = await product.findOne({ _id: req.params.id });
    if (singleProduct) {
      res.send(singleProduct);
    } else {
      res.send(" No data found");
    }
  } catch (error) {
    res.status(500).json({ message: "Error getting the product", error });
  }
}

async function handleUpdateProduct(req, res) {
  try {
    const updateProduct = await product.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    res.send(updateProduct);
  } catch (error) {
    res.status(500).json({ message: "Error updating the product", error });
  }
}

//search function for multiple fields
async function handleSearchProduct(req, res) {
  const searchProduct = await product.find({
    $or: [
      { name: { $regex: req.params.key } },
      {
        category: { $regex: req.params.key },
      },
      {
        company: { $regex: req.params.key },
      },
    ],
  });
  res.send(searchProduct);
}

module.exports = {
  handleAddProduct,
  handleListProduct,
  handleRemoveProduct,
  handleGetProductById,
  handleUpdateProduct,
  handleSearchProduct,
};
