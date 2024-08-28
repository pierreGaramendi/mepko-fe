import Link from "next/link";
import "./NavBar.css";
import { FaLightbulb } from "react-icons/fa";

export const NavbarComponent = () => {
  const services = [
    {
      name: "Service One",
      link: "/service1",
    },
    {
      name: "Service One",
      link: "/service1",
    },
    {
      name: "Service One",
      link: "/service1",
    },
    {
      name: "Service One",
      link: "/service1",
    },
    {
      name: "Service One",
      link: "/service1",
    },
    {
      name: "Service One",
      link: "/service1",
    },
  ];
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>
          <Link className="hover:underline underline-offset-4" href="/">
            Inicio
          </Link>
        </li>
        <li className="dropdown">
          <a className="dropdown-toggle hover:underline underline-offset-4 cursor-pointer">
            Servicios
          </a>
          <ul className="dropdown-menu bg-gray-100 border border-gray-300 rounded flex flex-row flex-wrap">
            {services.map((item) => (
              <li>
                <Link
                  className="hover:text-indigo-700 flex flex-row items-center customeLink"
                  href="/"
                >
                  <FaLightbulb className="mr-2" />
                  <div className="flex flex-col" style={{width: 'max-content'}}>
                    <span>{item.name}</span>
                    <span className="text-gray-500 hover:text-indigo-500">Edit your code while slowing down time.</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <Link href="/about" className="hover:underline underline-offset-4">
            Sobre Nosotros
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline underline-offset-4">
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  );
};
