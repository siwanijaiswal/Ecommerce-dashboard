const express = require("express");
const router = express.Router();

const {
  handleAddProduct,
  handleListProduct,
  handleRemoveProduct,
} = require("../controllers/product");

router.post("/add-product", handleAddProduct);
router.get("/list-products", handleListProduct);
router.delete("/product/:id", handleRemoveProduct);

module.exports = router;
