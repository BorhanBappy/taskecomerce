import axiosInstance from "@/lib/api";

export interface ProductType {
  id: number;
  name: string;
  short_desc: string;
  category: {
    _id: string;
    name: string;
  };
  product_images: {
    id: number;
    name: string;
  }[];
  variation_combinations: {
    id: number;
    price: number;
    discount: number;
    discount_date: string;
    values: string;
  }[];
  product_variation: {
    id: number;
    variaton_values: string;
  }[];
}

export async function fetchProducts(): Promise<ProductType[]> {
  try {
    const response = await axiosInstance.get("/public/products/get/15");
    return response.data.data.data || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
