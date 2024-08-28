import { cache } from "react";

export const getProduct = cache(async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3666/products?product=${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch invoice.");  
  }
});
