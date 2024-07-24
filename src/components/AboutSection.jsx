// AboutSection.jsx
import React, { useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import logo from "../assets/images/logo/info_logo1.svg";
import logoHover from "../assets/images/logo/info_logo2.svg";
import infoImage from "../assets/images/info-img.svg";

const AboutSection = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      sx={{
        backgroundColor: "#FDF5E6",
        alignContent: "center",
        padding: "100px",
      }}
    >
      <Grid container spacing={2}>
        <Grid container item spacing={2} sx={{ marginBottom: 8 }}>
          <Grid item xs={12} md={6}>
            <img
              src={hovered ? logoHover : logo}
              alt="Logo"
              style={{ width: "70%", height: "auto", paddingLeft: "80px" }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              sx={{
                color: "#003A6C",
                fontFamily: "Courier New, Courier, monospace",
                fontWeight: "bold",
                paddingTop: hovered ? "70px" : "120px",
                fontSize: hovered ? "17px" : "16px",
                transition: "padding-top 0.3s ease",
              }}
            >
              Zellular is a decentralized sequencer that enables developing
              high-throughput dapps (100,000+ TPS) implemented in high-level
              languages (such as JS, GO, and Python) and hosted on EigenLayer
              and other restaking platforms to ensure security.
            </Typography>
          </Grid>
        </Grid>
        {/* Second Row */}
        <Grid container item spacing={2}>
          <Grid container item xs={12} md={6} spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{
                  color: "#003A6C",
                  fontFamily: "Courier New, Courier, monospace",
                }}
              >
                Without requiring a blockchain, these dapps can be decentralized
                as Byzantine Fault Tolerant (BFT) services replicated on a
                number of nodes.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{
                  color: "#003A6C",
                  fontFamily: "Courier New, Courier, monospace",
                }}
              >
                Zellular enables the replicas to maintain uniformity of state by
                applying updates in the same sequence.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={infoImage}
              alt="Information"
              style={{
                width: "60%",
                height: "auto",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
