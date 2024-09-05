import { cache } from "react";

export const getBanners = cache(async () => {
  try {
    //TODO
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch("http://localhost:3666/banners", { cache: "force-cache" });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch banners.");
  }
});
