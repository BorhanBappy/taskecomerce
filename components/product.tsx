"use client";
import Image from "next/image";
import React, { useState } from "react";
import StarRating from "./Starrating";
import { faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface Image {
  public_id: string;
  secure_url: string;
  optimizeUrl: string;
}

interface Video {
  public_id: string;
  secure_url: string;
}

interface Category {
  _id: string;
  name: string;
}

interface ProductType {
  _id: string;
  name: string;
  description: string;
  category: Category;
  images: Image[];
  video: Video;
  status: boolean;
  price: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface ProductProps {
  product: ProductType;
}

function Product({ product }: ProductProps) {
  const images: string[] = [
    "https://cdn11.bigcommerce.com/s-cslhb9s4uy/images/stencil/181x181/products/130/462/10__74481.1517125556.1280.1280__45292__71704.1522343849.jpg?c=2",
  ];
  product.images?.forEach((image) => {
    images.push(image.secure_url);
    images.push(image.optimizeUrl);
  });

  const [mainImage, setMainImage] = useState(images[0] || "");

  return (
    <Link
      href={`/product/${product._id}`}
      className="border-x-1 p-4 border-gray-300"
    >
      <div className="flex flex-col items-center cursor-pointer group relative overflow-hidden">
        <div className="flex">
          <div className="flex flex-col justify-center gap-2 mt-2 absolute transition-all duration-500 ease-in-out translate-x-[-100%] opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
            {images.map((image, index) => (
              <div
                key={index}
                onMouseEnter={() => setMainImage(image)}
                className="cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  height={50}
                  width={50}
                  className="h-[50px] w-[50px] object-cover border hover:border-primary"
                />
              </div>
            ))}
          </div>
          <Image
            src={mainImage}
            alt="Main Product"
            height={174}
            width={174}
            className="w-[180px] h-[180px]"
          />
        </div>
        <div className="animation absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:top-1/3 group-hover:opacity-100 text-white flex items-center justify-center h-10 w-10 group rounded-full border bg-primary border-primary text-2xl">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <h1 className="hover:text-primary">{product.name}</h1>
        <StarRating maxRating={5} color="gray" size={5} fillColor={5} />
        <h1 className="translate-y-[0%] group-hover:translate-y-[100%] animation opacity-100 group-hover:opacity-0">
          ${product.price}
        </h1>
        <div className="flex gap-2 absolute right-50% bottom-0 translate-y-[90%] group-hover:translate-y-[0%] animation opacity-0 group-hover:opacity-100">
          <button className="bg-primary text-white p-2 rounded-3xl">
            Add to Cart
          </button>
          <div className="flex items-center justify-center h-10 w-10 group rounded-full border border-primary hover:bg-orange-500 transition">
            <FontAwesomeIcon
              icon={faHeart}
              className="text-primary h-6 w-6 hover:text-white"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Product;
