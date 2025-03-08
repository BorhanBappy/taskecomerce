/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
import axiosInstance from "../lib/api"; // Adjust the import path as needed

// Fetch all products
export async function fetchProducts() {
  try {
    const response = await axiosInstance.get("/public/products/get/15");
    return response.data.data.data || []; // Ensure it's an array
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default function ProductList() {
  const [products, setProducts] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getProducts() {
      const data = await fetchProducts();
      console.log("Fetched products:", data[0]);

      setProducts(data); // Set the images in state
      setLoading(false);
    }

    getProducts();
  }, []);
  console.log(products);
  if (loading) return <p>Loading products...</p>;
  if (!products.length) return <p>No images available.</p>;

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {products.map((product: any, index: number) => (
        <div key={index} className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
        </div>
      ))}
    </div>
  );
}
