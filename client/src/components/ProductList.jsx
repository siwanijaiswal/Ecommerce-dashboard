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

  const handleRemoveProduct = async (id) => {
    try {
      const result = await fetch(
        `http://localhost:8080/product/product/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await result.json();
      console.log(data);
      if (data.acknowledged && data.deletedCount === 1) {
        alert("Product deleted");

        // we can call handleFetchProducts(); here aswell or we can just filter out also
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== id)
        );
      } else {
        alert("Error in deleting product");
      }
    } catch (error) {
      console.log(error);
    }
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
        <li>Operations</li>
      </ul>

      {products.map((product, index) => {
        return (
          <ul key={product._id}>
            <li> {index + 1}</li>
            <li>{product.name} </li>
            <li> {product.price} </li>
            <li>{product.category} </li>
            <li>{product.company} </li>
            <li>
              <button>Update</button>
              <button onClick={() => handleRemoveProduct(product._id)}>
                Delete
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default ProductList;
