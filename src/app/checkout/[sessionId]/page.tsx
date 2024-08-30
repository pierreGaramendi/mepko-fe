"use client";
import { useEffect, useState } from "react";
import { BreadcrumbCheckout } from "../../cart/BreadcrumCheckout";
import { ShoppingSteps } from "@/app/constants/shop-steps";
import { getShoopingSession } from "../services/getShoopingSession";
import { useRouter } from "next/navigation";
import { Button } from "@headlessui/react";
import { IProduct } from "@/models/product.model";
interface IGetShoopingSession {
  data: RootObject;
  status: number;
}

interface ISessionData {
  sessionId: string;
  productId: string;
  quantity: number;
  step: number;
  createdAt: string;
}

interface RootObject {
  message: string;
  sessionData: ISessionData;
  product: IProduct;
}

export default function CheckoutPage({ params }: { params: { sessionId: string } }) {
  const { sessionId } = params;
  const [shooping, setShooping] = useState(null);
  const [product, setProduct] = useState<IProduct[]>([]);
  const [sessionData, setSessionData] = useState<ISessionData>();

  const router = useRouter();
  console.log("sessionId: ", sessionId);
  useEffect(() => {
    const callSessionData = async () => {
      const result: IGetShoopingSession = await getShoopingSession(sessionId);
      console.log("data111111:    ", result);
      if (result.status !== 200) {
        router.push(`/`);
      }
      console.log("dana  guite", result.data.product);
      setProduct([result.data.product]);
    };
    callSessionData();
  }, []);

  const [shippingMethod, setShippingMethod] = useState("express");
  return (
    <section className="flex-1 w-full">
      <div className="container mx-auto p-4">
        <BreadcrumbCheckout step={ShoppingSteps.Checkout} />
        <div className="flex flex-col md:flex-row gap-8 pt-6">
          <div className="w-full md:w-2/3">
            <div className="rounded bg-gray-100 shadow-md p-4">
              <h2 className="text-xl font-bold mb-4">Contacto</h2>
              <input type="email" placeholder="Enter your email address" className="input-primary w-full" />
              <h2 className="text-xl font-bold mb-4 mt-4">Datos de Entrega</h2>
              <form className="space-y-4">
                <input type="text" placeholder="Enter your full name" className="w-full input-primary" />
                <input type="tel" placeholder="Enter your phone number (only digits)" className="w-full input-primary" />
                <input type="text" placeholder="Enter your Street name and house number" className="w-full input-primary" />
                <div className="flex gap-4">
                  <input type="text" placeholder="City" className="w-1/2 input-primary" />
                  <select className="w-1/2 input-primary">
                    <option>Select region</option>
                    <option>Ate</option>
                    <option>San Isisdro</option>
                    <option>Miraflores</option>
                  </select>
                </div>
                <input type="text" placeholder="Enter your postal code" className="w-full input-primary" />
              </form>
            </div>

            <div className="shadow-md rounded bg-gray-100 p-4 mt-4 ">
              <h2 className="text-xl font-bold mb-4">Shipping method</h2>
              <div className="space-y-2">
                {["free", "regular", "express"].map((method) => (
                  <label key={method} className="flex items-center space-x-2 text-gray-700">
                    <input
                      type="radio"
                      name="shippingMethod"
                      value={method}
                      checked={shippingMethod === method}
                      onChange={() => setShippingMethod(method)}
                      className="text-blue-600 accent-indigo-600 focus:ring-indigo-600"
                    />
                    <span className="capitalize">{method} shipping</span>
                    <span className="ml-auto">{method === "free" ? "$0" : method === "regular" ? "$7.50" : "$22.50"}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-4 border rounded bg-gray-100 shadow-md">
            <h2 className="text-xl font-bold mb-4">Your Order</h2>
            {product.map((prod) => (
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded mr-4">
                  <img
                    className="rounded"
                    src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-home_default/brown-bear-printed-sweater.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <p className="font-bold">{prod.name}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Grey</p>
                  <p className="text-sm">x1</p>
                </div>
                <p className="ml-auto font-bold">S/ {prod.price}</p>
              </div>
            ))}
            <div className="mb-4 flex gap-px">
              <input type="text" placeholder="Add discount code" className="w-2/3 input-primary mr-2" />
              <Button className="w-1/3 btn-primary">Apply</Button>
            </div>
            <p className="text-sm mb-4">New customer? Sign up to get better offer</p>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>$2,500.00</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>-$0</span>
              </div>
              <div className="flex justify-between">
                <span>Shipment cost</span>
                <span>$22.50</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Grand total</span>
                <span>$2,522.50</span>
              </div>
            </div>
            <Button className="w-full btn-primary">Continue to payment</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
