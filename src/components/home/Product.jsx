import React from "react";

const Product = ({ product }) => {
  return (
    <div className="w-[450px] p-3 m-2 border rounded-md relative cursor-pointer">
      <div className="text-3xl font-bold absolute rounded-md top-0 right-0 bg-gray-700 text-white p-2 m-1">
        {product?.price}
        <span className="text-sm">TL</span>
      </div>
      <img className="w-[200px] h-[200px] m-auto" src={product?.image} alt="" />
      <div>
        <h1 className="text-center px-3 mt-3 font-bold text-xl">
          {product?.title}
        </h1>
      </div>
    </div>
  );
};

export default Product;
