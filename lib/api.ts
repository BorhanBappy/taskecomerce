import axios from "axios";

const API_URL = "https://glore-bd-backend-node-mongo.vercel.app/api/product";

export async function fetchProducts() {
  try {
    const response = await axios.get(API_URL);
    return response.data.data || []; // Ensure it's an array
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
