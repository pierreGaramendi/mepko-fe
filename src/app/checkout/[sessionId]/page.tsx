"use client";
import { useEffect, useState } from "react";
import { BreadcrumbCheckout } from "../../cart/BreadcrumCheckout";
import { ShoppingSteps } from "@/app/constants/shop-steps";
import { getShoopingSession } from "../services/getShoopingSession";
import { useRouter } from "next/navigation";
import { Button } from "@headlessui/react";
import { useForm } from "react-hook-form";
interface IGetShoopingSession {
  data: ISessionData;
  status: number;
}

interface ISessionData {
  sessionId: string;
  productId: string;
  quantity: number;
  step: number;
  createdAt: string;
  price: number;
  thumbnail: string;
  name: string;
}

export default function CheckoutPage({ params }: { params: { sessionId: string } }) {
  const { sessionId } = params;
  const [product, setProduct] = useState<ISessionData[]>([]);
  const router = useRouter();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  useEffect(() => {
    const callSessionData = async () => {
      const result: IGetShoopingSession = await getShoopingSession(sessionId);
      if (result.status !== 200) {
        router.push(`/`);
      }
      setProduct([result.data]);
    };
    callSessionData();
  }, []);
  const [shippingMethod, setShippingMethod] = useState("express");
  return (
    <section className="flex-1 w-full">
      <div className="container mx-auto p-4">
        <BreadcrumbCheckout step={ShoppingSteps.Checkout} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col md:flex-row gap-8 pt-6">
            <div className="w-full md:w-2/3">
              <div className="rounded-lg bg-gray-100 shadow-md p-4">
                <h2 className="text-xl font-bold mb-4">Contacto</h2>
                <input
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                  className={"input-primary w-full  " + (errors.email ? "!border-red-600" : "border-gray-300")}
                  {...register("email", {
                    required: "Introduce un correo electrónico",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "El valor ingresado no coincide con el formato del correo electrónico",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-600 text-sm" role="alert">
                    {errors.email.message?.toString()}
                  </span>
                )}
                <h2 className="text-xl font-bold mb-4 mt-4">Datos de Entrega</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Ingrese su nombre completo"
                    className={"input-primary w-full " + (errors.fullname ? "!border-red-600" : "border-gray-300")}
                    {...register("fullname", { required: "Este campos es obligatorio" })}
                  />
                  {errors.fullname && (
                    <span className="text-red-600 text-sm" role="alert">
                      {errors.fullname.message?.toString()}
                    </span>
                  )}

                  <input
                    type="tel"
                    placeholder="Ingrese su numero de celular"
                    className={"input-primary w-full " + (errors.cel ? "!border-red-600" : "border-gray-300")}
                    {...register("cel", { required: "Este campos es obligatorio" })}
                  />
                  {errors.cel && (
                    <span className="text-red-600 text-sm" role="alert">
                      {errors.cel.message?.toString()}
                    </span>
                  )}
                  <input
                    type="text"
                    placeholder="Ingrese el nombre de su calle y el número de su casa"
                    className={"input-primary w-full " + (errors.address ? "!border-red-600" : "border-gray-300")}
                    {...register("address", { required: "Este campos es obligatorio" })}
                  />
                  {errors.address && (
                    <span className="text-red-600 text-sm" role="alert">
                      {errors.address.message?.toString()}
                    </span>
                  )}
                  <div className="flex gap-4">
                    <div className="flex flex-col w-1/2">
                      <input
                        type="text"
                        placeholder="Ciudad"
                        className={"input-primary " + (errors.city ? "!border-red-600" : "border-gray-300")}
                        {...register("city", { required: "Este campos es obligatorio" })}
                      />
                      {errors.city && (
                        <span className="text-red-600 text-sm" role="alert">
                          {errors.city.message?.toString()}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col w-1/2">
                      <select
                        className={"input-primary " + (errors.district ? "!border-red-600" : "border-gray-300")}
                        {...register("district", { required: "Este campos es obligatorio" })}
                      >
                        <option value="">Distrito</option>
                        <option>Ate</option>
                        <option>San Isisdro</option>
                        <option>Miraflores</option>
                      </select>
                      {errors.district && (
                        <span className="text-red-600 text-sm" role="alert">
                          {errors.district.message?.toString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <input type="text" placeholder="Ingrese codigo postal" className="w-full input-primary" />
                </div>
              </div>

              <div className="shadow-md rounded-lg bg-gray-100 p-4 mt-4 ">
                <h2 className="text-xl font-bold mb-4">Método de envío</h2>
                <div className="space-y-2">
                  {["gratis", "regular", "express"].map((method) => (
                    <label key={method} className="flex items-center space-x-2 text-gray-700">
                      <input
                        type="radio"
                        name="shippingMethod"
                        value={method}
                        checked={shippingMethod === method}
                        onChange={() => setShippingMethod(method)}
                        className="text-blue-600 accent-indigo-600 focus:ring-indigo-600"
                      />
                      <span className="capitalize">Envío {method}</span>
                      <span className="ml-auto">
                        {method === "free" ? "S/ 0" : method === "regular" ? "S/ 7.50" : "S/ 22.50"}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 p-4 rounded-lg bg-gray-100 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Resumen de Pedido</h2>
              {product.map((prod, index) => (
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-lg mr-4">
                    <img className="rounded-lg" src={prod.thumbnail} alt="" />
                  </div>
                  <div>
                    <p className="font-bold">{prod.name}</p>
                    {/* <p className="text-sm text-gray-600 dark:text-gray-400">Grey</p> */}
                    <p className="text-sm">Cantidad {prod.quantity}</p>
                  </div>
                  <p className="ml-auto font-bold">S/ {prod.price}</p>
                </div>
              ))}
              <div className="mb-4 flex gap-px">
                <input type="text" placeholder="Código de descuento" className="w-2/3 input-primary mr-2" />
                <Button className="w-1/3 btn-primary">Aplicar</Button>
              </div>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>S/ 2,500.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Descuento</span>
                  <span>-S/ 0</span>
                </div>
                <div className="flex justify-between">
                  <span>Costo de Envío</span>
                  <span>S/ 22.50</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>S/ 2,522.50</span>
                </div>
              </div>
              <Button className="w-full btn-primary" type="submit" disabled={!isValid}>
                Pagar Ahora
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
