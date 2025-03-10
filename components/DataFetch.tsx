/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect, useState } from "react";
// import axiosInstance from "../lib/api"; // Adjust path as needed
import Product from "./product";
import { fetchProducts } from "@/lib/products";
import Loading from "./Loading";

// Fetch products from API
// export async function fetchProducts() {
//   try {
//     const response = await axiosInstance.get("/public/products/get/15");
//     return response.data.data.data || [];
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return [];
//   }
// }

export default function ProductList() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getProducts() {
      const data = await fetchProducts();
      console.log("Fetched products:", data[0]); // Debugging
      setProducts(data);
      setLoading(false);
    }

    getProducts();
  }, []);

  if (loading)
    return (
      <div className="mx-auto">
        <Loading />
      </div>
    );
  if (!products.length) return <p>No products available.</p>;

  return (
    <div className="grid grid-col-1 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
      {products.map((product: any, index: number) => (
        <Product key={product.id || index} product={product} />
      ))}
    </div>
  );
}
