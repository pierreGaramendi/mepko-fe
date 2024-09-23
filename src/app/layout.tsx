import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { HeaderComponent } from "./ui/Header/Header";
import { FooterComponent } from "./ui/Footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], preload: false });

export const metadata: Metadata = {
  title: {
    default: "Compra Online Fácil y Rápido | Nostromo",
    template: "%s | Nostromo",
  },
  description:
    "Descubre una amplia variedad de productos en [Nombre de la Web], tu tienda online multipropósito. Desde tecnología hasta moda y hogar, tenemos todo lo que necesitas con ofertas exclusivas y envío rápido. ¡Compra ahora!",
  keywords:
    "ecommerce, tienda online, tecnología, moda, hogar, productos multipropósito, compras en línea, envío rápido, ofertas exclusivas, tienda de productos diversos",
  alternates: {
    canonical: "https://www.nostromo.com",
  },
  metadataBase: new URL("https://www.nostromo.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-200 text-gray-800`}>
        <main className="flex min-h-screen flex-col">
          <HeaderComponent />
          {children}
          <FooterComponent></FooterComponent>
        </main>
      </body>
    </html>
  );
}
