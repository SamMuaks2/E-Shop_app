import React from "react";
import "./Descriptionbox.css";

const Descriptionbox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>

      <div className="descriptionbox-description">
        <p>
          An e-commerce website, short for electronic commerce website, is an
          online platform that allows businesses and individuals to buy and sell
          products or services over the internet. E-commerce websites have
          revolutionized the way goods and services are bought and sold,
          providing a convenient and efficient way for consumers to shop and
          businesses to reach a global customer base.
        </p>

        <p>
          E-commerce websites come in various forms, from small online stores
          run by individual sellers to large, multinational marketplaces like
          Amazon and eBay. They have become a fundamental part of the modern
          economy, offering a convenient way for consumers to access a wide
          range of products and for businesses to reach a global audience
          without the need for physical storefronts.
        </p>
      </div>
    </div>
  );
};

export default Descriptionbox;
