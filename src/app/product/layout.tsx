import { ReactNode } from "react";

export default function ProductLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex space-x-10 px-48 py-20">
      <main>{children}</main>
    </div>
  );
}
