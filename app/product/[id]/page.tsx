"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Breadcrumb from "@/components/SinglePageProduct/Breadcrumb";
import ProductImages from "@/components/SinglePageProduct/ProductImages ";
import ProductVariations from "@/components/SinglePageProduct/ProductVariations ";
import ProductPrice from "@/components/SinglePageProduct/ProductPrice ";
import ProductActions from "@/components/SinglePageProduct/ProductActions";
import { fetchProducts } from "@/lib/products";
import Product from "@/components/product";
import { ProductType } from "@/app/types/product";
const BASE_IMAGE_URL = process.env.NEXT_PUBLIC_BASE_IMAGE_URL;

// Define isDiscountValid function
const isDiscountValid = (discountDate: string): boolean => {
  const currentDate = new Date();
  const discountEndDate = new Date(discountDate);
  return currentDate <= discountEndDate;
};

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [price, setPrice] = useState<number>(0);
  const [minPrice, setMinPrice] = useState<number>(0);
  const [discountPrice, setDiscountPrice] = useState<number>(0);
  const [isCombination, setIsCombination] = useState<boolean>(false);
  const [selectedVariation, setSelectedVariation] = useState<string | null>(
    null
  );
  const [similerproducts, setSimilerProducts] = useState<ProductType[]>([]);

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
      console.log(productDetail);
      if (productDetail) {
        setProduct(productDetail);

        // Find similar products
        const similarProducts = products.filter(
          (p) =>
            p.category.name === productDetail.category.name &&
            p.id !== productDetail.id
        );
        setSimilerProducts(similarProducts);
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

  const variationValues =
    product.product_variation[0]?.variaton_values.split(",") || [];

  return (
    <div>
      <div className="container mx-auto p-6">
        <Breadcrumb category={product.category} productName={product.name} />
        <div className="grid grid-cols-1 md:grid-cols-2  justify-items-center">
          <ProductImages images={images} />
          <div>
            <h1 className="text-3xl font-semibold">{product.name}</h1>
            <h1>{product.code}</h1>
            <ProductPrice
              minPrice={minPrice}
              maxPrice={maxPrice}
              discountPrice={discountPrice}
              price={price}
              isCombination={isCombination}
            />
            <ProductVariations
              variationValues={variationValues}
              selectedVariation={selectedVariation}
              onVariationClick={handleVariationClick}
            />
            <ProductActions selectedVariation={selectedVariation} />
            <p className="text-gray-500 mt-2">{product.short_desc}</p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className=" font-semibold mb-6 flex justify-center text-4xl text-blue-500">
          Similar Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 gap-y-4 ">
          {" "}
          {similerproducts.map((product, index) => (
            <Product key={product.id || index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
