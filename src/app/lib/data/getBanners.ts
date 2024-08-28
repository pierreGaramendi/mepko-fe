import { cache } from "react";

export const getBanners = cache(async () => {
  try {
    const response = await fetch("http://localhost:3666/banners", { cache: "no-store" });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch banners.");
  }
});
