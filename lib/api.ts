import axios from "axios";

const API_URL = "https://glore-bd-backend-node-mongo.vercel.app/api/product";

// Fetch all products
export async function fetchProducts() {
  try {
    const response = await axios.get(API_URL);
    return response.data.data || []; // Ensure it's an array
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

// Fetch a single product by ID
export async function fetchProductById(id: string) {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data.data || null; // Return product or null
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null;
  }
}
