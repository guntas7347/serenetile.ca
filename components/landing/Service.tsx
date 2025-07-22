import { Home, Layers, Package, Star, Thermometer } from "lucide-react";
import React from "react";

const Service = () => {
  return (
    <section id="services" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Expert Services
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive tile, marble, and stone solutions for residential and
            commercial projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Cards */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Layers className="h-8 w-8 text-blue-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Pedestal Decks
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Professional installation of elevated pedestal deck systems for
              outdoor spaces, providing excellent drainage and accessibility.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="bg-stone-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Home className="h-8 w-8 text-stone-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Bathroom Tile & Stone
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Complete bathroom renovations featuring premium tile and natural
              stone installations with expert waterproofing and finishing.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Package className="h-8 w-8 text-gray-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Porcelain Panels
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Large format porcelain panel installation for walls and surfaces,
              creating seamless, modern finishes for contemporary spaces.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="bg-amber-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Star className="h-8 w-8 text-amber-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Custom Stone Work
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Bespoke natural stone installations including countertops, feature
              walls, and architectural elements crafted to your specifications.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="bg-red-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Thermometer className="h-8 w-8 text-red-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Heated Flooring
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Radiant floor heating system installation beneath tile and stone
              surfaces for year-round comfort and luxury.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
              <Package className="h-8 w-8 text-green-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-4">
              Tile Supply & Materials
            </h4>
            <p className="text-gray-600 leading-relaxed">
              Premium tile, stone, and installation materials sourced from
              trusted suppliers. Complete project supply chain management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
