import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import backgroundImage from "../assets/images/HeroSection/background.svg";
import image1 from "../assets/images/HeroSection/img1.svg";
import image2 from "../assets/images/HeroSection/img2.svg";
import ArrowIcon from "../assets/images/HeroSection/arrows.svg";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(image1);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImage(image2);
        setIsFading(false);
      }, 0);
    }, 3000);
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
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
              display: "inline",
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
              paddingLeft: "350px",
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
              fontFamily: "Courier Prime, Courier, monospace",
              marginTop: "10px",
              padding: "10px 20px",
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
              fontFamily: "Courier Prime, Courier, monospace",
              fontSize: "1.2rem",
              textAlign: "center",
              marginTop: "20px",
              lineHeight: "1.5",
            }}
          >
            Develop sub-second finality
            <br />
            high-throughput dApps
            <br />
            in any programming language.
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
              fontFamily: "Courier Prime, Courier, monospace",
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
