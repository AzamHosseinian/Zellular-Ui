import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography, Box, useMediaQuery, useTheme } from "@mui/material";

interface Props {
  item: { id: number; text: string; image: string };
}

const Item = ({ item }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <div className="h-[480px] border-l border-3 border-gray-600">
      <Paper
        sx={{
          background: "none",
          width: "100%",
          display: "flex",
          flexDirection: isMobile || isTablet ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          paddingLeft: isMobile || isTablet ? "16px" : "80px",
          paddingRight: isMobile || isTablet ? "16px" : "80px",
          bgcolor: "transparent",
          boxShadow: "none",
          gap: isMobile ? "50px" : isTablet ? "30px" : "0px",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Courier Prime Bold",
            fontSize: isMobile ? "16px" : isTablet ? "18px" : "32px",
            color: "#003A6C",
            textAlign: isMobile || isTablet ? "center" : "left",
            lineHeight: 1.5,
            transition: "opacity 0.5s ease-in-out",
            paddingTop: isMobile ? "20px" : 0,
            width: isMobile || isTablet ? "100%" : "70%",
            order: isMobile || isTablet ? 2 : 0,
          }}
        >
          {item.text}
        </Typography>

        <Box
          sx={{
            width: isMobile ? "50%" : isTablet ? "30%" : "20%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: isMobile || isTablet ? "auto" : "100%",
            minWidth: "200px",
            order: isMobile || isTablet ? 1 : 1,
          }}
        >
          <img
            src={item.image}
            alt={`Slide ${item.id}`}
            style={{
              width: "100%",
              maxHeight: isMobile || isTablet ? "100%" : "70%",
              transition: "opacity 0.5s ease-in-out",
              opacity: 1,
            }}
          />
        </Box>
      </Paper>
    </div>
  );
};

const CarouselItems = () => {
  const slides = [
    {
      id: 1,
      text: "Zellular is a decentralized sequencer that enables the developing of high-throughput dapps (100,000+ TPS) implemented in high-level languages such as JS, GO, and Python.",
      image: "../src/assets/images/AboutSection/SlideImages/slide1.svg",
    },
    {
      id: 2,
      text: "These dapps can be decentralized as Byzantine Fault Tolerant (BFT) services replicated & hosted on Eigenlayer and other restaking platforms to ensure security.",
      image: "../src/assets/images/AboutSection/SlideImages/slide2.svg",
    },
    {
      id: 3,
      text: "Zellular enables the replicas to maintain uniformity of their database state by applying updates in the same sequence.",
      image: "../src/assets/images/AboutSection/SlideImages/slideTree.gif",
    },
  ];

  return (
    <div className="h-[480px] w-full bg-none cursor-pointer">
      <Carousel
        interval={7000}
        duration={700}
        animation={"slide"}
        stopAutoPlayOnHover={true}
        // indicators={false}
        sx={{ width: "100%" }}
        swipe={true}
        NextIcon={
          <img src="./src/assets/images/Icons/arrowforward.svg" alt="Next" />
        }
        PrevIcon={
          <img src="./src/assets/images/Icons/arrowback.svg" alt="Previous" />
        }
        navButtonsAlwaysVisible={false}
        navButtonsProps={{
          style: {
            backgroundColor: "rgb(253, 245, 230)",
            opacity: 1,
            zIndex: "1000px",
            border: "none",
          },
        }}
      >
        {slides.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselItems;