import React from "react";
import Link from "next/link";
import Product from "./product";
import { ProductType } from "@/app/types/product"; // Import the ProductType interface

interface ReUseProductPageProps {
  Categories: string[];
  products: ProductType[]; // Use ProductType instead of 'any'
  header: string;
  color: string;
}

export default function ReUseProductPage({
  Categories,
  products,
  header,
  color,
}: ReUseProductPageProps) {
  console.log(color);

  return (
    <div className={`h-[700px] w-full flex border-gray-300 border-x-1 `}>
      {/* Categories Sidebar */}
      <div className="bg-gray-500 w-48 text-white shadow-2xl">
        <div
          className=" text-white text-[18px] uppercase px-4 py-[14px] pb-[13px] shadow-[0 2px 4px 0] min-w-[205px] -ml-[9px] border-b-0 relative rounded-bl-lg "
          style={{ backgroundColor: color }}
        >
          {header}
        </div>
        <div className="flex flex-col space-y-4 p-4">
          {Categories.map((category: string, index: number) => (
            <Link
              key={index}
              href={`/category/${category.toLowerCase()}`}
              className="hover:text-primary transition-colors duration-200"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div
        className="bg-amber-50 flex-1 grid grid-cols-5 border-t-4"
        style={{ borderTopColor: color }}
      >
        {products.length > 0 ? (
          products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        ) : (
          <div className="col-span-5 text-center text-gray-700">
            No products found.
          </div>
        )}
      </div>
    </div>
  );
}
