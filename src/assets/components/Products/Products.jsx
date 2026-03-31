import React, { use } from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ dataPromise }) => {
  const products = use(dataPromise);

  return (
    <div className="max-w-7xl mx-auto mt-10 mb-32">
      

      <div className="grid grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
