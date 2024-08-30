import axios from 'axios';
import { ShoppingSteps } from "@/app/constants/shop-steps";

interface IShopControls {
  quantity: number;
  productId: string;
  step: ShoppingSteps.Checkout;
}

export const startShopping = async (body: IShopControls) => {
  try {
    const response = await axios.post(
      "http://localhost:3666/shooping/start-purchase",
      body,
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true // Esto asegura que las cookies se envíen con la solicitud si es necesario
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error starting shopping:", error);
    throw new Error("Failed to start shopping.");
  }
};
