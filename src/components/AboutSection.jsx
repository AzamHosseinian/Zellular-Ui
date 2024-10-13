import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import LogoType from "/assets/images/AboutSection/logotype.svg";
import CarouselItems from "./Carouseltems/Caruoseltems";
function AboutSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const [scrollY, setScrollY] = useState(0);
  const handleButtonClick = () => {
    window.open("https://docs.zellular.xyz", "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logoSize = scrollY >= window.innerHeight * 0.3 ? "30%" : "23%";
  const mobileLogoSize = scrollY >= window.innerHeight * 0.2 ? "15%" : "10%";

  return (
    <Box
      sx={{
        textAlign: "center",
        bgcolor: "#FDF5E6",
        // height: isMobile ? "800px" : "1000px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        boxSizing: "border-box",
        background: "url('./assets/images/AboutSection/about-bg .png')",
      }}
    >
      <div
        id="about"
        className="mb-[130px] lt-1024:mb-[64px] lt-1024:mt-[64px] w-full flex items-center justify-center sm:justify-start ml-0 sm:ml-[80px] mt-[80px]"

        // sx={{
        //   display: "flex",
        //   alignItems: "center",
        //   justifyContent: "center",
        //   marginBottom: "130px",
        // }}
      >
        <div className="flex gap-2 sm:gap-4 font-courierPrime text-base sm:text-[20px] md:text-[24px] items-center font-thin leading-[27px] text-[#003A6C] ">
          <div className="w-[12px] h-[12px] sm:w-4 sm:h-4 lg:w-5 lg:h-5 rounded-full bg-[#003A6C] -mt-1"></div>
          ABOUT ZELLULAR
        </div>
      </div>

      <div className="relative flex text-center items-center justify-center gap-[30px] w-full px-5 sm:p-0">
        <CarouselItems />
      </div>

      <div className=" flex w-full items-center justify-center mt-[80px] mb-[148px] lt-1550:mt-[64ps] lt-1550:mb-[88px] lt-1024:mt-[64px] lt-1024:mb-[64px] font-courierPrime font-bold">
        <div
          onClick={handleButtonClick}
          className="bg-[#003a6c] hover:bg-[#92e3a7] hover:text-[#003a6c] hover:border-[#003a6c] border cursor-pointer border-[#92e3a7] w-[244px] h-[68px] lg:w-[265px] lg:h-[70px] text-[#92e3a7] text-[18px] lg:text-[20px] flex items-center justify-center"
        >
          Build on Zellular
        </div>
      </div>
    </Box>
  );
}

export default AboutSection;
