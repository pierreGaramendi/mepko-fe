import { ReactNode } from "react";
import { CardComponent } from "../ui/Card/Card";

export default function ProductLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex space-x-10 px-6 py-6 sm:px-6 md:px-12 lg:px-36 xl:px-64">
      <CardComponent>
        <main>{children}</main>
      </CardComponent>
    </div>
  );
}
