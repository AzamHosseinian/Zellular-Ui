import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

function Item(item: any) {
  return (
    <Paper>
      <div>{item.text}</div>
      <img src={item.image} />
    </Paper>
  );
}
const CarouselItems = () => {
  const slides = [
    {
      id: 1,
      text: "Zellular is a decentralized sequencer that enables the developing of high-throughput dapps (100,000+ TPS) implemented in high-level languages such as JS, GO, and Python.",
      image: "./src/assets/images/AboutSection/SlideImages/slide1.svg",
    },
    {
      id: 2,
      text: "These dapps can be decentralized as Byzantine Fault Tolerant (BFT) services replicated & hosted on Eigenlayer and other restaking platforms to ensure security.",
      image: "./src/assets/images/AboutSection/SlideImages/slide2.svg",
    },
    {
      id: 3,
      text: "Zellular enables the replicas to maintain uniformity of their database state by applying updates in the same sequence.",
      image: "./src/assets/images/AboutSection/SlideImages/slide2.svg",
    },
  ];
  return (
    <Carousel>
      {slides.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Carousel>
  );
};

export default CarouselItems;
