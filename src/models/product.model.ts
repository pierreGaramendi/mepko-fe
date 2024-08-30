export interface IProduct {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  brand: string;
  stock: number;
  images: string[];
  tags: any[];
  variants: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  thumbnail: string;
}
