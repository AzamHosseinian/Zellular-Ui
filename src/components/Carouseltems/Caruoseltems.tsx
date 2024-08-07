import React from "react";
import Carousel from "react-material-ui-carousel";
import {
  Paper,
  Button,
  useMediaQuery,
  useTheme,
  Typography,
  Box,
} from "@mui/material";
interface Props {
  item: { id: number; text: string; image: string };
}
const Item = ({ item }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  return (
    <div className="h-[480px]">
      <Paper
        sx={{
          // width: isMobile ? "100%" : "60%",
          display: "flex",
          alignItems: "center",
          // justifyContent: isMobile ? "center" : "flex-end",
          height: "100%",
          // marginRight: isMobile ? "0" : "80px",
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Courier Prime Bold",
            fontSize: isTablet ? "20px" : isMobile ? "16px" : "32px",
            color: "#003A6C",
            textAlign: "left",
            lineHeight: 1.5,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          {item.text}
        </Typography>

        <Box
          sx={{
            width: isMobile ? "100%" : "20%",
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "center" : "flex-start",
            height: "100%",
            minWidth: "200px",
          }}
        >
          <img
            src={item.image}
            // loading="lazy"
            style={{
              width: "100%",
              maxHeight: "100%",
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
    <div className="h-[480px] w-full">
      <Carousel sx={{ width: "100%" }}>
        {slides.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselItems;
