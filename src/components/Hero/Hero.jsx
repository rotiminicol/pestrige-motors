import { useState } from "react";
import HeroPng from "../../assets/bghe.png";
import AuthPopup from "../AuthPopup"; // Import the Popup Component

const Hero = () => {
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibility

  return (
    <div
      id="hero"
      className="min-h-screen bg-gradient-to-br from-pink-50 to-red-50 flex justify-center items-center text-gray-900 relative overflow-hidden"
    >
      {/* Decorative Blurred Circles */}
      <div className="absolute w-96 h-96 bg-pink-200 rounded-full opacity-20 blur-3xl -top-32 -left-32 animate-float"></div>
      <div className="absolute w-96 h-96 bg-red-200 rounded-full opacity-20 blur-3xl -bottom-32 -right-32 animate-float-delay"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col sm:flex-row items-center gap-8">
          {/* Text Content */}
          <div className="flex flex-col justify-center gap-6 text-center sm:text-left order-2 sm:order-1 flex-1">
            <h1
              data-aos="fade-up"
              className="text-5xl sm:text-6xl lg:text-7xl font-bold font-[Playfair Display] leading-tight"
            >
              Love That Lasts,{" "}
              <span
                data-aos="zoom-in"
                data-aos-delay="200"
                className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-red-500"
              >
                Forever
              </span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-xl sm:text-2xl text-gray-700 max-w-lg mx-auto sm:mx-0"
            >
              Your journey to find a lasting connection begins here. Discover
              love with MiAmour.
            </p>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              className="flex justify-center sm:justify-start"
            >
              <button
                onClick={() => setShowPopup(true)} // Open Popup on Click
                className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 transform hover:scale-105 transition-all duration-300 text-white py-3 px-8 rounded-full shadow-lg text-lg font-semibold flex items-center gap-2"
              >
                Get Started
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Image Content */}
          <div
            data-aos="zoom-in"
            className="relative flex justify-center items-center order-1 sm:order-2 flex-1"
          >
            <div className="overflow-hidden shadow-2xl w-full max-w-[450px] h-[300px] sm:h-[350px] lg:h-[400px] transform hover:scale-105 transition-all duration-300 rounded-2xl border-4 border-white/10 backdrop-blur-sm bg-white/20">
              <img
                src={HeroPng}
                alt="Happy Couple"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Render Popup Conditionally */}
      {showPopup && <AuthPopup onClose={() => setShowPopup(false)} />}
    </div>
  );
};

export default Hero;