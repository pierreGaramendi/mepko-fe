import Link from "next/link";
import "./NavBar.css";
export const NavbarComponent = () => {
  const services = [
    {
      name: "Service One",
      link: "/service1",
    },
    {
      name: "Service Two",
      link: "/service2",
    },
  ];
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li className="dropdown">
          <a href="#" className="dropdown-toggle">
            Servicios
          </a>
          <ul className="dropdown-menu">
            {services.map((item) => (
              <li>
                <Link href="/">{item.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        <li>
          <Link href="/about">Sobre Nosotros</Link>
        </li>
        <li>
          <Link href="/about">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};
