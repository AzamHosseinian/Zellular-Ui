import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import backgroundImage from "../assets/images/background.svg";
import image1 from "../assets/images/img1.svg";
import image2 from "../assets/images/img2.svg";
import ArrowIcon from "../assets/images/arrows.svg"; // Assuming you've placed your SVG here

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
        <Box>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ color: "#FDF5E6", fontWeight: "bold" }}
          >
            Filling the Gap between Web2 & Web3
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#92E6A7",
              color: "#003A6C",
              borderRadius: "70px",
              textTransform: "none",
              display: "flex", // Ensures contents inside button are flex items
              alignItems: "center", // Centers items vertically
            }}
            endIcon={
              <Box
                component="img"
                src={ArrowIcon}
                sx={{ width: 24, height: 24, ml: 1 }} // Add margin-left to ensure space between text and icon
              />
            }
          >
            Build on Zellular
          </Button>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2, color: "#92E6A7", paddingTop: "30px" }}
          >
            Develop sub-second finality high-throughput dApps in any programming
            language.
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
