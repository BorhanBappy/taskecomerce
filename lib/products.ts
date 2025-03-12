import axios from "axios";
import axiosInstance from "./api";
import { ProductType } from "@/app/types/product";

export async function fetchProducts(): Promise<ProductType[]> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000); // 10s timeout

  try {
    const response = await axiosInstance.get("/public/products/get/15", {
      signal: controller.signal, // Attach abort signal
    });

    return response.data.data.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.error("Request was aborted due to timeout.");
    } else {
      console.error("Error fetching products:", error);
    }
    throw error;
  } finally {
    clearTimeout(timeout); // Ensure timeout is cleared
  }
}
