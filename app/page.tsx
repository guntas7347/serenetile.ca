import React from "react";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import About from "@/components/landing/About";
import Service from "@/components/landing/Service";
import Hero from "@/components/landing/Hero";
import Contact from "@/components/landing/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Service />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
