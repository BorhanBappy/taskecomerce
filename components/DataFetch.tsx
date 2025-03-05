"use client";
import { useEffect, useState } from "react";
import { fetchProducts } from "../lib/api";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  description: string;
  category: { _id: string; name: string };
  images: { secure_url: string }[];
  video: { secure_url: string };
  price: string;
}

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getProducts() {
      const data = await fetchProducts();
      console.log("Fetched products:", data);
      setProducts(Array.isArray(data) ? data : []);
      setLoading(false);
    }

    getProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (!products.length) return <p>No products available.</p>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product._id} className="border p-4">
          <Image
            src={product.images[0]?.secure_url}
            alt={product.name}
            width={200}
            height={400}
            className="w-full h-40 object-cover"
          />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-gray-900 font-semibold">${product.price}</p>
          <video controls className="w-full mt-2">
            <source src={product.video?.secure_url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ))}
    </div>
  );
}
