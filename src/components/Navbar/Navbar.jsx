import Logo from "../../assets/logo.png";
import { FaCar } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About",
    link: "/#about",
  },
  {
    id: 3,
    name: "Services",
    link: "/#services",
  },
];

const Navbar = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-black via-gray-800 to-yellow-500 shadow-md text-white fixed top-0 w-full z-50">
        <div className="container py-2">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="#"
                className="font-bold text-xl sm:text-2xl flex justify-center items-center gap-2 tracking-wider font-cursive"
              >
                <img src={Logo} alt="Logo" className="w-12" />
                Prestige Motors
              </a>
            </div>

            {/* Link section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="flex justify-between items-center gap-4"
            >
              <ul className="hidden sm:flex items-center gap-4">
                {Menu.map((menu) => (
                  <li key={menu.id}>
                    <a
                      href={menu.link}
                      className="inline-block text-xl py-4 px-4 text-white/80 hover:text-yellow-400 duration-200"
                    >
                      <span className="font-semibold tracking-wide">{menu.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <a href="/contact">
                <button className="bg-yellow-500 hover:scale-105 duration-200 text-white px-3 py-1.5 rounded-full flex items-center gap-2">
                  <span className="font-semibold tracking-wide">CONTACT US</span>
                  <FaCar className="text-xl text-white drop-shadow-sm cursor-pointer" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Added margin to push content down */}
      <div className="mt-16"></div>
    </>
  );
};

export default Navbar;
