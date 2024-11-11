import React, { useEffect, useState } from "react";
import "../styles/ProductList.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    handleFetchProducts();
  }, []);

  const handleFetchProducts = async () => {
    const result = await fetch("http://localhost:8080/product/list-products");
    const data = await result.json();
    setProducts(data);
    console.log(data);
  };

  return (
    <div className="list-products">
      <h1>Products</h1>
      <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
      </ul>

      {products.map((product, index) => {
        return (
          <ul key={product._id}>
            <li> {index + 1}</li>
            <li>{product.name} </li>
            <li> {product.price} </li>
            <li>{product.category} </li>
            <li>{product.company} </li>
          </ul>
        );
      })}
    </div>
  );
};

export default ProductList;
