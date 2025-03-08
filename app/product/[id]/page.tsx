"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchProducts } from "@/lib/api"; // Import API function
import { ShoppingCartIcon } from "lucide-react";
import { useParams } from "next/navigation";

interface ImageType {
  secure_url: string;
  optimizeUrl: string;
}

interface VideoType {
  secure_url: string;
}

interface CategoryType {
  _id: string;
  name: string;
}

interface ProductType {
  _id: string;
  name: string;
  description: string;
  category: CategoryType;
  images: ImageType[];
  price: string;
  video: VideoType;
}

function ProductDetails() {
  const { id } = useParams(); // Extract productId from the URL
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const fetchProductDetails = async () => {
      const products = await fetchProducts();
      const productDetail = products.find((p) => p._id === id);
      if (productDetail) {
        setProduct(productDetail);
        setMainImage(productDetail.images[0]?.secure_url || "");
      }
      setLoading(false);
    };

    if (id) {
      fetchProductDetails();
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Breadcrumb Navigation */}
      <nav className="text-gray-500 text-sm mb-4">
        <Link href="/" className="hover:text-orange-500">
          Home
        </Link>{" "}
        &gt;
        <Link
          href={`/category/${product.category._id}`}
          className="hover:text-orange-500 ml-2"
        >
          {product.category.name}
        </Link>{" "}
        &gt;
        <span className="ml-2 text-black">{product.name}</span>
      </nav>

      {/* Product Details Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section - Images */}
        <div>
          {/* Main Image */}
          <div className=" ">
            {mainImage && (
              <Image
                src={mainImage}
                alt={product.name}
                width={500}
                height={500}
                className="w-[350px] h-[500px]  object-cover"
              />
            )}
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-2 mt-4">
            {product.images.map((image, index) => (
              <Image
                key={index}
                src={image.secure_url}
                alt={`Thumbnail ${index + 1}`}
                width={80}
                height={80}
                className="w-20 h-20 cursor-pointer border rounded-md hover:border-orange-500"
                onMouseEnter={() => setMainImage(image.secure_url)}
              />
            ))}
          </div>

          {/* Product Video */}
          {product.video && (
            <div className="mt-4">
              <video
                controls
                className="w-20 h-20 cursor-pointer border rounded-md hover:border-orange-500"
              >
                <source src={product.video.secure_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
        </div>

        {/* Right Section - Product Details */}
        <div>
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-gray-500 mt-2">{product.description}</p>
          <p className="text-orange-500 text-2xl font-bold mt-4">
            ${product.price}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-orange-600">
              <ShoppingCartIcon className="h-5 w-5" />
              Add to Cart
            </button>
            <button className="border border-orange-500 text-orange-500 px-6 py-3 rounded-md hover:bg-orange-500 hover:text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
