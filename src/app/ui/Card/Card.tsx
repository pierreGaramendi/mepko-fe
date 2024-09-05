import { ReactNode } from "react";

export const CardComponent = ({ children }: { children: ReactNode }) => <div className={`bg-gray-100 p-6 shadow-md rounded-lg`}>{children}</div>;
