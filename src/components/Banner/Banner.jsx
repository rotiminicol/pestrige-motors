import BannerImg from "../../assets/Banner.png";
import { Shield, Wrench, Truck } from 'lucide-react';

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
      <span id="about"></span>
      
      {/* Enhanced decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-3/4 h-3/4 bg-gradient-to-br from-yellow-100/30 to-orange-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -left-1/4 bottom-0 w-2/3 h-2/3 bg-gradient-to-tr from-blue-100/30 to-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative min-h-[650px] flex items-center py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Enhanced Image Section */}
            <div className="relative order-1 lg:order-2">
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

                {/* Floating badges with enhanced styling */}
                <div className="absolute -right-6 top-10 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl 
                  transform hover:scale-105 transition-transform duration-300 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-100 p-3 rounded-xl">
                      <Shield className="w-6 h-6 text-yellow-700" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Premium Protection</p>
                      <p className="text-xs text-gray-500">Fully Insured Service</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -left-6 bottom-10 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-xl 
                  transform hover:scale-105 transition-transform duration-300 border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <Wrench className="w-6 h-6 text-blue-700" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">Expert Service</p>
                      <p className="text-xs text-gray-500">Certified Mechanics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="order-2 lg:order-1 space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Experience Luxury 
                  <span className="relative">
                    <span className="relative z-10"> Car Services</span>
                    <span className="absolute bottom-0 left-0 w-full h-3 bg-yellow-200 transform -rotate-2 -z-0"></span>
                  </span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Discover the exceptional quality and craftsmanship of our latest car arrivals. 
                  Each vehicle in our collection offers unparalleled performance, innovative technology, 
                  and exquisite design.
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  {[
                    {
                      icon: <Shield className="w-6 h-6" />,
                      title: "Secure Services",
                      bg: "bg-red-100",
                      delay: "0"
                    },
                    {
                      icon: <Wrench className="w-6 h-6" />,
                      title: "Fast Repairs",
                      bg: "bg-orange-100",
                      delay: "150"
                    },
                    {
                      icon: <Truck className="w-6 h-6" />,
                      title: "Mobile Services",
                      bg: "bg-yellow-100",
                      delay: "300"
                    }
                  ].map((service, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 group transform transition-transform duration-300 hover:translate-x-2"
                    >
                      <div className={`${service.bg} p-4 rounded-xl group-hover:shadow-lg transition-shadow duration-300`}>
                        {service.icon}
                      </div>
                      <span className="font-medium">{service.title}</span>
                    </div>
                  ))}
                </div>

                <div className="relative">
                  <div className="border-l-4 border-black/10 pl-6 space-y-4">
                    <h2 className="text-2xl font-bold">Car Enthusiasts</h2>
                    <p className="text-gray-600">
                      Just like tuning a car to perfection, our services are
                      tailored to meet your exact needs, ensuring a smooth and
                      enjoyable ride every time.
                    </p>
                    <a 
                      href="https://www.instagram.com/prestige_motors.cy/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1"
                    >
                    <button 
                    className="bg-black text-white px-6 py-3 mt-2 rounded-lg font-medium 
                      transform transition-all duration-300 hover:scale-105 hover:shadow-lg
                      active:scale-95">
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

export default Banner;