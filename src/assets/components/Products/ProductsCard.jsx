import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

const ProductsCard = ({ product }) => {
  const [isPurchased, setIsPurchased] = useState(false);
  const handleClick = () =>{
    setIsPurchased(true);
  }
  return (
    <div >
      <div className="card bg-white shadow-lg w-72 p-6 relative">
        {/* Best Seller Badge */}
        <div className="badge badge-soft badge-success absolute top-4 right-4">
          {product.tag}
        </div>

        {/* Icon */}
        <div className="text-3xl mb-4">
          <img src={product.icon} alt="" />
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>

        {/* Description */}
        <p className="text-gray-500 text-sm mt-2">{product.description}</p>

        {/* Price */}
        <div className="mt-4">
          <span className="text-3xl font-bold text-gray-900">
            ${product.price}
          </span>
          <span className="text-gray-400 text-sm">/{product.period}</span>
        </div>

        {/* Features */}
        <ul className="mt-4 space-y-2">
          {product.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <span className="text-green-400" >{<FaCheck />}</span> {feature}
            </li>
          ))}
        </ul>
        {/* Button */}
        <button onClick={handleClick} className="btn w-full mt-6 bg-linear-to-r from-indigo-600 to-purple-500 text-white rounded-full font-bold hover:scale-105 transition-all duration-300">
         {isPurchased ? "Added to Cart!" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
