"use client";
import { useState } from "react";
import { BreadcrumbCheckout } from "../cart/BreadcrumCheckout";

export default function CheckoutPage() {
  const [shippingMethod, setShippingMethod] = useState("express");
  return (
    <section className="flex-1 w-full">
      <div className="container mx-auto p-4">
        <BreadcrumbCheckout />
        <div className="flex flex-col md:flex-row gap-8 pt-6">
          <div className="w-full md:w-2/3">
            <div className="border rounded dark:border-gray-600 p-4">
              <h2 className="text-xl font-bold mb-4">Select shipping country</h2>
              <select className="w-full p-2 mb-4 border rounded">
                <option>Select country</option>
                <option>Argentina</option>
              </select>

              <h2 className="text-xl font-bold mb-4">Shipping address</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                />
                <div className="flex gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-1/2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                  />
                  <input
                    type="email"
                    placeholder="Enter confirmation email"
                    className="w-1/2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Enter your phone number (only digits)"
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                />
                <input
                  type="text"
                  placeholder="Enter your Street name and house number"
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                />
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="w-1/2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                  />
                  <select className="w-1/2 p-2 border rounded dark:bg-gray-700 dark:border-gray-600">
                    <option>Select region</option>
                  </select>
                </div>
                <input
                  type="text"
                  placeholder="Enter your postal code"
                  className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                />
              </form>
            </div>

            <div className="border rounded dark:border-gray-600 p-4 mt-4">
              <h2 className="text-xl font-bold mb-4">Shipping method</h2>
              <div className="space-y-2">
                {["free", "regular", "express"].map((method) => (
                  <label key={method} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="shippingMethod"
                      value={method}
                      checked={shippingMethod === method}
                      onChange={() => setShippingMethod(method)}
                      className="form-radio text-blue-600"
                    />
                    <span className="capitalize">{method} shipping</span>
                    <span className="ml-auto">{method === "free" ? "$0" : method === "regular" ? "$7.50" : "$22.50"}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-4 border rounded dark:border-gray-600">
            <h2 className="text-xl font-bold mb-4">Your Order</h2>
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded mr-4">
                <img
                  className="rounded"
                  src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/32-home_default/brown-bear-printed-sweater.jpg"
                  alt=""
                />
              </div>
              <div>
                <p className="font-bold">Calher Leather...</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">Grey</p>
                <p className="text-sm">x1</p>
              </div>
              <p className="ml-auto font-bold">$2,500.00</p>
            </div>
            <div className="mb-4 flex gap-px">
              <input
                type="text"
                placeholder="Add discount code"
                className="w-2/3 p-2 border rounded dark:bg-gray-600 dark:border-gray-500 mr-2"
              />
              <button className="w-1/3 p-2 bg-blue-600 text-white rounded">Apply</button>
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
            <button className="w-full p-2 bg-blue-600 text-white rounded">Continue to payment</button>
          </div>
        </div>
      </div>
    </section>
  );
}
