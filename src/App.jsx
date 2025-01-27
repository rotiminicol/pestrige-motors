import  { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx";
 // Import the Loader component
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "./components/Loader.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Arrival from "./components/Arrival/Arrival.jsx";
import Polish from "./components/Polish/Polish.jsx";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();

    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time as needed
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
      {loading && <Loader/>}
      <Navbar />
      <Hero />
      <Arrival />
      <Banner />
      <Services />
      <Polish />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
