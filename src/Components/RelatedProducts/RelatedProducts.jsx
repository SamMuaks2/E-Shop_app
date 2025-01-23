import React, { useEffect, useState } from "react";
import "./RelatedProducts.css";
// import data_product from "../Assets/data";
import Item from "../Item/Item";

const RelatedProducts = () => {
  const [all_products, setAll_Products] = useState([]);
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

  const API_BASE_URL = "https://e-shop-backend-eta.vercel.app";

  
    useEffect(() => {
      fetch(`${API_BASE_URL}/allproducts`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          if (Array.isArray(data)) {
            setAll_Products(data);
          } else {
            console.error("API did not return an array:", data);
          }
        })
        .catch((error) => setError(error.message))
        .finally(() => setLoading(false));
    }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
  return (
    <div className="relatedproducts">
      <h1>Related Products</h1>

      <hr />
      
      <div className="relatedproducts-item">
        {all_products.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProducts;
