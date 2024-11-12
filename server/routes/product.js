const express = require("express");
const router = express.Router();

const {
  handleAddProduct,
  handleListProduct,
  handleRemoveProduct,
  handleGetProductById,
  handleUpdateProduct,
} = require("../controllers/product");

router.post("/add-product", handleAddProduct);
router.get("/list-products", handleListProduct);
router.delete("/product/:id", handleRemoveProduct);
router.get("/product/:id", handleGetProductById);
router.put("/product/:id", handleUpdateProduct);

module.exports = router;
