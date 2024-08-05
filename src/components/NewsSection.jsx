import { useState, useEffect } from "react";
import { Box, Grid, Typography, Paper, IconButton } from "@mui/material";
import CustomBackIcon from "../assets/images/Icons/arrowback.svg";
import CustomForwardIcon from "../assets/images/Icons/arrowforward.svg";
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
      id="news"
      sx={{
        backgroundColor: "#FDF5E6",
        padding: "190px 0",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: "#003A6C",
          fontFamily: "Space Grotesk",
          marginBottom: 8,
          fontSize: "40px",
        }}
      >
        - News -
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            "&:hover": { backgroundColor: "transparent" },
            marginLeft: "40px",
          }}
        >
          <img src={CustomBackIcon} alt="Previous" />
        </IconButton>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(470px,1fr))] w-full gap-[40px] justify-center">
          {getItemsToShow().map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                sx={{
                  backgroundColor: "#FDF5E6",
                  border: "2px solid #003A6C",
                  boxShadow: "none",
                  width: "510px",
                  height: "544px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all 0.2s ease",
                  "&:hover": {
                    transform: "translate(5px, -5px)",
                    boxShadow: "-10px -10px 0px 0px #003A6C",
                  },
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "auto" }}
                />
                <Box
                  sx={{
                    padding: 2,
                    flexGrow: 1,
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#003A6C",
                      fontFamily: "Courier Prime",
                      fontSize: "20px",
                      textAlign: "left",
                      paddingBottom: "16px",
                    }}
                  >
                    {item.date}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#003A6C",
                      fontFamily: "Courier Prime Bold",
                      textAlign: "left",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#003A6C",
                      fontFamily: "Courier Prime",
                      textAlign: "left",
                      marginTop: "32px",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </div>
        <IconButton
          onClick={handleNext}
          sx={{
            "&:hover": { backgroundColor: "transparent" },
            marginRight: "80px",
          }}
        >
          <img src={CustomForwardIcon} alt="Next" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Slider;
