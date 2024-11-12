import React, { useEffect, useState } from "react";
import "../styles/ProductList.css";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    handleFetchProducts();
  }, []);

  const handleFetchProducts = async () => {
    const result = await fetch("http://localhost:8080/product/list-products");
    const data = await result.json();
    setProducts(data);
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

  const handleSearch = async (event) => {
    try {
      const key = event.target.value;

      if (key) {
        const searchProduct = await fetch(
          `http://localhost:8080/product/search/${key}`
        );
        const result = await searchProduct.json();

        if (result) {
          setProducts(result);
        }
      } else {
        handleFetchProducts();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="list-products">
      <h1>Products List</h1>
      <input
        onChange={handleSearch}
        type="text"
        className="search-product-box"
        placeholder="Search Products"
      />
      <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operations</li>
      </ul>

      {products.length > 0 ? (
        products.map((product, index) => {
          return (
            <ul key={product._id}>
              <li> {index + 1}</li>
              <li>{product.name} </li>
              <li> {product.price} </li>
              <li>{product.category} </li>
              <li>{product.company} </li>
              <li>
                <Link to={"/update/" + product._id}>Update</Link>
                <button onClick={() => handleRemoveProduct(product._id)}>
                  Delete
                </button>
              </li>
            </ul>
          );
        })
      ) : (
        <h1> No Products</h1>
      )}
    </div>
  );
};

export default ProductList;
