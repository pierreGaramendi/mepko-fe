"use client";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export const BreadcrumbCheckout = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);
  const currentPath = pathSegments.at(-1);
  const router = useRouter();
  const steps = ["cart", "checkout", "payment"];
  return (
    <nav aria-label="breadcrumb">
      <div className="flex items-center space-x-2 text-sm">
        {steps.map((segment, index) => {
          const href = "/" + segment;
          return (
            <div key={href} className="flex items-center">
              {currentPath === segment ? (
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
