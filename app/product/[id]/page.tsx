"use client";

import { useParams } from "next/navigation";
import Breadcrumb from "@/components/SinglePageProduct/Breadcrumb";
import ProductImages from "@/components/SinglePageProduct/ProductImages ";
import ProductVariations from "@/components/SinglePageProduct/ProductVariations ";
import ProductPrice from "@/components/SinglePageProduct/ProductPrice ";
import ProductActions from "@/components/SinglePageProduct/ProductActions";
import { useProducts } from "@/lib/products";
import Product from "@/components/product";
import { ProductType } from "@/app/types/product";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";

const BASE_IMAGE_URL = process.env.NEXT_PUBLIC_BASE_IMAGE_URL;

const isDiscountValid = (discountDate: string): boolean => {
  const currentDate = new Date();
  const discountEndDate = new Date(discountDate);
  return currentDate <= discountEndDate;
};

const ProductDetails = () => {
  const { id } = useParams();
  const { data: products, isLoading, error } = useProducts();
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxDiscount, setMaxDiscount] = useState<number>(0); // Renamed to maxDiscount for clarity
  const [price, setPrice] = useState<number>(0);
  const [isCombination, setIsCombination] = useState<boolean>(false);
  const [selectedVariation, setSelectedVariation] = useState<string | null>(
    null
  );
  const [similerproducts, setSimilerProducts] = useState<ProductType[]>([]);

  // Find the product based on the ID
  const product = products?.find((p) => p.id === Number(id));
  console.log(product);
  // Calculate max price, min price, and max discount for all variations
  useEffect(() => {
    if (product) {
      const prices = product.variation_combinations.map((v) => v.price);
      const discounts = product.variation_combinations.map((v) =>
        isDiscountValid(v.discount_date) ? v.discount : 0
      );

      setMaxPrice(Math.max(...prices));
      setMinPrice(Math.min(...prices));
      setMaxDiscount(Math.max(...discounts)); // Set max discount across all variations
      console.log("Max Discount:", Math.max(...discounts));

      const similarProducts =
        products?.filter(
          (p) =>
            p.category.name === product.category.name && p.id !== product.id
        ) || [];
      setSimilerProducts(similarProducts);
    }
  }, [product, products]);

  // Handle variation selection
  const handleVariationClick = (variation: string) => {
    setSelectedVariation(variation.trim());
    setIsCombination(true);

    const selectedCombination = product?.variation_combinations.find(
      (v) => v.values === variation.trim()
    );

    if (selectedCombination) {
      setPrice(selectedCombination.price);
      const isDiscountActive = isDiscountValid(
        selectedCombination.discount_date
      );
      setMaxDiscount(isDiscountActive ? selectedCombination.discount : 0); // Update discount for selected variation
    }
  };

  // Early return if products are still loading or if there's an error
  if (isLoading) {
    return (
      <div className="min-h-100">
        <Loading />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Early return if products are undefined or empty
  if (!products || products.length === 0) {
    return <div className="min-h-screen mx-auto">No products available</div>;
  }

  // Early return if the product is not found
  if (!product) {
    return <div className="min-h-screen mx-auto">Product not found</div>;
  }

  const images: string[] =
    product.product_images
      ?.map((img) => `${BASE_IMAGE_URL}${img.name}`)
      .slice(0, 5) ?? [];

  const variationValues =
    product.product_variation[0]?.variaton_values.split(",") ?? [];

  return (
    <div>
      <div className="container mx-auto p-6">
        <Breadcrumb category={product.category} productName={product.name} />
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center">
          <ProductImages images={images} />
          <div>
            <h1 className="text-3xl font-semibold">{product.name}</h1>
            <h1>{product.code}</h1>
            <ProductPrice
              minPrice={minPrice}
              maxPrice={maxPrice}
              discountPrice={maxDiscount} // Pass maxDiscount here
              price={price}
              isCombination={isCombination}
            />
            <ProductVariations
              variationValues={variationValues}
              selectedVariation={selectedVariation}
              onVariationClick={handleVariationClick}
            />
            <ProductActions
              selectedVariation={selectedVariation}
              product={{
                id: product.id,
                name: product.name,
                price: price, // Base price
                discountPrice: maxDiscount, // Discounted price
                image: `${BASE_IMAGE_URL}${product.product_images?.[0]?.name}`,
              }}
            />
            <p className="text-gray-500 mt-2">{product.short_desc}</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="font-semibold mb-6 flex justify-center text-4xl text-blue-500">
          Similar Products
        </h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-2 gap-y-4">
          {similerproducts.map((product, index) => (
            <Product key={product.id || index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
