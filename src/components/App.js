import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";
import CookieBanner from "./CookieBanner";
import NavigationMenu from "./NavigationMenu";
import { ReactTyped } from "react-typed";
import {
  FaSun,
  FaMoon,
  FaPhone,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa"; // Dark mode icons
import profile1 from "../assets/images/img1.png"; // Image for slide 1
import profile2 from "../assets/images/contact-demo.jpg"; // Demo image for slide 2
import profile3 from "../assets/images/projects-demo.jpg"; // Demo image for slide 3

function App() {
  const [loading, setLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(false);

  // Content for each slide
  const heroContents = [
    {
      title: "I'm Raymart Santos",
      subtitle: "Web Developer",
      description:
        "I build clean and efficient websites that help businesses succeed online. With a strong foundation in both front-end and back-end development, I work tirelessly to create solutions that are not only functional but also user-friendly and aesthetically pleasing. Whether it's a simple landing page or a complex web application, I'm passionate about delivering high-quality web experiences.",
      image: profile1, // Image for slide 1
      hireLink: "#", // Link for hire me button
    },
    {
      title: "Contact Me",
      subtitle: "Let's Connect",
      description:
        "Feel free to reach out to me for any inquiries or projects. I am always open to new opportunities and collaborations.",
      image: null, // No image for slide 2
      contactInfo: {
        email: "raymart@example.com",
        phone: "+123 456 7890",
      },
      socialMedia: {
        linkedin: "https://www.linkedin.com/in/raymart-santos/",
        github: "https://github.com/raymart-santos",
        twitter: "https://twitter.com/raymart_santos",
      },
    },
    {
      title: "My Previous Web Projects",
      subtitle: "Showcasing My Work",
      description:
        "Throughout my career, I have worked on a variety of web development projects. From e-commerce platforms to portfolio websites, each project has helped me grow as a developer and allowed me to refine my skills. Below are a few examples of my previous projects, which demonstrate my versatility and attention to detail.",
      image: profile3, // Demo image for slide 3
      projects: [
        {
          name: "E-Commerce Website",
          description:
            "An online store with features like product categories, a shopping cart, and secure checkout. Built with React, Node.js, and MongoDB.",
          link: "#",
          tabs: [
            {
              title: "Overview",
              content:
                "This is an e-commerce platform that provides a seamless shopping experience with product filtering, search functionality, and secure payments.",
            },
            {
              title: "Tech Stack",
              content:
                "React for the front-end, Node.js for the back-end, and MongoDB for the database.",
            },
            {
              title: "Features",
              content:
                "User authentication, product reviews, payment gateway integration, and order management.",
            },
          ],
        },
        // More projects...
      ],
    },
  ];

  // Toggle dark mode
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  // Fade-in effect for slides
  const changeSlide = (index) => {
    setFade(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setFade(false);
    }, 500); // Match this time with CSS fade duration
  };

  // Handle theme persistence with localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setIsDarkMode(storedTheme === "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // Simulate loading process
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`font-sans ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      {loading ? (
        <Spinner />
      ) : (
        <>
          <NavigationMenu />
          {/* Hero Section */}
          <section
            className={`${
              isDarkMode
                ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black"
                : "bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400"
            } py-40 transition-none h-screen flex items-center relative`} // Remove transition duration here
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col-reverse md:flex-row items-center justify-between md:gap-12 space-y-8 md:space-y-0">
                {/* Left Column */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <div
                    className={`${
                      fade ? "opacity-0" : "opacity-100"
                    } transition-opacity duration-500`}
                  >
                    {/* Title and Subtitle */}
                    <h1
                      className={`${
                        isDarkMode ? "text-yellow-500" : "text-blue-700"
                      } text-lg sm:text-1xl md:text-2xl font-extrabold font-cursive`}
                    >
                      {currentSlide === 0 ? "hello," : ""}
                    </h1>
                    <h1
                      className={`${
                        isDarkMode ? "text-white" : "text-gray-900"
                      } text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4`}
                    >
                      {heroContents[currentSlide].title}
                    </h1>
                    <p
                      className={`${
                        isDarkMode ? "text-yellow-500" : "text-blue-500"
                      } text-xl sm:text-2xl md:text-3xl mb-4`}
                    >
                      <ReactTyped
                        strings={[heroContents[currentSlide].subtitle]}
                        typeSpeed={60}
                        backSpeed={40}
                        backDelay={1000}
                        loop
                        className="font-semibold"
                      />
                    </p>
                    <p
                      className={`${
                        isDarkMode ? "text-white" : "text-gray-900"
                      } mb-8 text-base sm:text-lg md:text-xl`}
                    >
                      {heroContents[currentSlide].description}
                    </p>
                    {currentSlide === 0 && (
                      <div>
                        <a
                          href={heroContents[0].hireLink}
                          className={` ${
                            isDarkMode ? "bg-yellow-500" : "bg-blue-500"
                          } inline-block py-2 px-6 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors`}
                        >
                          Hire Me
                        </a>
                      </div>
                    )}

                    {/* Contact Information with Icons for Slide 2 */}
                    {currentSlide === 1 && (
                      <div className="mt-8 space-y-4 text-left">
                        <div className="flex items-center space-x-4">
                          <FaEnvelope
                            className={`${
                              isDarkMode ? "text-yellow-500" : "text-blue-700"
                            } text-lg`}
                          />
                          <a
                            href={`mailto:${heroContents[1].contactInfo.email}`}
                            className={`${
                              isDarkMode ? "text-yellow-500" : "text-blue-700"
                            } text-lg`}
                          >
                            {heroContents[1].contactInfo.email}
                          </a>
                        </div>
                        <div className="flex items-center space-x-4">
                          <FaPhone
                            className={`${
                              isDarkMode ? "text-yellow-500" : "text-blue-700"
                            } text-lg`}
                          />
                          <a
                            href={`tel:${heroContents[1].contactInfo.phone}`}
                            className={`${
                              isDarkMode ? "text-yellow-500" : "text-blue-700"
                            } text-lg`}
                          >
                            {heroContents[1].contactInfo.phone}
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Social Media Icons for Slide 2 */}
                    {currentSlide === 1 && (
                      <div className="mt-6 flex flex-row space-x-6">
                        <a
                          href={heroContents[1].socialMedia.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${
                            isDarkMode ? "text-white" : "text-gray-900"
                          } text-lg`}
                        >
                          <FaLinkedin />
                        </a>
                        <a
                          href={heroContents[1].socialMedia.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${
                            isDarkMode ? "text-white" : "text-gray-900"
                          } text-lg`}
                        >
                          <FaGithub />
                        </a>
                        <a
                          href={heroContents[1].socialMedia.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${
                            isDarkMode ? "text-white" : "text-gray-900"
                          } text-lg`}
                        >
                          <FaTwitter />
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Column (Image) */}
                <div className="w-full md:w-1/2 text-center md:text-right">
                  <div
                    className={`${
                      fade ? "opacity-0" : "opacity-100"
                    } transition-opacity duration-500`}
                  >
                    {/* Render image only for slide 1 and 3 */}
                    {currentSlide !== 1 && (
                      <img
                        src={heroContents[currentSlide].image}
                        alt="Profile"
                        className="w-full md:w-3/4 lg:w-2/3 mx-auto rounded-lg shadow-lg"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pagination */}
          <div className="absolute bottom-4 w-full flex justify-center">
            <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4">
              {heroContents.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    currentSlide === index
                      ? isDarkMode
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                      : "bg-gray-400 hover:bg-gray-500"
                  } transition-colors`}
                  onClick={() => changeSlide(index)}
                />
              ))}
            </div>
          </div>

          {/* Dark Mode Toggle Button */}
          <div
            className="fixed bottom-4 right-4 p-3 bg-gray-800 text-white rounded-full cursor-pointer transition-none transform hover:scale-110"
            onClick={toggleTheme}
          >
            {isDarkMode ? (
              <FaSun className="text-2xl" />
            ) : (
              <FaMoon className="text-2xl" />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
