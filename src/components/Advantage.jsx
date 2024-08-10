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
    title: "Flexible Development",
    description:
      "Enables developing decentralized apps using high-level programming languages.",
    icon: icon1,
    hoverIcon: icon1Hover,
  },
  {
    id: 2,
    title: "Rapid Finality",
    description: (
      <>
        Achieves state
        <br />
        finalization in
        <br />
        under a second.
      </>
    ),
    icon: icon2,
    hoverIcon: icon2Hover,
  },
  {
    id: 3,
    title: "High Throughput",
    description:
      "Supports +100k transactions per second per zApp, and unlimited throughput across the system.",
    icon: icon3,
    hoverIcon: icon3Hover,
  },
  {
    id: 4,
    title: "Dynamic Security",
    description:
      "Enables dynamic security by specifying the amount of restaked ETH that is required for running nodes.",
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
        alignItems: "center",
        paddingTop: 4,
        minHeight: "100svh",
        borderTop: "4px solid #003A6C",
        borderBottom: "4px solid #003A6C",
        width: "100vw",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          paddingTop: 4,
          color: "#003A6C",
          fontFamily: "Space Grotesk",
          marginBottom: 2,
          alignSelf: "flex-start",
          marginLeft: "5%",
          fontSize: "40px",
        }}
      >
        -Advantages
      </Typography>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          padding: 4,
          borderRadius: 2,
        }}
      >
        <div className="grid grid-cols-[repeat(auto-fit,minmax(301px,1fr))] w-full gap-[68px] max-w-[1414px] ">
          {advantages.map((adv, index) => (
            <div className="flex items-center justify-center" key={index}>
              <Paper
                elevation={3}
                sx={{
                  padding: 2,
                  backgroundColor: "#FDF5E6",
                  color: "#003A6C",
                  width: "302px",
                  height: "645px",
                  border: "2px solid #003A6C",
                  alignItems: "center",
                  borderRadius: 0,
                  boxShadow: "none",
                  transition: "all 0.1s ease",
                  "&:hover": {
                    backgroundColor: "#003A6C",
                    color: "#FDF5E6",
                    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                  },
                }}
                onMouseEnter={() => setHoveredIcon(adv.id)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Courier Prime",
                    textAlign: "left",
                    fontSize: "70px",
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
                    src={hoveredIcon === adv.id ? adv.hoverIcon : adv.icon}
                    alt={adv.title}
                    style={{ width: "150px", height: "200px" }}
                    loading="lazy"
                  />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    paddingTop: hoveredIcon === adv.id ? "50px" : "110px",
                    fontFamily:
                      hoveredIcon === adv.id
                        ? "Courier Prime"
                        : "Courier Prime Bold",
                    fontSize: hoveredIcon === adv.id ? "18px" : "32px",
                    textAlign: "left",
                    paddingRight: hoveredIcon === adv.id ? 0 : "40px",
                  }}
                >
                  {hoveredIcon === adv.id ? adv.description : adv.title}
                </Typography>
              </Paper>
            </div>
          ))}
        </div>
      </Box>
    </Box>
  );
};

export default Advantage;
