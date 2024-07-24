import React from "react";
import Header from "./components/Header";
import NewsSection from "./components/NewsSection";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Advantage from "./components/Advantage";
import Footer from "./components/Footer";

const App = () => (
  <div style={{ backgroundColor: "#FDF5E6" }}>
    <Header />
    <HeroSection />
    <AboutSection />
    <Advantage />
    <NewsSection />
    <Footer />
  </div>
);

export default App;
