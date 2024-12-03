import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import CookieBanner from "./CookieBanner";
import NavigationMenu from "./NavigationMenu";
import { ReactTyped } from "react-typed";
import { FaSun, FaMoon, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa"; // Importing icons from react-icons
import profile from "../assets/images/img.png";

function App() {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    // Simulate data fetching or page initialization
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  // State to track the theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle the theme between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Persist theme preference in localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    // Save theme preference to localStorage
    if (isDarkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="font-sans">
      <NavigationMenu />
      <CookieBanner />
      {loading ? (
        <Spinner />
      ) : (
        <div
          className={`transition-all duration-500 ${
            isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
          }`}
        >
          {/* Hero Section */}
          <section
            className={`${
              isDarkMode
                ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black"
                : "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400"
            } py-40 transition-all duration-500`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col-reverse md:flex-row items-center justify-between md:gap-12 space-y-8 md:space-y-0">
                {/* Left Column - Text */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h1
                    className={`${
                      isDarkMode ? "text-white" : "text-gray-900"
                    } text-lg sm:text-1xl md:text-2xl font-extrabold mb-6 font-DancingScript`}
                  >
                    hello,
                  </h1>
                  <h1
                    className={`${
                      isDarkMode ? "text-white" : "text-gray-900"
                    } text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6`}
                  >
                    I'm Raymart Santos
                  </h1>
                  <p
                    className={`${
                      isDarkMode ? "text-white" : "text-gray-900"
                    } text-xl sm:text-2xl md:text-3xl mb-6`}
                  >
                    {" "}
                    <ReactTyped
                      strings={["Web Developer", "Frontend Developer"]}
                      typeSpeed={60}
                      backSpeed={40}
                      backDelay={1000}
                      loop
                      className={`${
                        isDarkMode ? "text-yellow-500" : "text-blue-700"
                      } font-semibold`}
                    />
                  </p>

                  {/* About Section */}
                  <p
                    className={`${
                      isDarkMode ? "text-white" : "text-gray-900"
                    } text-lg sm:text-xl md:text-lg mb-6`}
                  >
                    I’m passionate about building efficient, user-friendly
                    websites with clean, maintainable code that helps businesses
                    succeed online.
                  </p>

                  {/* Social Icons */}
                  <div className="flex justify-center md:justify-start space-x-6 mb-6">
                    <a
                      href="https://www.linkedin.com/in/your-linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl hover:text-blue-400 transition-colors"
                    >
                      <FaLinkedin
                        className={`${
                          isDarkMode ? "fill-white" : "fill-gray-800"
                        } hover:fill-gray-700`}
                      />
                    </a>
                    <a
                      href="https://github.com/your-github"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl hover:text-gray-700 transition-colors"
                    >
                      <FaGithub
                        className={`${
                          isDarkMode ? "fill-white" : "fill-gray-800"
                        } hover:fill-gray-700`}
                      />
                    </a>
                    <a
                      href="https://twitter.com/your-twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl hover:text-blue-300 transition-colors"
                    >
                      <FaTwitter
                        className={`${
                          isDarkMode ? "fill-white" : "fill-gray-800"
                        } hover:fill-gray-700`}
                      />
                    </a>
                  </div>

                  <a
                    href="#contact"
                    className={`inline-block py-3 px-6 text-lg rounded-full shadow-lg transform transition-all hover:scale-105 ${
                      isDarkMode
                        ? "bg-yellow-500 text-white hover:bg-yellow-400"
                        : "bg-blue-500 text-white hover:bg-blue-400"
                    }`}
                  >
                    Hire Me!
                  </a>
                </div>

                {/* Right Column - Image */}
                <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-cover bg-center rounded-full overflow-hidden shadow-xl">
                  <img
                    src="https://via.placeholder.com/300"
                    alt="Raymart Santos"
                    className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Other sections */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2
                className={`${
                  isDarkMode ? "text-white" : "text-gray-900"
                } text-3xl text-center`}
              >
                About Me
              </h2>
              <p
                className={`${
                  isDarkMode ? "text-gray-400" : "text-gray-800"
                } text-lg text-center mt-4`}
              >
                I'm passionate about creating beautiful and functional web
                experiences. With a focus on frontend development, I aim to
                bring creativity and technology together.
              </p>
            </div>
          </section>

          <footer
            className={`py-6 ${isDarkMode ? "bg-gray-800" : "bg-gray-100"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
              <p>&copy; 2024 Raymart Santos. All rights reserved.</p>
            </div>
          </footer>

          {/* Theme Toggle Button (Icon) */}
          <div className="fixed bottom-6 right-6">
            <button
              onClick={toggleTheme}
              className="bg-yellow-500 text-black p-3 rounded-full shadow-lg transform transition-all hover:scale-105"
            >
              {isDarkMode ? (
                <FaSun className="text-2xl text-yellow-400" />
              ) : (
                <FaMoon className="text-2xl text-gray-900" />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
