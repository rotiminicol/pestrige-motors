import HeroPng from "../../assets/logo.png";

const Hero = () => {
  return (
    <>
      <div className="min-h-[550px] sm:min-h-[600px] bg-black flex justify-center items-center text-white">
        <div className="container pb-8 sm:pb-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {/* text content section */}
            <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
              <h1
                data-aos="fade-up"
                data-aos-once="true"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif"
              >
                We offer the most{" "}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className="bg-clip-text text-transparent bg-gradient-to-b bg-yellow-500 font-cursive"
                >
                  Luxurious Cars
                </span>{" "}
                in the city at{" "}
                <span
                  data-aos="zoom-out"
                  data-aos-delay="300"
                  className="bg-clip-text text-transparent bg-gradient-to-b bg-yellow-500 font-cursive"
                >
                  Affordable Prices
                </span>
              </h1>
              <div data-aos="fade-up" data-aos-delay="400">
                <button className="bg-gradient-to-r bg-yellow-500 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                  Drive Your Dream
                </button>
              </div>
            </div>
            {/* Image section */}
            <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2"
            >
              <img
                data-aos-once="true"
                src={HeroPng}
                alt="luxury car"
                className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto spin"
              />
              <div
                data-aos="fade-left"
                className="bg-gradient-to-r bg-yellow-500 p-3 rounded-xl absolute top-10 left-10"
              >
                <h1 className="text-white">HEY PAPHOS</h1>
              </div>
              <div
                data-aos="fade-right"
                data-aos-offset="0"
                className="bg-gradient-to-r bg-yellow-500 p-3 rounded-xl absolute bottom-10 right-10"
              >
                <h1 className="text-white"> LUXURY CARS</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
