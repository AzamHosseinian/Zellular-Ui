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
    theme.breakpoints.up("sm") + " and (min-width:768px)"
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
    <div className="pb-[170px] select-none" id="news">
      <div
        id="news"
        className="mb-[130px] lt-1024:mb-[64px] lt-1024:mt-[64px] w-full flex items-center justify-center sm:justify-start ml-0 sm:ml-[80px] mt-[80px]"
      >
        <div className="flex sm:gap-4 gap-2 font-courierPrime text-base sm:text-[20px] md:text-[24px] items-center font-thin leading-[27px] text-[#003A6C] ">
          <div className="w-[12px] h-[12px] sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full bg-[#003A6C] -mt-1"></div>
          NEWS
        </div>
      </div>
      <div className="flex items-center md:justify-between justify-center gap-[92px] lt-1770:gap-[20px] ml-[20px] lt-827:ml-[5px]">
        <div
          className={`w-[48px] h-[48px] lt-827:w-[20px] lt-827:h-[30px] cursor-pointer ${
            currentIndex === 0 ? "opacity-[0.5]" : "opacity-[1]"
          }`}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <img src={CustomBackIcon} alt="Previous" />
        </div>
        <div className="newsContent flex gap-10 lt-827:gap-4 ">
          {getItemsToShow().map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition-all hover:shadow-myShadow duration-[0.2s] ease-[ease] hover:translate-x-[5px] hover:translate-y-[-5px]"
            >
              <div className="max-w-[480px] h-[500px] lt-827:h-[400px] border-2 border-[#003A6C]">
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
                <div className="text-[#003A6C] pt-8 px-2 sm:px-8 lt-827:pt-[24px] lt-827:px-[24px] font-courierPrime">
                  <div className="mb-6 text-[18px] lt-827:text-[10px] lt-827:mb-[16px] font-normal leading-5">
                    {item.date}
                  </div>
                  <div className="mb-10 lt-827:mb-[24px] lg:text-[24px] lt-827:text[14px] font-bold lg:leading-[27px] h-[40px] text-[16px]">
                    {item.title}
                  </div>
                  <div className="font-normal text-[16px] sm:text-[20px] leading-[22px] lt-827:text-[12px] ">
                    {item.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className={`rightButton w-[48px] h-[48px] lt-827:w-[20px] lt-827:h-[30px] mr-[5px] cursor-pointer ${
            currentIndex + slidesToShow >= newsItems.length
              ? "opacity-[0.5]"
              : "opacity-[1]}"
          }`}
          onClick={handleNext}
          disabled={currentIndex + slidesToShow >= newsItems.length}
        >
          <img src={CustomForwardIcon} alt="Next" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
