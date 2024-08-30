"use client";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";
import { ShoppingSteps } from "../constants/shop-steps";

export const BreadcrumbCheckout = ({ step }: { step: string }) => {
  const router = useRouter();
  const steps: string[] = Object.values(ShoppingSteps);
  return (
    <nav aria-label="breadcrumb">
      <div className="flex items-center space-x-2 text-sm">
        {steps.map((segment, index) => {
          const href = "/" + segment;
          return (
            <div key={href} className="flex items-center">
              {step === segment ? (
                <span className="capitalize font-semibold text-indigo-600">{segment}</span>
              ) : (
                <span className="cursor-pointer capitalize text-gray-600" onClick={() => router.push(href)}>
                  {segment}
                </span>
              )}

              {index < 2 ? (
                <span className="mx-2">
                  <MdKeyboardArrowRight />
                </span>
              ) : null}
            </div>
          );
        })}
      </div>
    </nav>
  );
};
