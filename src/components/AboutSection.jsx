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
      <Box
        id="about"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "130px",
        }}
      >
        <div className="flex  gap-4 font-courierPrime text-[24px] font-thin leading-[27px] text-[#003A6C] mt-[80px] ml-[80px]">
          <div className="w-6 h-6 rounded-full bg-[#003A6C]"></div>
          ABOUT ZELLULAR
        </div>
        {/* <img
          src={LogoType}
          alt="Zellular Logotype"
          style={{ width: "100%", height: "100%", minWidth: "200px" }}
        /> */}
      </Box>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: isMobile ? "column-reverse" : "row",
          textAlign: "center",
          alignItems: "center",
          minHeight: "480px",
          justifyContent: "center",
          gap: "30px",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <CarouselItems />
      </Box>

      <div className=" flex w-full items-center justify-center my-[80px] font-courierPrime font-bold">
        <div
          onClick={handleButtonClick}
          className="bg-[#003a6c] hover:bg-[#92e3a7] hover:text-[#003a6c] hover:border-[#003a6c] border cursor-pointer border-[#92e3a7] w-[265px] h-[70px] text-[#92e3a7] text-[20px] flex items-center justify-center"
        >
          Build on Zellular
        </div>
      </div>
    </Box>
  );
}

export default AboutSection;
