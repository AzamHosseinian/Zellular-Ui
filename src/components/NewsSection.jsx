import { useState, useEffect } from "react";
import { useTheme, useMediaQuery } from "@mui/material";

import { Box, Grid, Typography, Paper, IconButton } from "@mui/material";
import CustomBackIcon from "/assets/images/Icons/arrowback.svg";
import CustomForwardIcon from "/assets/images/Icons/arrowforward.svg";
import sdkImage from "/assets/images/NewsSection/Releasing EigenLayer TypeScript and Python SDK.svg";
import hackathonImage from "/assets/images/NewsSection/Earning Top Place in EigenLayer Hackathon.svg";
import docsImage from "/assets/images/NewsSection/Releasing Zellular Docs MVP.svg";
import launch from "/assets/images/NewsSection/LAUNCHING-zellular.jpg";
const newsItems = [
  {
    date: "September 8",
    title: "Launching on EigenLayer Testnet",
    description: (
      <>
        Zellular sequencer is now live on EigenLayer testnet. To learn about the
        conditions and requirements for running a node, refer to{" "}
        <a
          href="https://link-to-node-setup-guide.com"
          target="_blank"
          className="text-[#92E6A7]"
        >
          Node Setup Guide
        </a>
        .
      </>
    ),
    image: launch,
  },
  {
    date: "June 27",
    title: "Releasing Zellular Docs MVP",
    description:
      "Discover more about the Zellular BFT protocol and how to integrate with the Zellular sequencing service with our inaugural documentation release.",
    image: docsImage,
  },
  {
    date: "June 22",
    title: "Earning Top Place in EigenLayer Hackathon",
    description:
      "Zellular team wins 1st prize in EigenLayer AVS MicroHacks Season 1 for creating 2 EigenLayer SDKs and 2 AVS reference architectures.",
    image: hackathonImage,
  },
  {
    date: "June 20",
    title: "Releasing EigenLayer TypeScript and Python SDK",
    description:
      "Zellular’s TypeScript and Python SDKs for EigenLayer allow developers to deploy Zellular apps developed in these popular languages on EigenLayer.",
    image: sdkImage,
  },
];
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(
    theme.breakpoints.up("sm") + " and (max-width:1320px)"
  );

  const isDesktop = useMediaQuery("(min-width:1321px)");

  let slidesToShow = isDesktop ? 3 : isTablet ? 2 : 1;

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

  const getItemsToShow = () => {
    let items = [];
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
        display: "flex",
        flexDirection: "column",
        marginBottom: "150px",
      }}
    >
      <div className="text-[#003A6C] text-[24px] font-normal flex items-center gap-4 font-courierPrime mt-[80px] ml-[80px] mb-[80px]">
        <div className="w-5 h-5 rounded-full bg-[#003A6C] -mt-1"></div>
        <div>NEWS</div>
      </div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <IconButton
          onClick={handlePrev}
          sx={{
            "&:hover": { backgroundColor: "transparent" },
            marginRight: isMobile ? "5px" : "20px",
            marginLeft: "auto",
            width: isMobile ? 32 : 48,
            height: isMobile ? 32 : 48,
            "&.Mui-focusVisible": { outline: "none" },
            "&:focus": { outline: "none" },
          }}
        >
          <img src={CustomBackIcon} alt="Previous" />
        </IconButton>
        <div className="flex gap-[40px] justify-center w-full items-center">
          {getItemsToShow().map((item, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="bg-[#FDF5E6] border-2 items-center hover:shadow-myShadow border-[#003A6C] w-[320px] sm:w-full sm:max-w-[510px] h-[576px] flex flex-col justify-center transition-all duration-[0.2s] ease-[ease] hover:translate-x-[5px] hover:translate-y-[-5px]">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "220px",
                    minHeight: "180px",
                    objectFit: "cover",
                  }}
                />
                <Box
                  sx={{
                    padding: 2,
                    flexGrow: 1,
                    flexDirection: "column",
                    justifyContent: "start",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#003A6C",
                      fontFamily: "Courier Prime",
                      fontSize: isMobile ? "16px" : isTablet ? "16px" : "20px",
                      textAlign: "left",
                      paddingBottom: "16px",
                    }}
                  >
                    {item.date}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      marginBottom: isTablet ? "20px" : "40px",
                      height: "80px",
                      minHeight: "20px",
                      color: "#003A6C",
                      fontFamily: "Courier Prime Bold",
                      textAlign: "left",
                      fontSize: isMobile ? "16px" : isTablet ? "18px" : "24px",
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
                      // marginTop: "32px",
                      fontSize: isMobile ? "16px" : isTablet ? "16px" : "20px",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
              </div>
            </div>
          ))}
        </div>
        <IconButton
          onClick={handleNext}
          sx={{
            "&:hover": { backgroundColor: "transparent" },
            marginLeft: isMobile ? "5px" : "20px",
            marginRight: "auto",
            width: isMobile ? 32 : 48,
            height: isMobile ? 32 : 48,
            "&.Mui-focusVisible": { outline: "none" },
            "&:focus": { outline: "none" },
          }}
        >
          <img src={CustomForwardIcon} alt="Next" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Slider;
