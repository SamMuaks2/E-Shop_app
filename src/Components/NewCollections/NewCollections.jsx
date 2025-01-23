import React, { useEffect, useState } from "react";
import "./NewCollections.css";
// import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";

function NewCollections() {
  const [new_collection, setNew_collection] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = "https://e-shop-backend-eta.vercel.app";


  useEffect(() => {
    fetch(`${API_BASE_URL}/newcollection`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Ensure `.json()` is executed
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setNew_collection(data);
        } else {
          console.error("API did not return an array:", data);
        }
      })
      // .catch((error) => console.error("Error fetching new collections:", error));

      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  

  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />

      <div className="collections">
        {new_collection.map((item, i) => {
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

export default NewCollections;
