import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UpdateProduct = () => {
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

  const handleGetProductById = async (e) => {
    const getProduct = await fetch(
      `http://localhost:8080/product/product/${params.id}`
    );
    const data = await getProduct.json();
    console.log(data);
    setAddProductInfo(data);
  };

  const params = useParams();

  useEffect(() => {
    handleGetProductById();
  }, []);

  return (
    <div className="product">
      <h1>Update Product</h1>
      <form onSubmit={handleGetProductById}>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter Product Name"
          value={addProductInfo.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          required
          placeholder="Enter Product Price"
          value={addProductInfo.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          required
          placeholder="Enter Product Category"
          value={addProductInfo.category}
          onChange={handleChange}
        />
        <input
          type="text"
          name="company"
          required
          placeholder="Enter Product Company"
          value={addProductInfo.company}
          onChange={handleChange}
        />

        <button className="prod-btn" type="submit">
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;