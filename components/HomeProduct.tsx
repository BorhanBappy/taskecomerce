"use client";
import React, { useEffect, useState } from "react";
import { fetchProducts } from "../lib/api";
import ReUseProductPage from "./ReUseProductPage";

// Fashion Categories
const FashionCategories = [
  "Clothing",
  "Delicacies",
  "Dresses",
  "Handbags",
  "Jewelry",
  "Shoes",
  "Watches",
];

// Electronics Categories
const ElectronicsCategories = [
  "Belts",
  "Hats",
  "Microphones",
  "MP3 Players",
  "Scarves",
  "Smart Watches",
  "Television",
  "View All",
];

const Sports = [
  "Bicycles",
  "Clothing",
  "Jewelry",
  "Running Shoes",
  "School Uniforms",
  "Shoes",
  "Watches",
];

const ProductPage = () => {
  const [products, setProducts] = useState<any[]>([]); // Replace 'any' with the actual type of your products

  useEffect(() => {
    const getProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
        console.log("Fetched Products:", fetchedProducts); // Log products here
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="container mx-auto border-b-1 border-gray-300">
      {/* Fashion Section */}
      <ReUseProductPage
        Categories={FashionCategories}
        products={products}
        header={"Fashion"}
        color="#ff5c00"
      />
      {/* Electronics Section */}
      <ReUseProductPage
        Categories={ElectronicsCategories}
        products={products}
        header={"Electronics"}
        color="#2bafa4"
      />
      <ReUseProductPage
        Categories={Sports}
        products={products}
        header={"Sports"}
        color="#f24f5a"
      />
    </div>
  );
};

export default ProductPage;
