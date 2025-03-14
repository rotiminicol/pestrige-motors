import Logo from "../assets/miLogo.png"; // Replace with your logo path

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <img
        src={Logo}
        alt="Loading..."
        className="w-44 h-44 animate-spin border-4 border-pink-500 rounded-full"
      />
    </div>
  );
};

export default Loader;
