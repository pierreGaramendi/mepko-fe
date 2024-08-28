"use client";
import { Button } from "@headlessui/react";
import { useReducer, useState } from "react";
import { IshopCounterAction, IshopCounterState, shopCounterInitialState, shopCounterReducer } from "./counter.state";
import { LoadingSpinner } from "@/app/ui/Spinner/LoadingSpinner";
import { useRouter } from "next/navigation";

export const ShopControls = ({ maxCount = 3 }: { maxCount: number }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const beginShop = () => {
    router.push("/checkout");
    setLoading(true);
  };
  const [state, dispatch] = useReducer(
    (state: IshopCounterState, action: IshopCounterAction) => shopCounterReducer(state, action, maxCount),
    shopCounterInitialState
  );
  return (
    <>
      <div className="mt-4">
        <div className="flex items-center space-x-4">
          <button className="border px-4 py-2 rounded border-gray-400" onClick={() => dispatch({ type: "decrement" })}>
            -
          </button>
          <span>{state.count}</span>
          <button className="border px-4 py-2 rounded border-gray-400" onClick={() => dispatch({ type: "increment" })}>
            +
          </button>
        </div>
        {/*  <p className="text-sm text-red-600 mt-2">Only 12 Items Left! Don’t miss it</p> */}
      </div>
      <div className="mt-6 flex space-x-4 flex-col lg:flex-row">
        <Button onClick={beginShop} className="btn-primary" disabled={loading}>
          {loading ? <LoadingSpinner size={20} color="bg-gray-200" /> : null}
          Comprar Ahora
        </Button>
        <Button className="btn-secondary">
          Agregar al carrito
        </Button>
      </div>
    </>
  );
};
