"use client";
import Link from "next/link";
import { FaCartShopping } from "react-icons/fa6";

export const RightSideComponent = () => {
  return (
    <section className="flex flex-row justify-between items-center">
      <Link href="/cart">
        <FaCartShopping size={20} className="mr-4" />
      </Link>
      <section className="text-sm">
        <Link href="/login">Login</Link>
      </section>
    </section>
  );
};
