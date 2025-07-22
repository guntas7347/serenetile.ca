import { Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Image
              src="/serene-logo.png"
              alt="serene-logo"
              height={40}
              width={40}
            />
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Serene Marble & Tile
              </h1>
              <p className="text-sm text-gray-600">Surrey, BC</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#services"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <Phone className="h-5 w-5 text-blue-600" />
            <span className="text-gray-900 font-medium">+1 (604) 426-862</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
