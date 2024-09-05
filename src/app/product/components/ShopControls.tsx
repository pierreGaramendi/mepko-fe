"use client";
import { Button } from "@headlessui/react";
import { useReducer, useState } from "react";
import { IshopCounterAction, IshopCounterState, shopCounterInitialState, shopCounterReducer } from "../store/counter.state";
import { LoadingSpinner } from "@/app/ui/Spinner/LoadingSpinner";
import { useRouter } from "next/navigation";
import { startShopping } from "../service/startShopping";
import { ShoppingSteps } from "@/app/constants/shop-steps";

interface IStartShoppingResponse {
  message: string;
  sessionId: string;
}

interface IShopControls {
  maxCount: number;
  productId: string;
}

export const ShopControls = ({ maxCount = 3, productId = "" }: IShopControls) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const beginShop = async () => {
    try {
      setLoading(true);
      const response = await startShopping({ productId, quantity: state.count, step: ShoppingSteps.Checkout });
      const data: IStartShoppingResponse = await response;
      console.log("la data new session: ", data);
      const { sessionId } = data;
      router.push(`/checkout/${sessionId}`);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const [state, dispatch] = useReducer(
    (state: IshopCounterState, action: IshopCounterAction) => shopCounterReducer(state, action, maxCount),
    shopCounterInitialState
  );
  return (
    <>
      <div className="mt-4">
        <div className="flex flex-col">
          <p className="text-gray-700 text-sm font-medium mt-2">Cantidad</p>
          <div className="flex mt-1">
            <button
              className="px-4 py-2 rounded-l-lg bg-gray-300 text-indigo-600 font-semibold text-xl"
              onClick={() => dispatch({ type: "decrement" })}
            >
              -
            </button>
            <span className="bg-gray-300 px-4 py-2">{state.count}</span>
            <button
              className="px-4 py-2 rounded-r-lg bg-gray-300 text-indigo-600 font-bold text-xl"
              onClick={() => dispatch({ type: "increment" })}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className="mt-6 flex 2xl:space-x-4 flex-col 2xl:flex-row">
        <Button onClick={beginShop} className="btn-primary" disabled={loading}>
          {loading ? <LoadingSpinner size={20} color="bg-gray-200" /> : null}
          Comprar Ahora
        </Button>
        <Button className="btn-secondary mt-2 2xl:mt-0">Agregar al carrito</Button>
      </div>
    </>
  );
};
