import { FaFacebookF, FaInstagram } from 'react-icons/fa';

const socialLinks = [
  {
    href: 'https://www.facebook.com/prestige_motors.cy/',
    icon: <FaFacebookF className="text-black" size={24} />,
    alt: 'Facebook',
    color: 'bg-gradient-to-r from-blue-500 to-blue-700'
  },
  {
    href: 'https://www.instagram.com/prestige_motors.cy/',
    icon: <FaInstagram className="text-white" size={25} />,
    alt: 'Instagram',
    color: 'bg-gradient-to-tr from-purple-600 via-pink-600 to-yellow-500'
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-start">
        <div 
          className="mb-12 lg:mb-0 lg:sticky lg:top-8 animate-fadeInUp"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6 lg:max-w-[12ch]">
            Let&apos;s Create Something Amazing Together
          </h2>

          <p className="text-lg text-gray-600 mb-8 lg:max-w-[35ch]">
            Ready to bring your vision to life? Reach out today and let&apos;s discuss how we can make your project extraordinary.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map(({ href, icon, color }, key) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`w-12 h-12 grid place-items-center rounded-lg ${color} shadow-lg transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 active:scale-95`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <form
          action="https://getform.io/f/byvvzopa"
          method="POST"
          className="bg-white rounded-2xl shadow-xl p-8 animate-fadeInRight"
        >
          <div className="md:grid md:grid-cols-2 md:gap-6">
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              placeholder="Tell me about your project..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-y min-h-32 max-h-80"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-blue-800"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;