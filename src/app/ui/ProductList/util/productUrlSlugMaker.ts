import { slugMaker } from "@/app/util/slagMaker";
import { IProduct } from "@/models/product.model";

export const productUrlSlugMaker = (product: IProduct) => {
  return `/product/${slugMaker(product.name)}/${product._id}`;
};
