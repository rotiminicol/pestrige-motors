import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "John Doe",
    text: "I had an amazing experience with the car rental service. The vehicle was in perfect condition and the customer service was excellent.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Jane Smith",
    text: "The best car rental service I've used. Fast, reliable, and very affordable. Highly recommended!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Michael Johnson",
    text: "The car service was top-notch. The driver was punctual and the ride was very comfortable.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Emily Davis",
    text: "Renting a car was a breeze. The whole process was smooth and hassle-free. Will definitely use this service again.",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 6,
    name: "John Doe",
    text: "I had an amazing experience with the car rental service. The vehicle was in perfect condition and the customer service was excellent.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 7,
    name: "Jane Smith",
    text: "The best car rental service I've used. Fast, reliable, and very affordable. Highly recommended!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 8,
    name: "Michael Johnson",
    text: "The car service was top-notch. The driver was punctual and the ride was very comfortable.",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 9,
    name: "Emily Davis",
    text: "Renting a car was a breeze. The whole process was smooth and hassle-free. Will definitely use this service again.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-20 mt-20 bg-white relative transition-all duration-300
      before:absolute before:inset-0 before:shadow-[0_-15px_30px_-10px_rgba(0,0,0,0.1)]
      hover:before:shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.15)]">
      <div className="container">
        {/* header section */}
        <div className="mb-16">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            Our Customers Love Us
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6 px-3">
                <div
                  className="flex flex-col gap-4 p-6 mx-2 rounded-lg
                    bg-white 
                    shadow-md
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-lg"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20 mx-auto shadow-sm"
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold text-gray-800 font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 opacity-10">
                    <p className="text-7xl font-serif leading-none">,,</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
