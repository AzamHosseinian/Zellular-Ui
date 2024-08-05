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
  const [moveRowUp, setMoveRowUp] = useState(false);

  const slides = [
    {
      text:
        "Zellular is a decentralized sequencer that enables developing high-throughput dapps (100,000+ TPS) implemented in high-level languages such as JS, GO, and Python and hosted on Eigenlayer and other restaking platforms to ensure security.",
      image: SlideOne,
    },
    {
      text:
        "Without requiring a blockchain, these dapps can be decentralized as Byzantine Fault Tolerant (BFT) services replicated on a number of nodes.",
      image: SlideTwo,
    },
    {
      text:
        "Zellular enables the replicas to maintain uniformity of state by applying updates in the same sequence.",
      image: SlideThreeGif,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (
        window.scrollY >
        0.5 * document.body.scrollHeight - window.innerHeight
      ) {
        setMoveRowUp(true);
      } else {
        setMoveRowUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeSlide = (newIndex) => {
    setSlideIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 10000000);

    return () => clearInterval(interval);
  }, [slideIndex]);

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
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "left",
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
        <Box
          component="img"
          src={LogoType}
          alt="Zellular Logotype"
          sx={{ width: "100%", height: "100%", minWidth: "200px" }}
        />
      </Box>

      <div
        className="flex lg:flex-row flex-col-reverse px-[40px] py-[80px] items-center justify-center gap-[30px] border-t-[#003A6C] border-b-[#003A6C] border-2 border-dashed "
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          borderTop: "3px dashed #003A6C",
          borderBottom: "3px dashed #003A6C",
          textAlign: "center",
          alignItems: "center",
          minHeight: "480px",
          justifyContent: "center",
          padding: isTablet ? "20px" : "40px 80px",
          gap: 30,
          // flex: "0 0 480px ",
          boxSizing: "border-box",
        }}
      >
        <Box
          component="img"
          alt="Arrow back icon"
          src={ArrowBack}
          onClick={handlePreviousSlide}
          sx={{
            position: "absolute",
            left: isMobile ? "10px" : "40px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: slideIndex > 0 ? "pointer" : "default",
            width: 24,
            height: 24,
            opacity: slideIndex > 0 ? 1 : 0.5,
            pointerEvents: slideIndex > 0 ? "auto" : "none",
            zIndex: 1000,
          }}
        />
        <Box
          sx={{
            width: isMobile ? "100%" : "60%",
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "flex-end",
            height: "100%",
            marginRight: isMobile ? "0" : "80px",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontFamily: "Courier Prime Bold",
              fontSize: isTablet ? "20px" : "28px",
              color: "#003A6C",
              textAlign: "left",
              lineHeight: 1.5,
            }}
          >
            {slides[slideIndex].text}
          </Typography>
        </Box>
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
            style={{ width: "100%", maxHeight: "100%" }}
          />
        </Box>
        <Box
          component="img"
          alt="Arrow forward icon"
          src={ArrowForward}
          onClick={handleNextSlide}
          sx={{
            position: "absolute",
            right: isMobile ? "10px" : "40px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: slideIndex < slides.length - 1 ? "pointer" : "default",
            width: 24,
            height: 24,
            opacity: slideIndex < slides.length - 1 ? 1 : 0.5,
            pointerEvents: slideIndex < slides.length - 1 ? "auto" : "none",
            zIndex: 1000,
          }}
        />
      </div>

      <Box
        sx={{
          display: "flex",
          flexDirection: isTablet ? "column" : "row",
          justifyContent: isTablet ? "center" : "space-between",
          alignItems: "center",
          marginLeft: "80px",
          transition: "transform 1s ease-in-out",
          transform: moveRowUp ? "translateY(-40px)" : "translateY(0)",
          flex: 1,
          padding: "0 40px",
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
            fontFamily: "Courier Prime",
            padding: isMobile ? "10px 20px" : "15px 30px",
            "&:hover": {
              bgcolor: "#FDF5E6",
              color: "#003A6C",
              border: "2px solid #003A6C",
              boxShadow: "none",
            },
            marginLeft: "auto",
          }}
        >
          Build on Zellular
        </Button>
      </Box>

      {/* <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: isMobile ? "10px" : "80px",
          }}
        >
          <Box
            component="img"
            alt="Arrow back icon"
            src={ArrowBack}
            onClick={handlePreviousSlide}
            sx={{
              cursor: slideIndex > 0 ? "pointer" : "default",
              width: 24,
              height: 24,
              marginRight: "10px",
              opacity: slideIndex > 0 ? 1 : 0.5,
              pointerEvents: slideIndex > 0 ? "auto" : "none",
            }}
          />

          <Box
            component="img"
            alt="Arrow forward icon"
            src={ArrowForward}
            onClick={handleNextSlide}
            sx={{
              cursor: slideIndex < slides.length - 1 ? "pointer" : "default",
              width: 24,
              height: 24,
              marginLeft: "10px",
              opacity: slideIndex < slides.length - 1 ? 1 : 0.5,
              pointerEvents: slideIndex < slides.length - 1 ? "auto" : "none",
            }}
          />
        </Box> */}
    </Box>
  );
}

export default AboutSection;
