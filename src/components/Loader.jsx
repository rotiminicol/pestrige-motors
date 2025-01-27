import Logo from "../assets/logo.png"; // Replace with your logo path

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <img src={Logo} alt="Loading..." className="w-24 h-24 animate-spin" />
    </div>
  );
};

export default Loader;
