const express = require("express");
const router = express.Router();

const handleAddProduct = require("../controllers/product");

router.post("/add-product", handleAddProduct);

module.exports = router;
