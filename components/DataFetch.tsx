/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState, useMemo } from "react";
import Product from "./product";
import { fetchProducts } from "@/lib/products";
import Loading from "./Loading";
import { ProductType } from "@/app/types/product";

export default function ProductList() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getProducts() {
      try {
        const data = await fetchProducts();
        setProducts(data.slice(0, 30));

        // Log the fetched data to verify its structure
        // console.log("Fetched Products:", JSON.stringify(data, null, 2));
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  }, []);

  // Collect unique categories using a Set
  const categories = useMemo(() => {
    const uniqueCategories = new Set<string>();

    products.forEach((product) => {
      if (product.category && product.category.name) {
        uniqueCategories.add(product.category.name);
      }
    });

    return Array.from(uniqueCategories);
  }, [products]);

  // Log the unique categories
  console.log("Unique Categories:", categories);

  if (loading)
    return (
      <div className="mx-auto">
        <Loading />
      </div>
    );

  if (!products.length) return <p>No products available.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-4 ">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
