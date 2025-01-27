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
import Img13 from "../../assets/img13.png";
import Img14 from "../../assets/img14.png";
import Img15 from "../../assets/img15.png";




const ServicesData = [
  {
    id: 1,
    img: Img1,
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    price: "$20,000",
    description:
      "A reliable and fuel-efficient compact sedan with modern features.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    brand: "Honda",
    model: "Civic",
    year: 2023,
    price: "$22,000",
    description:
      "A sporty and stylish sedan with advanced safety features and great performance.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img3,
    brand: "Ford",
    model: "Mustang",
    year: 2021,
    price: "$35,000",
    description:
      "An iconic sports car offering thrilling performance and head-turning design.",
    aosDelay: "500",
  },
  {
    id: 4,
    img: Img4,
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    price: "$40,000",
    description:
      "An electric car that combines efficiency, innovation, and state-of-the-art technology.",
    aosDelay: "100",
  },
  {
    id: 5,
    img: Img5,
    brand: "Chevrolet",
    model: "Camaro",
    year: 2020,
    price: "$30,000",
    description:
      "A high-performance sports car with a muscular design and powerful engine options.",
    aosDelay: "300",
  },
  {
    id: 6,
    img: Img6,
    brand: "BMW",
    model: "3 Series",
    year: 2022,
    price: "$45,000",
    description:
      "A luxury sedan offering a perfect blend of comfort, technology, and performance.",
    aosDelay: "500",
  },
  {
    id: 7,
    img: Img7,
    brand: "Mercedes-Benz",
    model: "C-Class",
    year: 2023,
    price: "$50,000",
    description:
      "A premium sedan with a stylish design, luxurious interiors, and advanced features.",
    aosDelay: "100",
  },
  {
    id: 8,
    img: Img8,
    brand: "Audi",
    model: "A4",
    year: 2022,
    price: "$43,000",
    description:
      "A sophisticated and elegant luxury sedan with cutting-edge technology.",
    aosDelay: "300",
  },
  {
    id: 9,
    img: Img9,
    brand: "Jeep",
    model: "Wrangler",
    year: 2021,
    price: "$35,000",
    description:
      "A rugged SUV built for off-road adventures and unmatched durability.",
    aosDelay: "500",
  },
  {
    id: 10,
    img: Img10,
    brand: "Hyundai",
    model: "Elantra",
    year: 2023,
    price: "$20,000",
    description:
      "A compact sedan that combines affordability with advanced features and a sleek design.",
    aosDelay: "100",
  },
  {
    id: 11,
    img: Img11,
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    price: "$20,000",
    description:
      "A reliable and fuel-efficient compact sedan with modern features.",
    aosDelay: "100",
  },
  {
    id: 12,
    img: Img12,
    brand: "Honda",
    model: "Civic",
    year: 2023,
    price: "$22,000",
    description:
      "A sporty and stylish sedan with advanced safety features and great performance.",
    aosDelay: "300",
  },
  {
    id: 13,
    img: Img13,
    brand: "Ford",
    model: "Mustang",
    year: 2021,
    price: "$35,000",
    description:
      "An iconic sports car offering thrilling performance and head-turning design.",
    aosDelay: "500",
  },
  {
    id: 14,
    img: Img14,
    brand: "Tesla",
    model: "Model 3",
    year: 2023,
    price: "$40,000",
    description:
      "An electric car that combines efficiency, innovation, and state-of-the-art technology.",
    aosDelay: "100",
  },
  {
    id: 15,
    img: Img15,
    brand: "Chevrolet",
    model: "Camaro",
    year: 2020,
    price: "$30,000",
    description:
      "A high-performance sports car with a muscular design and powerful engine options.",
    aosDelay: "300",
  },
];







const Arrival = () => {
  return (
    <>
      <span id="services"></span>
      <div className="mt-10 py-10">
        <div className="container mx-auto px-6 lg:px-20">
          {/* Heading section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl font-bold font-cursive text-gray-800">
              Newest Arrival 
            </h1>
            <p className="text-lg text-gray-600 mt-4">
              Explore our handpicked selection of cars that define luxury and performance.
            </p>
          </div>

          {/* Services Card section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 place-items-center">
            {ServicesData.map((service) => (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-xl bg-white hover:bg-gray-800 hover:text-white shadow-lg transform hover:-translate-y-2 duration-300 group w-full max-w-[400px] overflow-hidden"
              >
                {/* Image Section */}
                <div className="relative h-[200px] lg:h-[250px] overflow-hidden bg-gray-100">
                  <img
                    src={service.img}
                    alt={service.model}
                    className="w-full h-full object-cover transform group-hover:scale-105 duration-300"
                  />
                </div>

                {/* Description Section */}
                <div className="p-6 text-center">
                  <h1 className="text-2xl font-bold mb-2">{`${service.brand} ${service.model}`}</h1>
                  <p className="text-gray-600 group-hover:text-gray-200 text-sm mb-3">
                    Year: <span className="font-medium">{service.year}</span>
                  </p>
                  <p className="text-gray-600 group-hover:text-gray-200 text-sm mb-3">
                    Price: <span className="font-medium">{service.price}</span>
                  </p>
                  <p className="text-gray-500 group-hover:text-gray-300 text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Call to Action */}
                <div className="bg-gray-800 text-white p-4 mt-2 text-center">
                  <button className="bg-primary hover:bg-secondary text-white py-2 px-5 rounded-lg font-medium shadow-md transform hover:scale-105 duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Arrival;




