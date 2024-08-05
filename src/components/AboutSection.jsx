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
import SlideThree from "../assets/images/AboutSection/SlideImages/slide3.svg";

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
      image: SlideThree,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      if (
        window.scrollY >
        0.6 * document.body.scrollHeight - window.innerHeight
      ) {
        setMoveRowUp(true);
      } else {
        setMoveRowUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const logoSize = scrollY >= window.innerHeight * 0.3 ? "30%" : "15%";
  const mobileLogoSize = scrollY >= window.innerHeight * 0.2 ? "25%" : "10%";

  return (
    <Box sx={{ textAlign: "center", bgcolor: "#FDF5E6" }}>
      <Box
        id="about"
        sx={{
          width: isMobile ? mobileLogoSize : logoSize,
          height: isMobile ? mobileLogoSize : logoSize,
          transition: "width 0.8s, height 0.8s",
          mb: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: isMobile ? "40px" : "80px",
        }}
      >
        <Box
          component="img"
          src={LogoType}
          alt="Zellular Logotype"
          sx={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          borderTop: "3px dotted #003A6C",
          borderBottom: "3px dotted #003A6C",
          textAlign: "center",
          height: "480px",
          alignItems: "center",
          justifyContent: "center",
          padding: isMobile ? "20px" : "40px 80px",
          gap: 30,
        }}
      >
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
              fontSize: isMobile ? "18px" : "28px",
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
          }}
        >
          <img
            src={slides[slideIndex].image}
            alt={`Slide ${slideIndex + 1}`}
            style={{ width: "100%", maxHeight: "100%" }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: isTablet ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "80px",
          transition: "transform 0.8s ease-in-out",
          transform: moveRowUp ? "translateY(-50px)" : "translateY(0)",
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
          }}
        >
          Build on Zellular
        </Button>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: isMobile ? "40px" : "80px",
          }}
        >
          {slideIndex > 0 && (
            <Box
              component="img"
              alt="Arrow back icon"
              src={ArrowBack}
              onClick={() =>
                setSlideIndex(
                  (prev) => (prev - 1 + slides.length) % slides.length
                )
              }
              sx={{
                cursor: "pointer",
                width: 24,
                height: 24,
                marginRight: "10px",
              }}
            />
          )}
          {slideIndex < slides.length - 1 && (
            <Box
              component="img"
              alt="Arrow forward icon"
              src={ArrowForward}
              onClick={() =>
                setSlideIndex((prev) => (prev + 1) % slides.length)
              }
              sx={{
                cursor: "pointer",
                width: 24,
                height: 24,
                marginLeft: "10px",
              }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default AboutSection;
