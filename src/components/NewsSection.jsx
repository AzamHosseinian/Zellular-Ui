import React, { useState, useEffect } from "react";
import { Box, Grid, Typography, Paper, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import sdkImage from "../assets/images/NewsSection/Releasing EigenLayer TypeScript and Python SDK.svg";
import hackathonImage from "../assets/images/NewsSection/Earning Top Place in EigenLayer Hackathon.svg";
import docsImage from "../assets/images/NewsSection/Releasing Zellular Docs MVP.svg";

const newsItems = [
  {
    date: "June 20",
    title: "Releasing EigenLayer TypeScript and Python SDK",
    description:
      "Zellular’s TypeScript and Python SDKs for EigenLayer allow developers to deploy Zellular apps developed in these popular languages on EigenLayer.",
    image: sdkImage,
  },
  {
    date: "June 22",
    title: "Earning Top Place in EigenLayer Hackathon",
    description:
      "Zellular team wins 1st prize in EigenLayer AVS MicroHacks Season 1 for creating 2 EigenLayer SDKs and 2 AVS reference architectures.",
    image: hackathonImage,
  },
  {
    date: "June 27",
    title: "Releasing Zellular Docs MVP",
    description:
      "Discover more about the Zellular BFT protocol and how to integrate with the Zellular sequencing service with our inaugural documentation release.",
    image: docsImage,
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesToShow = 3;

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - slidesToShow + newsItems.length) % newsItems.length
    );
  };

  const handleNext = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + slidesToShow) % newsItems.length
    );
  };

  useEffect(() => {
    const autoplay = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(autoplay);
  }, [currentIndex]);

  const getItemsToShow = () => {
    const items = [];
    for (let i = 0; i < slidesToShow; i++) {
      items.push(newsItems[(currentIndex + i) % newsItems.length]);
    }
    return items;
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FDF5E6",
        padding: "50px 0",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#003A6C",
          fontFamily: "Space Grotesk",
          marginBottom: 4,
        }}
      >
        - News -
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton onClick={handlePrev}>
          <ArrowBackIosIcon sx={{ color: "#003A6C" }} />
        </IconButton>
        <Grid container spacing={4} sx={{ width: "80%" }}>
          {getItemsToShow().map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box
                sx={{
                  position: "relative",
                  marginBottom: "20px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Paper
                  sx={{
                    backgroundColor: "#FDF5E6",
                    border: "1px solid #003A6C",
                    boxShadow: "none",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.2s ease",
                    position: "relative",
                    zIndex: 1,
                    "&:hover": {
                      transform: "translate(5px, -5px)",
                      boxShadow: "-10px -10px 0px 0px #003A6C",
                      zIndex: 2,
                    },
                  }}
                >
                  <Box
                    sx={{
                      height: "180px",
                      backgroundColor: "#d3d3d3",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      padding: 2,
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#003A6C",
                        fontFamily: "Courier Prime",
                        fontSize: "16px",
                        textAlign: "left",
                      }}
                    >
                      {item.date}
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{
                        color: "#003A6C",
                        fontSize: "18px",
                        fontFamily: "Courier Prime Bold",
                        textAlign: "left",
                        height: "3em",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#003A6C",
                        fontFamily: "Courier Prime",
                        fontSize: "16px",
                        textAlign: "left",
                        marginTop: 2,
                        height: "7em",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>
        <IconButton onClick={handleNext}>
          <ArrowForwardIosIcon sx={{ color: "#003A6C" }} />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Slider;
