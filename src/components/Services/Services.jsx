import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";
import Img3 from "../../assets/img3.png";
import Img4 from "../../assets/img4.png";
import Img5 from "../../assets/img5.png";
import Img6 from "../../assets/img6.png";
import Img7 from "../../assets/img7.png";
import Img8 from "../../assets/img8.png";
import Img9 from "../../assets/img9.png";
import Img10 from "../../assets/img10.png";
import Img11 from "../../assets/img11.png";
import Img12 from "../../assets/img12.png";
import { useState } from 'react';
import { Heart, Share2, Info, Calendar, ArrowRight } from 'lucide-react';

const ServicesData = [
  {
    id: 1,
    img: Img1,
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    price: "€20,000",
    description: "A reliable and fuel-efficient compact sedan with modern features.",
    category: "All",
  },
  {
    id: 2,
    img: Img2,
    brand: "Honda",
    model: "Civic",
    year: 2023,
    price: "€22,000",
    description: "A sporty and stylish sedan with advanced safety features and great performance.",
    category: "Luxury",
  },
  {
    id: 3,
    img: Img3,
    brand: "Ford",
    model: "Mustang",
    year: 2021,
    price: "€35,000",
    description: "An iconic sports car offering thrilling performance and head-turning design.",
    category: "Sports",
  },
  {
    id: 4,
    img: Img4,
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    price: "€40,000",
    description: "An electric car that combines efficiency, innovation, and state-of-the-art technology.",
    category: "Electric",
  },
  {
    id: 5,
    img: Img5,
    brand: "Chevrolet",
    model: "Camaro",
    year: 2020,
    price: "€30,000",
    description: "A high-performance sports car with a muscular design and powerful engine options.",
    category: "Sports",
  },
  {
    id: 6,
    img: Img6,
    brand: "BMW",
    model: "3 Series",
    year: 2022,
    price: "€45,000",
    description: "A luxury sedan offering a perfect blend of comfort, technology, and performance.",
    category: "Luxury",
  },
  {
    id: 7,
    img: Img7,
    brand: "Mercedes-Benz",
    model: "C-Class",
    year: 2023,
    price: "€50,000",
    description: "A premium sedan with a stylish design, luxurious interiors, and advanced features.",
    category: "Luxury",
  },
  {
    id: 8,
    img: Img8,
    brand: "Audi",
    model: "A4",
    year: 2022,
    price: "€43,000",
    description: "A sophisticated and elegant luxury sedan with cutting-edge technology.",
    category: "Luxury",
  },
  {
    id: 9,
    img: Img9,
    brand: "Jeep",
    model: "Wrangler",
    year: 2021,
    price: "€35,000",
    description: "A rugged SUV built for off-road adventures and unmatched durability.",
    category: "SUV",
  },
  {
    id: 10,
    img: Img10,
    brand: "Hyundai",
    model: "Elantra",
    year: 2023,
    price: "€20,000",
    description: "A compact sedan that combines affordability with advanced features and a sleek design.",
    category: "All",
  },
  {
    id: 11,
    img: Img11,
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    price: "€20,000",
    description: "A reliable and fuel-efficient compact sedan with modern features.",
    category: "All",
  },
  {
    id: 12,
    img: Img12,
    brand: "Honda",
    model: "Civic",
    year: 2023,
    price: "€22,000",
    description: "A sporty and stylish sedan with advanced safety features and great performance.",
    category: "Luxury",
  },
];

const Services = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [favorites, setFavorites] = useState(new Set());
  const [selectedFilter, setSelectedFilter] = useState('All');

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };
  const handlePurchaseClick = () => {
    // Add your logic to show a popup or redirect to contact options like call or email.
    alert("Contact us via email: client@example.com or Call: +1234567890");
  };

  const filteredServices = selectedFilter === 'All'
    ? ServicesData
    : ServicesData.filter(service => service.category === selectedFilter);

  return (
    <div className="relative overflow-hidden bg-gray-50">
      <span id="services"></span>
      
      {/* Decorative background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="relative py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Enhanced heading section */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <h1 className="text-5xl font-bold text-gray-800 mb-4 relative">
                Premium Collection
                <div className="absolute -right-8 -top-8 w-16 h-16 bg-yellow-100 rounded-full blur-xl opacity-60"></div>
                <div className="absolute -left-8 -bottom-8 w-16 h-16 bg-blue-100 rounded-full blur-xl opacity-60"></div>
              </h1>
              <div className="h-1 w-40 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto mt-4 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
              Explore our handpicked selection of cars that define luxury and performance.
            </p>
          </div>

          {/* Enhanced filter/sort section */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['All', 'Luxury', 'Sports', 'Electric', 'SUV'].map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 rounded-full border-2 ${selectedFilter === filter ? 'border-gray-800 text-gray-900' : 'border-gray-200 text-gray-600'} 
                  hover:border-gray-800 transition-all duration-300 hover:text-gray-900 hover:shadow-md`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Enhanced card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                  transition-all duration-500 transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image container with overlay */}
                <div className="relative h-[280px] overflow-hidden">
                  <img
                    src={service.img}
                    alt={service.model}
                    className="w-full h-full object-cover transition-transform duration-700 
                      group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Quick action buttons */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(service.id);
                      }}
                      className={`p-2 rounded-full backdrop-blur-md transition-all duration-300 
                        ${favorites.has(service.id) ? 'bg-red-500 text-white' : 'bg-white/80 hover:bg-white'}`}
                    >
                      <Heart className={`w-5 h-5 ${favorites.has(service.id) ? 'fill-current' : ''}`} />
                    </button>
                    <button className="p-2 rounded-full bg-white/80 hover:bg-white backdrop-blur-md 
                      transition-all duration-300">
                      <Share2 className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Price tag */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 
                    rounded-full shadow-lg">
                    <span className="font-bold text-gray-900">{service.price}</span>
                  </div>
                </div>

                {/* Content section */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        {service.brand} {service.model}
                      </h2>
                      <div className="flex gap-4 text-gray-600 text-sm">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {service.year}
                        </span>
                        <span className="flex items-center gap-1">
                          <Info className="w-4 h-4" />
                          {service.brand}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-6">
                    {service.description}
                  </p>

                  {/* Action buttons */}
                  <div className="flex gap-4">
                    <button 
                      onClick={handlePurchaseClick}
                      className="flex-1 bg-black text-white py-3 px-6 rounded-lg font-medium 
                      transform transition-all duration-300 hover:scale-105 hover:shadow-lg
                      active:scale-95 group">
                      <span className="flex items-center justify-center gap-2">
                        Purchase Now
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </span>
                    </button>
                  </div>
                </div>

                {/* Hover reveal specs */}
                <div className={`absolute inset-0 bg-black/90 text-white p-6 transform transition-all duration-500 
                  ${hoveredId === service.id ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                  <h3 className="text-xl font-bold mb-4">Vehicle Specifications</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <span className="w-24 text-gray-400">Engine:</span>
                      <span>2.0L Turbo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-24 text-gray-400">Power:</span>
                      <span>255 HP</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-24 text-gray-400">0-60 mph:</span>
                      <span>5.6s</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-24 text-gray-400">MPG:</span>
                      <span>26 city / 36 hwy</span>
                    </li>
                  </ul>

                  <button 
                  onClick={handlePurchaseClick}
                  className="mt-6 w-full bg-white text-black py-3 rounded-lg font-medium
                    transform transition-all duration-300 hover:scale-105">
                    Purchase Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;