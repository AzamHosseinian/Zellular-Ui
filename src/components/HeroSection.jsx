import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import backgroundImage from "../assets/images/HeroSection/background.svg";
import image1 from "../assets/images/HeroSection/img1.svg";
import image2 from "../assets/images/HeroSection/img2.svg";
import ArrowIcon from "../assets/images/HeroSection/arrows.svg";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(image1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(true);
      setCurrentImage(image2);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      ref={heroRef}
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#FFFFFF",
          width: "100%",
          padding: "0 5%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box position="relative">
          <Box
            sx={{
              width: 15,
              height: 15,
              backgroundColor: "#92E6A7",
              borderRadius: "50%",
              position: "absolute",
              top: "-5px",
              left: "-15px",
              marginTop: "15%",
            }}
          />
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              color: "#FDF5E6",
              fontWeight: "bold",
              fontFamily: "Space Grotesk",
              fontSize: "3rem",
              marginTop: "15%",
            }}
          >
            Filling the Gap between
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              color: "#FDF5E6",
              fontWeight: "bold",
              fontFamily: "Space Grotesk",
              fontSize: "3rem",
              display: "inline-block",
              marginBottom: "5%",
            }}
          >
            Web2 & Web3
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#92E6A7",
              color: "#003A6C",
              borderRadius: "70px",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              fontFamily: "Courier Prime",
              marginLeft: "25%",
              padding: "10px 20px",
              "&:hover": {
                bgcolor: "#FDF5E6",
                color: "#003A6C",
              },
            }}
            endIcon={
              <Box
                component="img"
                src={ArrowIcon}
                sx={{
                  width: 24,
                  height: 24,
                  ml: 1,
                }}
              />
            }
          >
            Build on Zellular
          </Button>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#92E6A7",
              fontFamily: "Courier Prime",
              fontSize: "1.2rem",
              textAlign: "left",
              marginTop: "10%",
              lineHeight: "1.5",
            }}
          >
            Develop sub-second finality
            <br />
            <span style={{ paddingLeft: "15rem" }}>high-throughput dApps</span>
            <br />
            <span style={{ paddingLeft: "25rem" }}>
              in any programming language.
            </span>
          </Typography>
          <Box position="relative">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "15%",
              }}
            >
              <Box
                sx={{
                  width: 15,
                  height: 15,
                  backgroundColor: "#92E6A7",
                  borderRadius: "50%",
                  position: "relative",
                  marginRight: "10px",
                  marginLeft: "65%",
                }}
              />
              <Typography
                sx={{
                  bgcolor: "transparent",
                  color: "#FDF5E6",
                  textTransform: "none",
                  boxShadow: 0,
                  borderRadius: 0,
                  fontFamily: "Courier Prime",
                }}
              >
                Secured by Eigen Layer
              </Typography>
            </Box>
          </Box>
        </Box>
        <motion.img
          src={currentImage}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: isTransitioning ? 2 : 0 }}
          style={{
            width: "25%",
            height: "100vh",
            maxWidth: "500px",
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
