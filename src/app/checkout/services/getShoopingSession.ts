import axios from "axios";

export const getShoopingSession = async (shoopingId: string) => {
  try {
    //TODO
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await axios.get(`http://localhost:3666/shooping/checkout/${shoopingId}`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true, // Esto asegura que las cookies se envíen con la solicitud si es necesario
    });
    console.log("responsae999:          ",response)
    const status = response.status;
    const data = response.data;
    return { data, status };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to Shooping session.");
  }
};
