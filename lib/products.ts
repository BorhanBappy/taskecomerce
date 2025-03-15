// lib/products.ts
import { ProductType } from "@/app/types/product";
import axiosInstance from "./api";
import { useQuery } from "@tanstack/react-query";

export async function fetchProducts(): Promise<ProductType[]> {
  const response = await axiosInstance.get("/public/products/get/15");
  return response.data.data.data || [];
}

export function useProducts() {
  return useQuery<ProductType[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
}
