import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import ArrowForward from "../assets/images/Icons/arrowforward.svg";
import ArrowBack from "../assets/images/Icons/arrowback.svg";
import LogoType from "../assets/images/AboutSection/logotype.svg";
import SlideOne from "../assets/images/AboutSection/SlideImages/slide1.svg";
import SlideTwo from "../assets/images/AboutSection/SlideImages/slide2.svg";
import SlideThreeGif from "../assets/images/AboutSection/SlideImages/slideTree.gif";

function AboutSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [scrollY, setScrollY] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      text: "Zellular is a decentralized sequencer that enables the developing of high-throughput dapps (100,000+ TPS) implemented in high-level languages such as JS, GO, and Python.",
      image: "./src/assets/images/AboutSection/SlideImages/slide1.svg",
    },
    {
      text: "These dapps can be decentralized as Byzantine Fault Tolerant (BFT) services replicated & hosted on Eigenlayer and other restaking platforms to ensure security.",
      image: "./src/assets/images/AboutSection/SlideImages/slide2.svg",
    },
    {
      text: "Zellular enables the replicas to maintain uniformity of their database state by applying updates in the same sequence.",
      image: "./src/assets/images/AboutSection/SlideImages/slideTree.gif",
    },
  ];

  // useEffect(() => {
  //   slides.forEach((slide) => {
  //     const img = new Image();
  //     img.src = slide.image;
  //   });
  // }, [slides]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeSlide = (newIndex) => {
    setSlideIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("----");
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const handleNextSlide = () => {
    changeSlide((slideIndex + 1) % slides.length);
  };

  const handlePreviousSlide = () => {
    changeSlide((slideIndex - 1 + slides.length) % slides.length);
  };

  const logoSize = scrollY >= window.innerHeight * 0.3 ? "30%" : "15%";
  const mobileLogoSize = scrollY >= window.innerHeight * 0.2 ? "25%" : "10%";

  return (
    <Box
      sx={{
        textAlign: "center",
        bgcolor: "#FDF5E6",
        height: "1000px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        boxSizing: "border-box",
      }}
    >
      <Box
        id="about"
        sx={{
          width: isMobile ? mobileLogoSize : logoSize,
          height: isMobile ? mobileLogoSize : logoSize,
          transition: "width 0.8s, height 0.8s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: isMobile ? "35px" : "80px",
          paddingBottom: isMobile ? "35px" : "80px",
          marginLeft: "80px",
        }}
      >
        <img
          src={LogoType}
          alt="Zellular Logotype"
          style={{ width: "100%", height: "100%", minWidth: "200px" }}
        />
      </Box>

      <div
        className={`relative flex select-none
         lt-1024:flex-col-reverse
         border-t border-dashed border-[#003A6C] border-b min-h-[480px] items-center justify-center ${
           isTablet ? "p-5" : "px-20 py-10 items-center justify-center"
         } gap-[30px] box-border w-full`}
        // sx={{
        //   position: "relative",
        //   display: "flex",
        //   flexDirection: isMobile ? "column-reverse" : "row",
        //   borderTop: "3px dashed #003A6C",
        //   borderBottom: "3px dashed #003A6C",
        //   textAlign: "center",
        //   alignItems: "center",
        //   minHeight: "480px",
        //   justifyContent: "center",
        //   padding: isTablet ? "20px" : "40px 80px",
        //   gap: "30px",
        //   boxSizing: "border-box",
        //   width: "100%",
        // }}
      >
        <img
          src={ArrowBack}
          alt="Arrow back icon"
          onClick={handlePreviousSlide}
          style={{
            position: "absolute",
            left: isMobile ? "10px" : isTablet ? "5px" : "40px",
            cursor: slideIndex > 0 ? "pointer" : "default",
            width: 32,
            height: 32,
            opacity: slideIndex > 0 ? 1 : 0.5,
            pointerEvents: slideIndex > 0 ? "auto" : "none",
            zIndex: 1000,
          }}
        />

        <div
          className={`${
            isMobile
              ? "w-full items-center mr-0 justify-center text-center flex "
              : "w-[60%]  flex-end mr-[80px] "
          } flex justify-center`}
          // sx={{
          //   width: isMobile ? "100%" : "60%",
          //   display: "flex",
          //   alignItems: "center",
          //   justifyContent: isMobile ? "center" : "flex-end",
          //   height: "100%",
          //   marginRight: isMobile ? "0" : "80px",
          // }}
        >
          <span
            className={`font-courierPrime font-bold  text-left ${
              isTablet ? "text-[20px]" : isMobile ? "text-base" : "text-[32px]"
            } text-[#003A6C] `}
            variant="body1"
            sx={{
              fontFamily: "Courier Prime Bold",
              fontSize: isTablet ? "20px" : isMobile ? "16px" : "32px",
              color: "#003A6C",
              textAlign: "left",
              lineHeight: 1.5,
              // transition: "opacity 0.5s ease-in-out",
            }}
          >
            {slides[slideIndex].text}
          </span>
        </div>

        <Box
          sx={{
            width: isMobile ? "100%" : "20%",
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "flex-start",
            height: "100%",
            minWidth: "200px",
          }}
        >
          <img
            src={slides[slideIndex].image}
            alt={`Slide ${slideIndex + 1}`}
            loading="lazy"
            style={{
              width: "100%",
              maxHeight: "100%",
              // transition: "opacity 0.5s ease-in-out",
              opacity: 1,
            }}
            key={slideIndex}
          />
        </Box>

        <img
          src={ArrowForward}
          alt="Arrow forward icon"
          onClick={handleNextSlide}
          style={{
            position: "absolute",
            right: isMobile ? "10px" : isTablet ? "5px" : "40px",
            cursor: slideIndex < slides.length - 1 ? "pointer" : "default",
            width: 32,
            height: 32,
            opacity: slideIndex < slides.length - 1 ? 1 : 0.5,
            pointerEvents: slideIndex < slides.length - 1 ? "auto" : "none",
            zIndex: 1000,
          }}
        />
      </div>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "80px",
          transition: "transform 1s ease-in-out",
          flex: 1,
          margin: "20px",
        }}
      >
        <Button
          aria-label="Build on Zellular"
          variant="contained"
          sx={{
            bgcolor: "#92E6A7",
            fontSize: isMobile ? "16px" : "24px",
            color: "#003A6C",
            borderRadius: "70px",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            fontFamily: "Courier Prime Bold",
            padding: isMobile ? "10px 20px" : "15px 30px",
            "&:hover": {
              bgcolor: "#FDF5E6",
              color: "#003A6C",
              border: "2px solid #003A6C",
              boxShadow: "none",
            },
          }}
        >
          Build on Zellular
        </Button>
      </Box>
    </Box>
  );
}

export default AboutSection;
