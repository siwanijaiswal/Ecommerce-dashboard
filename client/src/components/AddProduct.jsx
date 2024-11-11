import React, { useState, useEffect } from "react";
import "../styles/AddProduct.css";

const AddProduct = () => {
  const [addProductInfo, setAddProductInfo] = useState({
    name: "",
    price: "",
    category: "",
    company: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const copyAddProductInfo = { ...addProductInfo };
    copyAddProductInfo[name] = value;
    setAddProductInfo(copyAddProductInfo);
  };

  const auth = localStorage.getItem("user");
  const userId = JSON.parse(auth).message._id;
  console.log(userId);

  const handleAddProduct = async () => {
    try {
      const result = await fetch("http://localhost:8080/product/add-product", {
        method: "POST",
        body: JSON.stringify({ ...addProductInfo, userId }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await result.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="product">
      <h1>Add Product</h1>
      <input
        type="text"
        name="name"
        placeholder="Enter Product Name"
        value={addProductInfo.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="price"
        placeholder="Enter Product Price"
        value={addProductInfo.price}
        onChange={handleChange}
      />
      <input
        type="text"
        name="category"
        placeholder="Enter Product Category"
        value={addProductInfo.category}
        onChange={handleChange}
      />
      <input
        type="text"
        name="company"
        placeholder="Enter Product Company"
        value={addProductInfo.company}
        onChange={handleChange}
      />

      <button className="prod-btn" onClick={handleAddProduct}>
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
