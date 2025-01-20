import React, { createContext, useEffect, useState } from "react";
// import all_product from "../Components/Assets/all_product.js";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < /*{all_product.length}*/ 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const API_BASE_URL = "https://e-shop-backend-eta.vercel.app";

const ShopContextProvider = (props) => {
  const [all_product, setAll_product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    fetch(`${API_BASE_URL}/allproducts`).then((response) => response.json()).then((data) => setAll_product(data))

    if (localStorage.getItem('auth-token')) {
      fetch(`${API_BASE_URL}/getcart`, {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: "",
      }).then((response) => response.json()).then((data) => setCartItems(data))
    }
  }, [])

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

    if(localStorage.getItem('auth-token')) {
      fetch(`${API_BASE_URL}/addtocart`, {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"itemId": itemId}),
      })
      .then((response) => response.json()).then((data) => console.log(data));
    }
    // console.log(cartItems);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

    if(localStorage.getItem('auth-token')) {
      fetch(`${API_BASE_URL}/removefromcart`, {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"itemId": itemId}),
      })
      .then((response) => response.json()).then((data) => console.log(data));
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItems += cartItems[item];
      }
    }

    return totalItems;
  };

  const contextvalue = {
    getTotalCartItems,
    getTotalCartAmount,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
  };
  return (
    <ShopContext.Provider value={contextvalue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
