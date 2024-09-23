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
          href="https://docs.zellular.xyz/sdk.html"
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
    theme.breakpoints.up("sm") + " and (min-width:1024px)"
  );

  const isDesktop = useMediaQuery("(min-width:1421px)");

  let slidesToShow = isDesktop ? 3 : isTablet ? 2 : 1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + slidesToShow < newsItems.length) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const getItemsToShow = () => {
    let items = [];
    for (let i = 0; i < slidesToShow; i++) {
      items.push(newsItems[(currentIndex + i) % newsItems.length]);
    }
    return items;
  };

  return (
    <div className="pb-[170px]" id="news">
      <div className="text-[#003A6C] text-[24px] font-normal flex items-center gap-4 font-courierPrime mt-[80px] ml-[80px] mb-[80px]">
        <div className="w-5 h-5 rounded-full bg-[#003A6C] -mt-1"></div>
        <div>NEWS</div>
      </div>
      <div className="flex items-center md:justify-between justify-center gap-[92px] lt-1770:gap-[20px] ">
        <div className="leftButton">
          <IconButton
            onClick={handlePrev}
            disabled={currentIndex === 0}
            sx={{
              "&:hover": { backgroundColor: "transparent" },
              // marginRight: isMobile ? "5px" : "20px",
              // marginLeft: "auto",
              width: 48,
              height: 48,
              "&.Mui-focusVisible": { outline: "none" },
              "&:focus": { outline: "none" },
              opacity: currentIndex === 0 ? 0.5 : 1,
            }}
          >
            <img src={CustomBackIcon} alt="Previous" />
          </IconButton>
        </div>
        <div className="newsContent flex gap-10 lt-1596:gap-2 lt-1420:gap-10 ">
          {getItemsToShow().map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition-all hover:shadow-myShadow  duration-[0.2s] ease-[ease] hover:translate-x-[5px] hover:translate-y-[-5px]"
            >
              <div className="max-w-[480px] h-[500px] border-2 border-[#003A6C]">
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="text-[#003A6C] pt-8 px-2 sm:px-8 font-courierPrime">
                  <div className="mb-6 text-[18px] font-normal leading-5">
                    {item.date}
                  </div>
                  <div className="mb-10 sm:text-[24px] font-bold leading-[27px] h-[40px] text-[16px]">
                    {item.title}
                  </div>
                  <div className="font-normal text-[16px] sm:text-[20px] leading-[22px] ">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="rightButton">
          <IconButton
            onClick={handleNext}
            disabled={currentIndex + slidesToShow >= newsItems.length}
            sx={{
              "&:hover": { backgroundColor: "transparent" },
              // marginLeft: isMobile ? "5px" : "20px",
              // marginRight: "auto",
              width: 48,
              height: 48,
              "&.Mui-focusVisible": { outline: "none" },
              "&:focus": { outline: "none" },
              opacity:
                currentIndex + slidesToShow >= newsItems.length ? 0.5 : 1,
            }}
          >
            <img src={CustomForwardIcon} alt="Next" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Slider;
