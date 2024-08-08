import { useState } from "react";
// import Header from "./components/Header";
import NewsSection from "./components/NewsSection";
import HeroSection from "./components/Heder/Header";
import AboutSection from "./components/AboutSection";
import Advantage from "./components/Advantage/Advantage";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleIntersect = (isIntersecting) => {
    setIsHovered(isIntersecting);
  };

  return (
    <div style={{ backgroundColor: "#FDF5E6" }}>
      {/* <Header /> */}
      <HeroSection />
      <AboutSection onIntersect={handleIntersect} isHovered={isHovered} />
      <Advantage />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default App;
