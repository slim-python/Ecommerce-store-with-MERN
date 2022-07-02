import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
const ProductCard = ({ product }) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    value: 2.5,
    isHalf: true,
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 15 : 15,
  };
  return (
    <Link className="" to={`/product/${product._id}`}>
      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
        <img
          src={product?.images[0]?.url}
          alt={product.name}
          className="w-full h-full object-center object-cover group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
    </Link>
  );
};

export default ProductCard;
