import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { toast } from "react-toastify";

const ProductsCard = ({ product, cart, setCart }) => {
  const [isPurchased, setIsPurchased] = useState(false);
  const handleClick = () => {
    setIsPurchased(true);
    const isFound = cart.find((item) => item.id === product.id);
    if (isFound) {
      toast.error("Already in Cart!");
      return;
    }
    setCart([...cart, product]);
    toast.success("Added to Cart!");
  };
  return (
    <div>
      <div className="card bg-white shadow-lg w-72 p-6 relative hover:-translate-y-2 transition-all duration-300">
        <div className="badge badge-soft badge-success absolute top-4 right-4">
          {product.tag}
        </div>

        <div className="text-3xl mb-4">
          <img src={product.icon} alt="" />
        </div>

        <h2 className="text-xl font-bold text-gray-800">{product.name}</h2>

        <p className="text-gray-500 text-sm mt-2">{product.description}</p>

        <div className="mt-4">
          <span className="text-3xl font-bold text-gray-900">
            ${product.price}
          </span>
          <span className="text-gray-400 text-sm">/{product.period}</span>
        </div>

        <ul className="mt-4 space-y-2">
          {product.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 text-sm text-gray-600"
            >
              <span className="text-green-400">{<FaCheck />}</span> {feature}
            </li>
          ))}
        </ul>

        <button
          onClick={handleClick}
          className={`btn w-full mt-6 rounded-full font-bold hover:scale-105 transition-all duration-300
    ${
      isPurchased
        ? "bg-green-500 text-white border-none"
        : "bg-linear-to-r from-indigo-600 to-purple-500 text-white"
    }`}
        >
          {isPurchased ? "✓ Added to Cart!" : "Buy Now"}
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
