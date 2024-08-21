import { cache } from "react";

export const getProduct = cache(async (id: string) => {
  const response = await fetch(`http://localhost:3666/products?product=${id}`);
  const data = await response.json();
  return data;
});
