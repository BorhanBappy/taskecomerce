"use client";
import Image from "next/image";
import React, { useState, useMemo } from "react";
import StarRating from "./Starrating";
import { faHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

interface ProductType {
  id: number;
  name: string;
  short_desc: string;
  discount_percent: string | number;
  category: {
    _id: string;
    name: string;
  };
  product_images: {
    id: number;
    name: string;
  }[];
  variation_combinations: {
    id: number;
    price: number;
    discount: number;
    discount_date: string;
    values: string;
    discount_percent: number;
  }[];
  product_variation: {
    id: number;
    variaton_values: string;
  }[];
}

interface ProductProps {
  product: ProductType;
}

const BASE_IMAGE_URL = process.env.NEXT_PUBLIC_BASE_IMAGE_URL;

function Product({ product }: ProductProps) {
  const images = useMemo(() => {
    return (
      product.product_images
        ?.map((img) => `${BASE_IMAGE_URL}${img.name}`)
        .slice(0, 5) || []
    );
  }, [product.product_images]);

  const [mainImage, setMainImage] = useState(images[0] || "/placeholder.jpg");

  const prices = useMemo(() => {
    return product.variation_combinations.map((v) => v.price);
  }, [product.variation_combinations]);

  const lowestPrice = useMemo(() => Math.min(...prices), [prices]);
  const highestPrice = useMemo(() => Math.max(...prices), [prices]);

  // Get the maximum discount from variation_combinations
  const maxDiscount = useMemo(() => {
    return Math.max(
      ...product.variation_combinations.map((v) => v.discount_percent),
      0
    );
  }, [product.variation_combinations]);

  return (
    <Link href={`/product/${product.id}`} key={product.id} className="w-full">
      <div className="flex flex-col items-center cursor-pointer group relative overflow-hidden">
        {/* Discount Badge */}
        {maxDiscount > 0 && (
          <div className=" absolute right-8 sm:right-2 flex h-15 w-15 items-center justify-center rounded-full bg-red-300 ">
            <h1 className="text-xl text-blue-950 font-bold">-{maxDiscount}%</h1>
          </div>
        )}
        <div className="flex">
          <div className="flex flex-col justify-center gap-2 mt-2 absolute transition-all duration-500 ease-in-out translate-x-[-0%] opacity-100 group-hover:translate-x-0 group-hover:opacity-100">
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
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <Image
            src={mainImage}
            alt={product.name}
            height={300}
            width={300}
            className="p-0 m-0 w-80"
            loading="lazy"
          />
        </div>
        <div className="animation absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:top-1/3 group-hover:opacity-100 text-white flex items-center justify-center h-10 w-10 group rounded-full border bg-primary border-primary text-2xl">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <h1 className="hover:text-primary">{product.name}</h1>
        <StarRating maxRating={5} color="gray" size={5} fillColor={5} />
        {/* <h1>{product.category.name}</h1> */}
        <h1 className="translate-y-[0%] group-hover:translate-y-[100%] animation opacity-100 group-hover:opacity-0">
          ${lowestPrice} - ${highestPrice}
        </h1>
        <div className="flex gap-2 absolute right-50% bottom-0 translate-y-[90%] group-hover:translate-y-[0%] animation opacity-0 group-hover:opacity-100">
          <button className="bg-primary text-white p-2 rounded-3xl cursor-pointer">
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

export default React.memo(Product);
