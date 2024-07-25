import React, { useState } from "react";
import Header from "./components/Header";
import NewsSection from "./components/NewsSection";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Advantage from "./components/Advantage";
import Footer from "./components/Footer";

const App = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleIntersect = (isIntersecting) => {
    setIsHovered(isIntersecting);
  };

  return (
    <div style={{ backgroundColor: "#FDF5E6" }}>
      <Header />
      <HeroSection />
      <AboutSection onIntersect={handleIntersect} isHovered={isHovered} />
      <Advantage />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default App;
