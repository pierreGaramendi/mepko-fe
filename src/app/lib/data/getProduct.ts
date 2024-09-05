import { cache } from "react";

export const getProduct = cache(async (id: string) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(`http://localhost:3666/products?product=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products.");  
  }
});
