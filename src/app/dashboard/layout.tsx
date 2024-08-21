import { HeaderComponent } from "../ui/Header/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    /*     <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">

      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div> */

    <main className="flex min-h-screen flex-col items-center justify-between">
      <HeaderComponent />
      <section className="flex-1">{children}</section>
      <footer>el futer</footer>
    </main>
  );
}
