import React, { use } from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ dataPromise, cart, setCart }) => {
  const products = use(dataPromise);

  return (
    <div className="max-w-7xl mx-auto mt-10 mb-32 px-4">
      <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
  );
};

export default Products;