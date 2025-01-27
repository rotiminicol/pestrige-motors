import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";
import Img3 from "../../assets/img3.png";
import Img4 from "../../assets/img4.png";
import Img5 from "../../assets/img5.png";
import Img6 from "../../assets/img6.png";
import { useState } from 'react';
import { ArrowLeft, ArrowRight, Euro, Calendar, Info } from 'lucide-react';

const ServicesData = [
  {
    id: 1,
    images: [Img1, Img1, Img1],
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    price: "€20,000",
    description:
      "A reliable and fuel-efficient compact sedan with modern features.",
  },
  {
    id: 2,
    images: [Img2, Img2, Img2],
    brand: "Honda",
    model: "Civic",
    year: 2023,
    price: "€22,000",
    description:
      "A sporty and stylish sedan with advanced safety features and great performance.",
  },
  {
    id: 3,
    images: [Img3, Img3, Img3],
    brand: "Ford",
    model: "Mustang",
    year: 2021,
    price: "€35,000",
    description:
      "An iconic sports car offering thrilling performance and head-turning design.",
    aosDelay: "500",
  },
  {
    id: 4,
    images: [Img4, Img4, Img4],
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    price: "€40,000",
    description:
      "An electric car that combines efficiency, innovation, and state-of-the-art technology.",
    aosDelay: "100",
  },
  {
    id: 5,
    images: [Img5, Img5, Img5],
    brand: "Chevrolet",
    model: "Camaro",
    year: 2020,
    price: "€30,000",
    description:
      "A high-performance sports car with a muscular design and powerful engine options.",
    aosDelay: "300",
  },
  {
    id: 6,
    images: [Img6, Img6, Img6],
    brand: "BMW",
    model: "3 Series",
    year: 2022,
    price: "€45,000",
    description:
      "A luxury sedan offering a perfect blend of comfort, technology, and performance.",
    aosDelay: "500",
  },
];

const Arrival = () => {
  const [currentImages, setCurrentImages] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageChange = (serviceId, direction) => {
    setCurrentImages(prev => {
      const current = prev[serviceId] || 0;
      const totalImages = ServicesData.find(s => s.id === serviceId).images.length;
      let newIndex;
      if (direction === 'next') {
        newIndex = (current + 1) % totalImages;
      } else {
        newIndex = current === 0 ? totalImages - 1 : current - 1;
      }
      return { ...prev, [serviceId]: newIndex };
    });
  };

  const handlePurchaseClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      <div className="mt-10 py-10 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block relative">
              <h1 className="text-6xl font-bold text-gray-800 mb-4 relative z-10 tracking-tight">Latest Collection</h1>
              <div className="absolute -bottom-3 left-0 w-full h-3 bg-yellow-200 transform -skew-x-6 -z-0 opacity-50"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-8 leading-relaxed">Discover our exclusive selection of premium vehicles, each crafted for exceptional performance and luxury.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {ServicesData.map((service) => (
              <div key={service.id}
                className="bg-white rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:shadow-2xl"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative h-[400px] w-full">
                  <div className="absolute inset-0 w-full h-full">
                    {service.images.map((image, index) => (
                      <div key={index} className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out ${ (currentImages[service.id] || 0) === index ? 'opacity-100' : 'opacity-0' }`}>
                        <img src={image} alt={`${service.brand} - ${index + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className={`absolute inset-0 flex items-center justify-between px-4 transition-opacity duration-300 ${ hoveredCard === service.id ? 'opacity-100' : 'opacity-0' }`}>
                    <button onClick={(e) => { e.preventDefault(); handleImageChange(service.id, 'prev'); }} className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-300">
                      <ArrowLeft className="w-6 h-6 text-gray-800" />
                    </button>
                    <button onClick={(e) => { e.preventDefault(); handleImageChange(service.id, 'next'); }} className="bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition-colors duration-300">
                      <ArrowRight className="w-6 h-6 text-gray-800" />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {service.images.map((_, index) => (
                      <div key={index} className={`w-2 h-2 rounded-full transition-colors duration-300 ${ (currentImages[service.id] || 0) === index ? 'bg-white' : 'bg-white/50' }`} />
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h1 className="text-3xl font-bold text-gray-800 mb-2">{service.brand} {service.model}</h1>
                      <div className="flex gap-4 text-gray-600">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" /> {service.year}
                        </span>
                        <span className="flex items-center gap-1">
                          <Euro className="w-4 h-4" /> {service.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 mb-6">
                    <Info className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  <div className="flex gap-4">
                      <button 
                        onClick={handlePurchaseClick} 
                        className="flex-1 bg-black text-white py-3 px-6 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                      >
                        Purchase Now
                      </button>
                      <a 
                        href="https://www.instagram.com/your-instagram-link" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1"
                      >
                        <button className="w-full px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 transition-all duration-300 hover:border-gray-800 hover:text-gray-900">
                          Learn More
                        </button>
                      </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="relative h-24 bg-gradient-to-b from-gray-50 to-transparent">
        <div className="absolute inset-x-0 bottom-0">
          <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,120 350,0 500,60 C650,120 850,0 1200,80 L1200,120 L0,120 Z" className="fill-white/10" />
            <path d="M0,0 C150,100 400,10 550,70 C700,120 850,10 1200,90 L1200,120 L0,120 Z" className="fill-white/5" />
          </svg>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="mb-4">Please contact us via the following options:</p>
            <div className="flex flex-col gap-4">
              <a href="tel:+35796471717" className="w-full">
                <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                  Call +35796471717
                </button>
              </a>
              <a href="tel:+35796005009" className="w-full">
                <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                  Call +35796005009
                </button>
              </a>
              <a href="mailto:client@example.com" className="w-full">
                <button className="w-full bg-black text-white py-3 px-6 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
                  Email Us
                </button>
              </a>
            </div>
            <button onClick={closeModal} className="mt-6 w-full bg-gray-300 text-gray-800 py-3 px-6 rounded-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Arrival;