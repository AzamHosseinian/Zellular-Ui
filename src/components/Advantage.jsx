import React, { useState } from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import bgImage from "../assets/images/advantages/ad-bg.svg";
import icon1 from "../assets/images/advantages/icon1.svg";
import icon1Hover from "../assets/images/advantages/icon1-1.svg";
import icon2 from "../assets/images/advantages/icon2.svg";
import icon2Hover from "../assets/images/advantages/icon2-1.svg";
import icon3 from "../assets/images/advantages/icon3.svg";
import icon3Hover from "../assets/images/advantages/icon3-1.svg";
import icon4 from "../assets/images/advantages/icon4.svg";
import icon4Hover from "../assets/images/advantages/icon4-1.svg";

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
      "Supports 100k transactions per second per zApp, and unlimited throughput across the system.",
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
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "contain", // Changed from "fixed" to "contain"
        backgroundRepeat: "repeat", // Ensures the image does not repeat
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          paddingTop: 4,
          color: "#003A6C",
          fontFamily: "Courier Prime",
          marginBottom: 2,
          alignSelf: "flex-start",
          marginLeft: "5%",
        }}
      >
        - Advantages
      </Typography>
      <Box
        sx={{
          width: "70%",
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Grid container spacing={2} justifyContent="center">
          {advantages.map((adv) => (
            <Grid item xs={12} sm={6} md={3} key={adv.id}>
              <Paper
                elevation={3}
                sx={{
                  padding: 2,
                  backgroundColor: "#FDF5E6",
                  color: "#003A6C",
                  height: "645px",
                  border: "2px solid #003A6C",
                  borderRadius: 0,
                  boxShadow: "none",
                  transition: "all 0.3s ease",
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
                    my: 12,
                  }}
                >
                  <img
                    src={hoveredIcon === adv.id ? adv.hoverIcon : adv.icon}
                    alt={adv.title}
                    style={{ width: "100px", height: "100px" }}
                  />
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    paddingTop: "50px",
                    fontFamily:
                      hoveredIcon === adv.id
                        ? "Courier Prime"
                        : "Courier Prime Bold",
                    fontSize: hoveredIcon === adv.id ? "18px" : "32px",
                    textAlign: "left",
                    height: "80px",
                  }}
                >
                  {hoveredIcon === adv.id ? adv.description : adv.title}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Advantage;
