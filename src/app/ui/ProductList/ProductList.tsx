import React from "react";
import styles from "./ProductList.module.css";
import Link from "next/link";
import { getPopularProducts } from "./api/getPopularProducts";
import Image from "next/image";
import { IProduct } from "@/models/product.model";
import { productUrlSlugMaker } from "./util/productUrlSlugMaker";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className={`bg-gray-100 rounded-lg shadow-lg p-4 mr-3 text-center shrink-0 ${styles.productCard}`}>
    <Link href={productUrlSlugMaker(product)}>
      <Image src={product.thumbnail} alt={product.name} className={styles.productImage} width={266} height={200} />
      <h3 className="mt-4">{product.name}</h3>
      <p className="font-semibold">${product.price.toFixed(2)}</p>
    </Link>
  </div>
);

const ProductList: React.FC = async () => {
  const popularProducts: IProduct[] = await getPopularProducts();
  return (
    <>
      {popularProducts.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductList;
