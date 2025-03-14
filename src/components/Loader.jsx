import Logo from "../assets/miLogo.png"; // Replace with your logo path

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50">
      <div className="relative flex flex-col items-center justify-center">
        {/* Gradient Background Layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 opacity-30 blur-3xl animate-gradient-shift"></div>

        {/* Logo with Gradient Border and Pulse Animation */}
        <div className="relative w-44 h-44 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-4 border-transparent animate-spin-slow bg-gradient-to-r from-pink-500 to-purple-600"></div>
          <img
            src={Logo}
            alt="Loading..."
            className="w-32 h-32 animate-pulse"
          />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-50 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Loading Text with Typing Animation */}
        <p className="mt-6 text-lg font-medium text-white animate-typing overflow-hidden whitespace-nowrap border-r-2 border-white">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loader;