import { useState } from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import bgImage from "/assets/images/advantages/ad-bg.svg";
import icon1 from "/assets/images/advantages/icon1.svg";
import icon1Hover from "/assets/images/advantages/icon1-1.svg";
import icon2 from "/assets/images/advantages/icon2.svg";
import icon2Hover from "/assets/images/advantages/icon2-1.svg";
import icon3 from "/assets/images/advantages/icon3.svg";
import icon3Hover from "/assets/images/advantages/icon3-1.svg";
import icon4 from "/assets/images/advantages/icon4.svg";
import icon4Hover from "/assets/images/advantages/icon4-1.svg";

const advantages = [
  {
    id: 1,
    title: "Flexibility in Development",
    description:
      "Enables developing decentralized apps using high-level programming languages.",
    icon: icon1,
    hoverIcon: icon1Hover,
  },
  {
    id: 2,
    title: "Rapid Finality",
    description: "Achieves state finalization in under a second.",
    icon: icon2,
    hoverIcon: icon2Hover,
  },
  {
    id: 3,
    title: "High Throughput",
    description:
      "Supports 500k transactions per second per zApp, and unlimited throughput across the system.",
    icon: icon3,
    hoverIcon: icon3Hover,
  },
  {
    id: 4,
    title: "Dynamic Security",
    description:
      "Enables zApps to hire required level of security from EigenLayer by specifying the amount of restaked ETH that is required for their nodes.",
    icon: icon4,
    hoverIcon: icon4Hover,
  },
];

const Advantage = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <Box
      id="advantages"
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        minHeight: "100svh",
        borderTop: "4px solid #003A6C",
        borderBottom: "4px solid #003A6C",
        width: "100vw",
      }}
    >
      <div className="flex gap-4 text-[#003A6C] items-center ml-[80px] my-[80px] font-courierPrime text-[24px]">
        <div className="w-5 h-5 bg-[#003A6C] rounded-full -mt-1"></div>
        <div>ADVANTAGES</div>
      </div>

      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: 4,
          borderRadius: 2,
        }}
      >
        <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] w-full gap-[20px] lg:gap-[30px] max-w-[1600px] ">
          {advantages.map((adv, index) => (
            <div className="flex items-center justify-center" key={index}>
              <Paper
                elevation={3}
                sx={{
                  padding: 2,
                  backgroundColor: "#FDF5E6",
                  color: "#003A6C",
                  width: "340px",
                  height: "645px",
                  border: "2px solid #003A6C",
                  alignItems: "center",
                  borderRadius: 0,
                  boxShadow: "none",
                  transition: "all 0.1s ease",
                }}
                onMouseEnter={() => setHoveredIcon(adv.id)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Chakra Petch",
                    textAlign: "left",
                    fontSize: "56px",
                    fontWeight: "bold",
                    paddingBottom: "20px",
                  }}
                >
                  0{adv.id}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    my: 2,
                  }}
                >
                  <img
                    src={adv.icon}
                    alt={adv.title}
                    style={{ width: "150px", height: "200px" }}
                    loading="lazy"
                  />
                </Box>
                <div className="flex justify-center text-center w-full mb-[60px]">
                  <div className="text-[26px] font-chakraPetch font-bold text-center leading-[33px] max-w-[170px]">
                    {adv.title}
                  </div>
                </div>

                <div className="text-[18px] font-courierPrime leading-[23px] font-normal">
                  {adv.description}
                </div>
              </Paper>
            </div>
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default Advantage;
