import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrumb from "../Components/Breadcrumbs/Breadcrumb";
import all_product from "../Components/Assets/all_product";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Descriptionbox from "../Components/DescriptionBox/Descriptionbox";
import RelatedProducts from "../Components/RelatedProducts/RelatedProducts";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <Breadcrumb product={product} />
      <ProductDisplay product={product} />
      <Descriptionbox />
      <RelatedProducts />
    </div>
  );
};

export default Product;
