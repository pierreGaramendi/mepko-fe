// ProductList.tsx
import React from 'react';
import styles from './ProductList.module.css';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <div className={styles.productCard}>
    <img src={product.image} alt={product.name} className={styles.productImage} />
    <h3>{product.name}</h3>
    <p>${product.price.toFixed(2)}</p>
  </div>
);

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
};

export default ProductList;