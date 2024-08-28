// ProductList.tsx
import React from "react";
import styles from "./ProductList.module.css";
import Link from "next/link";
import { getPopularProducts } from "./api/getPopularProducts";
import Image from "next/image";

interface Product {
  _id: number;
  name: string;
  images: string[];
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className={`bg-gray-100 ${styles.productCard}`}>
    <Link
      href={`/product/${product.name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "")}/${product._id}`}
    >
      <Image src={product.images[0]} alt={product.name} className={styles.productImage} width={266} height={200}/>
      <h3 className="mt-4">{product.name}</h3>
      <p className="font-semibold">${product.price.toFixed(2)}</p>
    </Link>
  </div>
);

const ProductList: React.FC = async () => {
  const popularProducts: Product[] = await getPopularProducts();
  return (
    <>
      {popularProducts.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductList;
