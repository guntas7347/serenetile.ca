import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-stone-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Premium Marble & Tile
            <span className="block text-blue-600">Installation Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your space with our expert craftsmanship in marble, tile,
            and stone installation. Serving Surrey and the Lower Mainland with
            professional excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              Get Free Estimate
            </a>
            <a
              href="#contact"
              className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
