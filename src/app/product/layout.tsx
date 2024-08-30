import { ReactNode } from "react";
import { CardComponent } from "../ui/Card/Card";

export default function ProductLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex space-x-10 px-4 py-6 lg:px-16 xl:px-48">
      <CardComponent>
        <main>{children}</main>
      </CardComponent>
    </div>
  );
}
