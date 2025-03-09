"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCartIcon } from "lucide-react";
import { useParams } from "next/navigation";
import axiosInstance from "@/lib/api"; // Adjust the import path as needed

const BASE_IMAGE_URL =
  "https://pub-c053b04a208d402dac06392a3df4fd32.r2.dev/15/image/";

// Define types
interface ProductImage {
  id: number;
  name: string;
}

interface CategoryType {
  _id: string;
  name: string;
}

interface VariationCombination {
  id: number;
  code: string;
  created_at: string;
  discount: number;
  discount_date: string;
  discount_percent: number;
  discount_type: string;
  image: string;
  price: number;
  product_id: number;
  stock: number;
  updated_at: string;
  values: string;
}

interface ProductVariation {
  id: number;
  product_id: number;
  variation_id: number;
  variaton_values: string; // Comma-separated values
}

interface ProductType {
  id: number;
  name: string;
  short_desc: string;
  category: CategoryType;
  product_images: ProductImage[];
  variation_combinations: VariationCombination[];
  product_variation: ProductVariation[];
}

// Fetch all products
export async function fetchProducts(): Promise<ProductType[]> {
  try {
    const response = await axiosInstance.get("/public/products/get/15");
    return response.data.data.data || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

// Helper function to check if discount is valid
const isDiscountValid = (discountDate: string): boolean => {
  const currentDate = new Date();
  const discountEndDate = new Date(discountDate);
  return currentDate <= discountEndDate;
};

// Helper function to format prices
const formatPrice = (price: number): string => {
  return `$${price.toFixed(2)}`;
};

function ProductDetails() {
  const { id } = useParams(); // Extract productId from the URL
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("/placeholder.jpg");

  // New states
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [discountPrice, setDiscountPrice] = useState<number>(0);
  const [isCombination, setIsCombination] = useState<boolean>(false);
  const [selectedVariation, setSelectedVariation] = useState<string | null>(
    null
  );

  // Calculate prices and discounts when product data is loaded
  useEffect(() => {
    if (product) {
      const prices = product.variation_combinations.map((v) => v.price);
      const discounts = product.variation_combinations.map((v) =>
        isDiscountValid(v.discount_date) ? v.discount : 0
      );

      setMaxPrice(Math.max(...prices));
      setMinPrice(Math.min(...prices));
      setDiscountPrice(Math.max(...discounts));
    }
  }, [product]);

  // Handle variation selection
  const handleVariationClick = (variation: string) => {
    setSelectedVariation(variation.trim());
    setIsCombination(true);

    // Find the selected variation combination
    const selectedCombination = product?.variation_combinations.find(
      (v) => v.values === variation.trim()
    );

    if (selectedCombination) {
      setPrice(selectedCombination.price);

      // Check if the discount is still valid
      const isDiscountActive = isDiscountValid(
        selectedCombination.discount_date
      );
      setDiscountPrice(isDiscountActive ? selectedCombination.discount : 0);
    }
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      if (!id) {
        setLoading(false);
        return;
      }

      const products = await fetchProducts();
      const productDetail = products.find((p) => p.id === Number(id));

      if (productDetail) {
        setProduct(productDetail);

        // Set the main image
        const images =
          productDetail.product_images
            ?.map((img) => `${BASE_IMAGE_URL}${img.name}`)
            .slice(0, 5) || [];
        setMainImage(images[0] || "/placeholder.jpg");
      }

      setLoading(false);
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const images: string[] =
    product.product_images
      ?.map((img) => `${BASE_IMAGE_URL}${img.name}`)
      .slice(0, 5) || [];

  // Extract variation values
  const variationValues =
    product.product_variation[0]?.variaton_values.split(",") || [];

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
          <Image
            src={mainImage}
            alt={product.name}
            width={500}
            height={500}
            className="w-auto h-auto object-cover"
            priority // Ensures the main image loads immediately
            onError={() => setMainImage("/placeholder.jpg")} // Fallback for image errors
          />
          <div className="flex gap-2 mt-4">
            {images.map((image, index) => (
              <div
                key={index}
                onMouseEnter={() => setMainImage(image)}
                className="cursor-pointer"
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-20 h-20 object-cover border rounded-md hover:border-orange-500"
                  loading="lazy" // Lazy load thumbnails
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.jpg"; // Fallback for thumbnail errors
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Product Details */}
        <div>
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-gray-500 mt-2">{product.short_desc}</p>
          <p className="text-orange-500 text-2xl font-bold mt-4">
            {formatPrice(minPrice)} - {formatPrice(maxPrice)}
          </p>

          {/* Display Maximum Discount */}
          <p className="text-green-600 text-lg font-semibold mt-2">
            Maximum Discount: {formatPrice(discountPrice)}
          </p>

          {/* Display Product Variations as Buttons */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Available Variations:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {variationValues.map((value, index) => (
                <button
                  key={index}
                  onClick={() => handleVariationClick(value)}
                  className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                    selectedVariation === value.trim()
                      ? "bg-orange-500 text-white" // Highlight selected
                      : "border-gray-300 hover:bg-gray-100 focus:ring-orange-500"
                  }`}
                  aria-label={`Select variation: ${value.trim()}`}
                >
                  {value.trim()}
                </button>
              ))}
            </div>
            {/* Display Selected Price */}
            {isCombination && (
              <div className="mt-4">
                <p className="text-lg font-semibold">
                  Discounted Price:{" "}
                  {formatPrice(discountPrice > 0 ? price - discountPrice : 0)}
                </p>
                {discountPrice > 0 ? (
                  <p
                    className="text-lg font-semibold line-through"
                    style={{ textDecorationColor: "red" }}
                  >
                    Selected Base Price: {formatPrice(price)}
                  </p>
                ) : (
                  <p className="text-lg font-semibold">
                    Selected Base Price: {formatPrice(price)}
                  </p>
                )}

                {discountPrice === 0 && (
                  <p className="text-red-500 text-sm mt-2">
                    Discount has expired.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              className="bg-orange-500 text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-orange-600"
              aria-label="Add to Cart"
            >
              <ShoppingCartIcon className="h-5 w-5" />
              Add to Cart
            </button>
            <button
              className="border border-orange-500 text-orange-500 px-6 py-3 rounded-md hover:bg-orange-500 hover:text-white"
              aria-label="Buy Now"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
