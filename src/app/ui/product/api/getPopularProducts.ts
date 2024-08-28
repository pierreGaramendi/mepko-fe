import { cache } from "react";

export const getPopularProducts = cache(async () => {
  try {
    const response = await fetch(`http://localhost:3666/products/populars`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch popular products.");
  }
});
