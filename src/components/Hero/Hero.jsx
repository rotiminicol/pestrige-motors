import HeroPng from "../../assets/logo.png";

const Hero = () => {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center text-white mt-0 pt-0">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-8">
          {/* Text Content */}
          <div className="flex flex-col justify-center gap-6 text-center sm:text-left order-2 sm:order-1 flex-1">
            <h1
              data-aos="fade-up"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold font-[Playfair Display]"
            >
              Your Journey,{" "}
              <span
                data-aos="zoom-in"
                data-aos-delay="200"
                className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-yellow-300"
              >
                Redefined
              </span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-lg sm:text-xl text-white/80 max-w-lg mx-auto sm:mx-0"
            >
              Experience unparalleled luxury and sophistication in every mile.
            </p>
            <div data-aos="fade-up" data-aos-delay="600">
            <a 
                      href="https://www.instagram.com/prestige_motors.cy/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1"
                    >
              <button className="bg-gradient-to-r from-yellow-500 to-yellow-400 hover:bg-yellow-600 hover:scale-105 transition-transform duration-300 text-white py-3 px-6 rounded-full shadow-lg text-lg">
                Discover Now
              </button>
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div
            data-aos="zoom-in"
            className="relative flex justify-center items-center order-1 sm:order-2 flex-1"
          >
            <img
              src={HeroPng}
              alt="Luxury Car"
              className="w-[300px] sm:w-[350px] lg:w-[450px] transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;