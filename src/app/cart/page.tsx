"use client";
import { ShoppingSteps } from "../constants/shop-steps";
import { BreadcrumbCheckout } from "./BreadcrumCheckout";
import { TiDelete } from "react-icons/ti";
const cartItems = [
  {
    name: "Cardigan",
    image: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-home_default/brown-bear-printed-sweater.jpg",
    color: "Green",
    size: "M",
    price: 2500.0,
    quantity: 1,
  },
  {
    name: "Cardigan",
    image: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-home_default/brown-bear-printed-sweater.jpg",
    color: "Green",
    size: "M",
    price: 2500.0,
    quantity: 1,
  },
  {
    name: "Cardigan",
    image: "https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-home_default/brown-bear-printed-sweater.jpg",
    color: "Green",
    size: "M",
    price: 2500.0,
    quantity: 1,
  },
];
interface CartItemProps {
  name: string;
  image: string;
  color: string;
  size: string;
  price: number;
  quantity: number;
}

interface CartProps {
  items: CartItemProps[];
  subtotal: number;
  discount: number;
  grandTotal: number;
}

const CartItem: React.FC<CartItemProps> = ({ name, image, color, size, price, quantity }) => {
  return (
    <div className="flex items-center justify-between border-b rounded-lg p-4 bg-gray-100 border-gray-300">
      <div className="flex items-center space-x-4">
        <img src={image} alt={name} className="w-16 h-16 rounded-lg object-cover" />
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-sm">
            {color} | {size}
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <div className="flex items-center border rounded-lg border-gray-300">
          <button className="px-2 py-1">-</button>
          <span className="px-4 py-1">{quantity}</span>
          <button className="px-2 py-1">+</button>
        </div>
        <p className="text-lg font-semibold">${price.toFixed(2)}</p>
        <button className="bg-red-600 text-white p-2 rounded-lg"><TiDelete /></button>
      </div>
    </div>
  );
};

const CartShop = () => {
  const items = cartItems;
  const subtotal = 7500.0;
  const discount = 0.0;
  const grandTotal = 7500.0;
  return (
    <section className="flex-1 w-full">
      <div className="container mx-auto p-4">
        <BreadcrumbCheckout step={ShoppingSteps.Cart} />
        <div className="flex">
          <div className="mt-4 w-full pr-12">
            {items.map((item, index) => (
              <CartItem key={index} {...item} />
            ))}
          </div>
          <div className="mt-4 flex justify-end w-full max-w-sm">
            <div className="w-full max-w-sm p-4 border rounded-lg bg-gray-100 border-gray-300">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Discount</span>
                <span>${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-semibold mt-2">
                <span>Grand total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
              <button className="w-full mt-4 bg-indigo-600 text-white py-2 rounded-lg">Checkout now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartShop;
