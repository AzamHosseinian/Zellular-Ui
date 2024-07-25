import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import backgroundImage from "../assets/images/HeroSection/background.svg";
import image1 from "../assets/images/HeroSection/img1.svg";
import image2 from "../assets/images/HeroSection/img2.svg";
import ArrowIcon from "../assets/images/HeroSection/arrows.svg";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(image1);
  const [isFading, setIsFading] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImage(image2);
        setIsFading(false);
      }, 1000);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentImage]);

  return (
    <Box
      ref={heroRef}
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
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
          width: "88%",
          padding: "0 0 0 5%",
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
              marginLeft: "25rem", // space between text and button
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
              marginLeft: "69%",
              padding: "10px 20px",
              "&:hover": {
                bgcolor: "#FDF5E6",
                color: "#003A6C", // Optional: change text color on hover
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
            <Typography
              variant="subtitle1"
              sx={{
                color: "#92E6A7",
                fontFamily: "Courier Prime",
                fontSize: "1.2rem",
                textAlign: "left",
                paddingLeft: "15rem",
                lineHeight: "1.5",
              }}
            >
              high-throughput dApps
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: "#92E6A7",
                fontFamily: "Courier Prime",
                fontSize: "1.2rem",
                textAlign: "left",
                paddingLeft: "25rem",
                lineHeight: "1.5",
              }}
            >
              in any programming language.
            </Typography>
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "transparent",
              color: "#FDF5E6",
              textTransform: "none",
              border: "1px solid #FDF5E6",
              borderRadius: 0,
              padding: "1px 10px",
              fontFamily: "Courier Prime",
              marginTop: "10%", //space between text and button
              marginLeft: "70%",
            }}
          >
            Secured by Eigen Layer
          </Button>
        </Box>
        <Box
          component="img"
          src={currentImage}
          sx={{
            width: "25%",
            height: "auto",
            maxWidth: "500px",
            opacity: isFading ? 0 : 1,
            transition: "opacity 1s ease-in-out",
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroSection;
