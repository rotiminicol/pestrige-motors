import { useState } from "react";
import PropTypes from "prop-types";
import WelcomePopup from "./WelcomePopup"; // Import the WelcomePopup

const AuthPopup = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [countryCode, setCountryCode] = useState("+234");
  const [showWelcomePopup, setShowWelcomePopup] = useState(false); // State to control WelcomePopup

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // After registration, switch to login tab with pre-filled credentials
    setIsLogin(true);
    // Don't show welcome popup yet - it will show after login
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Show welcome popup after login
    setShowWelcomePopup(true);
  };
  
  const handleWelcomeClose = () => {
    setShowWelcomePopup(false);
    onClose(); // Close the entire auth flow
  };

  // Simple condition: if welcome popup should be shown, render it
  if (showWelcomePopup) {
    return <WelcomePopup userName={fullName} onClose={handleWelcomeClose} />;
  }

  // Otherwise show the auth popup
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>

        <div className="flex justify-center mb-4">
          <button
            onClick={() => setIsLogin(true)}
            className={`px-4 py-2 text-lg font-semibold ${
              isLogin ? "text-pink-500 border-b-2 border-pink-500" : "text-gray-500"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`px-4 py-2 text-lg font-semibold ${
              !isLogin ? "text-pink-500 border-b-2 border-pink-500" : "text-gray-500"
            }`}
          >
            Register
          </button>
        </div>

        {isLogin ? (
          <form className="space-y-4" onSubmit={handleLoginSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <button type="submit" className="w-full bg-pink-500 text-white py-3 rounded-lg">
              Login
            </button>
          </form>
        ) : (
          <form className="space-y-4" onSubmit={handleRegisterSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <div className="flex mt-1">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="border border-gray-300 rounded-l-lg px-3 py-2 bg-gray-100"
                >
                  <option value="+1">+1 (US)</option>
                  <option value="+44">+44 (UK)</option>
                  <option value="+91">+91 (IN)</option>
                  <option value="+234">+234 (NG)</option>
                </select>
                <input type="tel" className="block w-full px-3 py-2 border border-gray-300 rounded-r-lg" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>

            <button type="submit" className="w-full bg-pink-500 text-white py-3 rounded-lg">
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

AuthPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AuthPopup;