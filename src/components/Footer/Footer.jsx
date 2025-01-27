import { FaFacebook, FaInstagram } from "react-icons/fa6";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const QuickLinks = [
  {
    title: "Privacy Policy",
    link: "/#privacy",
  },
  {
    title: "Terms of Service",
    link: "/#terms",
  },
  {
    title: "FAQ",
    link: "/#faq",
  },
  {
    title: "Support",
    link: "/#support",
  },
];

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-4 pb-20 pt-5 gap-8">
          {/* Company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
            >
              Prestige Motors
            </a>
            <p className="pt-4">
              Reliable and Affordable Car Rentals and Services – Experience the Best Ride
            </p>
            <a
              href="https://www.instagram.com/prestige_motors.cy/"
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-yellow-500 py-2 px-4 mt-5 text-sm rounded-full"
            >
              Visit our Page
            </a>
          </div>

          {/* Important Links */}
          <div className="py-8 px-4">
            <h1 className="text-xl font-semibold sm:text-left mb-3">
              Important Links
            </h1>
            <ul className="space-y-3">
              {FooterLinks.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.link}
                    className="inline-block hover:text-yellow-500 duration-200"
                  >
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="py-8 px-4">
            <h1 className="text-xl font-semibold sm:text-left mb-3">
              Quick Links
            </h1>
            <ul className="space-y-3">
              {QuickLinks.map((data, index) => (
                <li key={index}>
                  <a
                    href={data.link}
                    className="inline-block hover:text-yellow-500 duration-200"
                  >
                    {data.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="py-8 px-4">
            <h1 className="text-xl font-semibold sm:text-left mb-3">
              Contact Information
            </h1>
            <div>
              <p className="mb-3">Kissonergas Κατ. 5, Kissonerga 8574</p>
              <p className="mb-3">📞 +357 96471717</p>
              <p className="mb-3">📞 +357 96005009</p>
              <p className="mb-3">📧 info@prestigemotors.cy</p>

              {/* Social links */}
              <div className="flex items-center gap-3 mt-6">
                <a href="https://www.instagram.com/prestige_motors.cy/">
                  <FaInstagram className="text-3xl hover:text-yellow-500 duration-300" />
                </a>
                <a href="https://www.facebook.com/prestige_motors.cy/">
                  <FaFacebook className="text-3xl hover:text-yellow-500 duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black/60 py-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Rotimi Nicol. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;