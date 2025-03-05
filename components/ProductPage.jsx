import Link from "next/link";
import React from "react";
import Product from "./product";
const categories = [
  "Clothing",
  "Delicacies",
  "Dresses",
  "Handbags",
  "Jewelry",
  "Shoes",
  "Watches",
];
const ProductPage = () => {
  return (
    <div className="container mx-auto">
      {/* Fashion */}
      <div className="bg-gray-500 h-[600px] w-full flex">
        <div>
          <div className=" w-48 bg-orange-500 text-2xl p-2 text-white shadow-2xl">
            Fashion
          </div>
          <div className="flex flex-col space-y-4 p-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/category/${category.toLowerCase()}`}
                className=" hover:text-orange-500"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
        <div className=" bg-amber-50 flex-1 grid grid-cols-5 border">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </div>
      <div>
        <div>Electronics</div>
        <div></div>
      </div>
    </div>
  );
};

export default ProductPage;
