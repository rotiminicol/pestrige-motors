import BannerImg from "../../assets/polish1.png";
import { GrSecure } from "react-icons/gr";
import { IoCarSportSharp } from "react-icons/io5";
import { GiCarWheel } from "react-icons/gi";
import { FaCar } from "react-icons/fa";

const bgImage = {
  backgroundColor: "#FFFFFF",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Polish = () => {
  return (
    <>
      <span id="about"></span>
      <div style={bgImage} className="mt-16">
        <div className="min-h-[650px] flex justify-center items-center py-12 sm:py-0">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Image section */}
              <div data-aos="zoom-in">
                <img
                  src={BannerImg}
                  alt="luxury car"
                  className="max-w-[430px] w-full mx-auto drop-shadow-[10px_-10px_12px_rgba(0,0,0,1)]"
                />
              </div>
              {/* Text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1
                  data-aos="fade-up"
                  className="text-3xl sm:text-4xl font-bold font-cursive"
                >
                  Comprehensive Car Services
                </h1>
                <p
                  data-aos="fade-up"
                  className="text-sm text-gray-500 tracking-wide leading-5"
                >
                  From polishing to full car maintenance, we offer services
                  tailored to enhance your driving experience with quality and
                  precision.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-5">
                    <div data-aos="fade-up" className="flex items-center gap-3">
                      <GrSecure className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-red-100 " />
                      <span>Car Polishing</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="300"
                      className="flex items-center gap-3"
                    >
                      <GiCarWheel className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-blue-100" />
                      <span>Car Wash</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="500"
                      className="flex items-center gap-3"
                    >
                      <IoCarSportSharp className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-yellow-100" />
                      <span>Buy Used Cars</span>
                    </div>
                    <div
                      data-aos="fade-up"
                      data-aos-delay="700"
                      className="flex items-center gap-3"
                    >
                      <FaCar className="text-2xl h-12 w-12 shadow-sm p-3 rounded-full bg-green-100" />
                      <span>Car Servicing</span>
                    </div>
                  </div>
                  <div
                    data-aos="slide-left"
                    className="border-l-4 border-primary/50 pl-6 space-y-2"
                  >
                    <h1 className="text-2xl font-semibold font-cursive">
                      Drive with Confidence
                    </h1>
                    <p className="text-sm text-gray-500">
                      At our service center, your satisfaction is our mission. 
                      Let us handle your car while you enjoy peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Polish;
