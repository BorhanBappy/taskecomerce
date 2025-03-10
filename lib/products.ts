import axiosInstance from "./api";
import { ProductType } from "@/app/types/product";

export async function fetchProducts(): Promise<ProductType[]> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000); // Abort if request takes too long

  try {
    const response = await axiosInstance.get("/public/products/get/15", {
      signal: controller.signal,
    });
    console.log(response);
    return response.data.data.data || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  } finally {
    clearTimeout(timeout);
  }
}

console.log(fetchProducts());
