const express = require("express");
const router = express.Router();

const {
  handleAddProduct,
  handleListProduct,
} = require("../controllers/product");

router.post("/add-product", handleAddProduct);
router.get("/list-products", handleListProduct);

module.exports = router;
