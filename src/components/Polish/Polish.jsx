import BannerImg from "../../assets/polish1.png";
import { GrSecure } from "react-icons/gr";
import { IoCarSportSharp } from "react-icons/io5";
import { GiCarWheel } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import { MdTaxiAlert } from "react-icons/md"; // Adding the taxi service icon

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
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
      <span id="about"></span>

      {/* Enhanced decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-3/4 h-3/4 bg-gradient-to-br from-yellow-100/30 to-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -left-1/4 bottom-0 w-2/3 h-2/3 bg-gradient-to-tr from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      <div style={bgImage} className="mt-16 min-h-[650px] flex justify-center items-center py-12 sm:py-0">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Image section */}
            <div className="relative order-1 sm:order-2 group">
              <div className="relative group">
                {/* Background decoration for image */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 to-gray-900/5 rounded-3xl 
                  transform rotate-6 scale-105 transition-transform duration-500 group-hover:rotate-4"></div>
                <div className="absolute inset-0 bg-gradient-to-l from-gray-900/10 to-gray-900/5 rounded-3xl 
                  transform -rotate-2 scale-105 transition-transform duration-500 group-hover:-rotate-4"></div>

                {/* Main image container */}
                <div className="relative transform transition-all duration-700 hover:scale-[1.02]">
                  {/* Image shadow and background effects */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-gray-200 to-white opacity-50 blur-2xl rounded-3xl"></div>
                  <div className="relative z-10">
                    <img
                      src={BannerImg}
                      alt="luxury car"
                      className="w-full max-w-[540px] mx-auto rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] 
                        transform transition-all duration-500"
                    />
                    {/* Overlay gradient for depth */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-black/5 to-transparent opacity-0 
                      group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content section */}
            <div className="relative space-y-8 order-2 sm:order-1">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                  Comprehensive Car Services
                  <span className="relative">
                    <span className="relative z-10"> to Enhance Your Experience</span>
                    <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-200 transform -rotate-2 -z-0"></span>
                  </span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From polishing to full car maintenance, we offer services
                  tailored to enhance your driving experience with quality and
                  precision.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {[ 
                    { icon: <GrSecure className="w-6 h-6" />, title: "Car Polishing", bg: "bg-red-100" },
                    { icon: <GiCarWheel className="w-6 h-6" />, title: "Car Wash", bg: "bg-blue-100" },
                    { icon: <IoCarSportSharp className="w-6 h-6" />, title: "Buy Used Cars", bg: "bg-yellow-100" },
                    { icon: <FaCar className="w-6 h-6" />, title: "Car Servicing", bg: "bg-green-100" },
                    { icon: <MdTaxiAlert className="w-6 h-6" />, title: "Taxi Service", bg: "bg-gray-100" },
                  ].map((service, index) => (
                    <div key={index} className="flex items-center gap-4 group transform transition-transform duration-300 hover:translate-x-2">
                      <div className={`${service.bg} p-4 rounded-xl group-hover:shadow-lg transition-shadow duration-300`}>
                        {service.icon}
                      </div>
                      <span className="font-medium">{service.title}</span>
                    </div>
                  ))}
                </div>
                <div className="relative">
                  <div className="border-l-4 border-black/10 pl-6 space-y-4">
                    <h2 className="text-2xl font-bold">Drive with Confidence</h2>
                    <p className="text-gray-600">
                      At our service center, your satisfaction is our mission. 
                      Let us handle your car while you enjoy peace of mind.
                    </p>
                    <a 
                      href="https://www.instagram.com/prestige_motors.cy/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1"
                    >
                    <button className="bg-black text-white px-6 py-3 mt-2 rounded-lg font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                      Learn More
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Polish;