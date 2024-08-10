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
        height: isMobile ? "800px" : "1000px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        boxSizing: "border-box",
      }}
    >
      <Box
        id="about"
        sx={{
          width: isMobile ? mobileLogoSize : logoSize,
          height: isMobile ? mobileLogoSize : logoSize,
          transition: "width 0.8s, height 0.8s",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: isMobile ? "15px" : "80px",
          paddingBottom: isMobile ? "15px" : "80px",
          marginLeft: "80px",
        }}
      >
        <img
          src={LogoType}
          alt="Zellular Logotype"
          style={{ width: "100%", height: "100%", minWidth: "200px" }}
        />
      </Box>

      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: isMobile ? "column-reverse" : "row",
          borderTop: "3px dashed #003A6C",
          borderBottom: "3px dashed #003A6C",
          textAlign: "center",
          alignItems: "center",
          minHeight: "480px",
          justifyContent: "center",
          // padding: isTablet ? "20px" : "40px 80px",
          gap: "30px",
          boxSizing: "border-box",
          width: "100%",
        }}
      >
        <CarouselItems />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "80px",
          transition: "transform 1s ease-in-out",
          flex: 1,
          margin: "20px",
          width: "100%",
        }}
      >
        <Button
          aria-label="Build on Zellular"
          variant="contained"
          sx={{
            bgcolor: "#92E6A7",
            fontSize: isMobile ? "16px" : "24px",
            color: "#003A6C",
            borderRadius: "70px",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            fontFamily: "Courier Prime Bold",
            padding: isMobile ? "10px 20px" : "15px 30px",
            marginLeft: "-25px",
            "&:hover": {
              bgcolor: "#FDF5E6",
              color: "#003A6C",
              border: "2px solid #003A6C",
              boxShadow: "none",
            },
            "&:focus": {
              outline: "none",
            },
          }}
          onClick={handleButtonClick}
        >
          Build on Zellular
        </Button>
      </Box>
    </Box>
  );
}

export default AboutSection;
