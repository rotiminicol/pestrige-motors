import { useState } from "react";
import Logo from "../../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "home",
  },
  {
    id: 2,
    name: "About",
    link: "about",
  },
  {
    id: 3,
    name: "Services",
    link: "services",
  },
  {
    id: 4,
    name: "Contact",
    link: "contact",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-800 to-yellow-600 shadow-lg text-white fixed top-0 w-full z-50">
      <div className="container py-4 px-6 mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <a
            href="#home"
            onClick={() => handleScroll("home")}
            className="text-3xl font-bold font-sans text-white hover:text-yellow-400 duration-300"
          >
            Prestige{" "}
            <span className="text-yellow-400 tracking-wider">Motors</span>
          </a>
          <img
            src={Logo}
            alt="Logo"
            className="w-12 animate-pulse hover:animate-spin"
          />
        </div>

        <ul className="hidden sm:flex items-center gap-8">
          {Menu.map((menu) => (
            <li key={menu.id}>
              <button
                onClick={() => handleScroll(menu.link)}
                className="text-lg py-2 px-4 text-white/80 hover:text-yellow-400 hover:scale-105 duration-300"
              >
                <span className="font-medium">{menu.name}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FaTimes className="text-2xl text-white transition-transform duration-300 hover:rotate-180" />
            ) : (
              <FaBars className="text-2xl text-white transition-transform duration-300 hover:scale-110" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`absolute bg-gray-900 w-full left-0 top-full transition-all duration-500 ${
          isMenuOpen ? "opacity-100 visible scale-100" : "opacity-0 invisible scale-95"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-6">
          {Menu.map((menu) => (
            <li key={menu.id}>
              <button
                onClick={() => handleScroll(menu.link)}
                className="block text-lg text-white/80 hover:text-yellow-400 hover:translate-x-2 duration-300"
              >
                {menu.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;