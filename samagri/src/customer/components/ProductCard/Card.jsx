import React from "react";

const Card = ({ product }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[18rem] mx-3 my-5">
      <div className="h-[16rem] w-full">
        <img
          src={product.img}
          alt={product.altText}
          className="object-cover object-top w-full h-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
        <p className="mt-2 text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
};
export default Card;
