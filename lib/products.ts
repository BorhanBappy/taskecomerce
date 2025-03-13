import { ProductType } from "@/app/types/product";
import axiosInstance from "./api";

export async function fetchProducts(): Promise<ProductType[]> {
  try {
    const response = await axiosInstance.get("/public/products/get/15");
    // console.log(response.data.data.data);
    return response.data.data.data || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
