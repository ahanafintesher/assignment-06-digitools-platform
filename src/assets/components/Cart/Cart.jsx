import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const Cart = ({ cart, setCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
  
  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const handlePayment = () => {
    setCart([]);
  };

  return (
    <div className="container mx-auto mt-10">
      <div className="bg-white rounded-2xl shadow-md p-6 max-w-6xl mx-auto">
        
        {/* Header */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">Your Cart</h2>

        {/* Empty Cart Check */}
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 gap-4">
            <div >
                <CiShoppingCart strokeWidth={1} size={40} />

            </div>
            <h3 className="text-xl font-bold text-gray-700">Your cart is empty!</h3>
            <p className="text-gray-400 text-sm">Add some products to get started</p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="space-y-3">
              {cart.map((product) => (
                <div key={product.id} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3">
                  <div className="flex items-center gap-4">
                    <img src={product.icon} alt={product.name} className="w-10 h-10 rounded-lg" />
                    <div>
                      <h3 className="font-semibold text-gray-800">{product.name}</h3>
                      <p className="text-gray-400 text-sm">${product.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleRemove(product.id)}
                    className="text-red-400 text-sm font-semibold hover:text-red-600 transition-all duration-300"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="flex items-center justify-between mt-6">
              <span className="text-gray-500 font-medium">Total:</span>
              <span className="text-2xl font-bold text-gray-800">${totalPrice}</span>
            </div>

            {/* Checkout Button */}
            <button
              onClick={handlePayment}
              className="btn w-full mt-4 bg-linear-to-r from-indigo-600 to-purple-500 text-white rounded-full font-bold hover:scale-105 transition-all duration-300"
            >
              Proceed To Checkout
            </button>
          </>
        )}

      </div>
    </div>
  );
};

export default Cart;