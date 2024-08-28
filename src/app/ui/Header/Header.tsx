import styles from "./Header.module.css";
import { NavbarComponent } from "./NavBar/NavBar";
import { RightSideComponent } from "./Rightside/RightSide";
import Link from "next/link";

export const HeaderComponent = () => {
  return (
    <header className={`flex flex-row justify-between w-full p-6 ${styles.topbar} bg-gray-100 text-gray-800`}>
      <section className="flex items-center">
        <Link className="font-bold text-2xl text-gray-800" href="/">
          MEPKO
        </Link>
      </section>
      <NavbarComponent />
      <RightSideComponent />
    </header>
  );
};
