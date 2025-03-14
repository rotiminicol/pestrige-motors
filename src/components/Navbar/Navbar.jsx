import { useState, useEffect } from "react";
import Logo from "../../assets/miLogo.png";
import { FaBars, FaTimes, FaHeart } from "react-icons/fa";

const Menu = [
  { id: 1, name: "Home", link: "hero" },
  { id: 2, name: "About", link: "about" },
  { id: 3, name: "Services", link: "services" },
  { id: 4, name: "Contact", link: "contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  // Handle scroll to detect when navbar should change appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sections = Menu.map((item) => document.getElementById(item.link));
      const scrollPosition = window.scrollY + 100;

      const currentSection = sections.filter((section) => {
        if (!section) return false;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        return scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight;
      })[0];

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
    }
    setIsMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg text-gray-800"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container py-4 px-6 mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleScroll("hero")}
            className={`text-3xl font-bold font-serif transition-all duration-300 ${
              isScrolled ? "text-pink-600" : "text-white"
            }`}
          >
            MiAmour
            <span className="ml-1 inline-block transition-transform">
              <FaHeart
                className={`text-pink-500 ${
                  isScrolled ? "animate-none" : "animate-pulse"
                }`}
              />
            </span>
          </button>
          <img
            src={Logo}
            alt="Logo"
            className={`w-10 h-10 object-contain transition-all duration-300 hover:scale-110 ${
              isScrolled ? "filter brightness-0" : ""
            }`}
            onClick={() => handleScroll("hero")}
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {Menu.map((menu) => (
            <li key={menu.id}>
              <button
                onClick={() => handleScroll(menu.link)}
                className={`relative text-md font-medium px-4 py-2 transition-all duration-300 ${
                  activeSection === menu.link
                    ? isScrolled
                      ? "text-pink-600 font-semibold"
                      : "text-white font-semibold"
                    : isScrolled
                    ? "text-gray-700 hover:text-pink-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {menu.name}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform duration-300 ${
                    activeSection === menu.link ? "scale-x-100 bg-pink-500" : ""
                  }`}
                ></span>
              </button>
            </li>
          ))}
          <li>
            <button
              className={`ml-4 px-6 py-2 rounded-full transition-all duration-300 ${
                isScrolled
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg hover:shadow-pink-200"
                  : "bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/30"
              }`}
              onClick={() => handleScroll("contact")}
            >
              Get Started
            </button>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
              <FaTimes
                className={`text-2xl transition-colors duration-300 ${
                  isScrolled ? "text-pink-600" : "text-white"
                }`}
              />
            ) : (
              <FaBars
                className={`text-2xl transition-colors duration-300 ${
                  isScrolled ? "text-pink-600" : "text-white"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute w-full left-0 top-full transition-all duration-500 ${
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        } ${
          isScrolled
            ? "bg-white shadow-lg"
            : "bg-gradient-to-b from-purple-500/95 to-pink-600/95 backdrop-blur-md"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 py-6">
          {Menu.map((menu) => (
            <li key={menu.id} className="w-full">
              <button
                onClick={() => handleScroll(menu.link)}
                className={`block w-full text-center py-3 text-lg font-medium transition-all duration-300 ${
                  activeSection === menu.link
                    ? isScrolled
                      ? "text-pink-600 font-semibold"
                      : "text-white font-semibold"
                    : isScrolled
                    ? "text-gray-700 hover:text-pink-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {menu.name}
              </button>
              <span
                className={`block mx-auto w-12 h-0.5 ${
                  activeSection === menu.link
                    ? isScrolled
                      ? "bg-pink-500"
                      : "bg-white"
                    : "bg-transparent"
                }`}
              ></span>
            </li>
          ))}
          <li className="w-full px-8 mt-4">
            <button
              className={`w-full py-3 rounded-lg transition-all duration-300 ${
                isScrolled
                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                  : "bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
              }`}
              onClick={() => handleScroll("contact")}
            >
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;