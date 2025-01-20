import React, { useEffect, useState } from "react";
import "./Popular.css";
// import data_product from "../Assets/data";
import Item from "../Item/Item";

function Popular() {
  const [popularProducts, setPopularProducts] = useState([]);

  const API_BASE_URL = "https://e-shop-backend-five.vercel.app";

  useEffect(() => {
    fetch(`${API_BASE_URL}/popularinwomen`).then((response) => response.json()).then((data) => setPopularProducts(data));
  }, [])

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />

      <div className="popular-item">
        {/* {data_product.map((item, i) => { */}
        {popularProducts.map((item, i) => {
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
}

export default Popular;
