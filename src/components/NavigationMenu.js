import React, { useState } from "react";

function NavigationMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">emrtsnts</h1>
          </div>
          {/* <div className="hidden md:flex space-x-6">
            <a href="#home" className="relative group">
              Home
              <span
                className="absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-full"
                style={{ height: "2px", backgroundColor: "white" }}
              ></span>
            </a>
            <a href="#about" className="relative group">
              About
              <span
                className="absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-full"
                style={{ height: "2px", backgroundColor: "white" }}
              ></span>
            </a>
            <a href="#services" className="relative group">
              Services
              <span
                className="absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-full"
                style={{ height: "2px", backgroundColor: "white" }}
              ></span>
            </a>
            <a href="#contact" className="relative group">
              Contact
              <span
                className="absolute left-0 bottom-0 w-0 transition-all duration-300 group-hover:w-full"
                style={{ height: "2px", backgroundColor: "white" }}
              ></span>
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-800"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div> */}
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-black">
          <a href="#home" className="block px-4 py-2 hover:bg-gray-800">
            Home
          </a>
          <a href="#about" className="block px-4 py-2 hover:bg-gray-800">
            About
          </a>
          <a href="#services" className="block px-4 py-2 hover:bg-gray-800">
            Services
          </a>
          <a href="#contact" className="block px-4 py-2 hover:bg-gray-800">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}

export default NavigationMenu;
