import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import logotype from "../assets/images/AboutSection/logotype.svg";
import infoImage from "../assets/images/AboutSection/info-img.svg";
import triangular from "../assets/images/AboutSection/triangular.svg";

const AboutSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FDF5E6",
        padding: 0,
      }}
    >
      <Grid container sx={{ borderBottom: "2px solid #003A6C" }}>
        <Grid item xs={12} md={6} sx={{ padding: "80px" }}>
          <img
            src={logotype}
            alt="Logotype"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: "80px" }}>
          <Typography
            variant="body1"
            sx={{
              color: "#003A6C",
              fontFamily: "Courier Prime",
              fontWeight: "bold",
              paddingTop: "160px",
            }}
          >
            Zellular is a decentralized sequencer that enables developing
            high-throughput dapps (100,000+ TPS) implemented in high-level
            languages (such as JS, GO, and Python) and hosted on EigenLayer and
            other restaking platforms to ensure security.
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            borderRight: { md: "2px solid #003A6C" },
            borderBottom: { xs: "2px solid #003A6C", md: "none" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "20px",
              padding: "80px",
            }}
          >
            <img
              src={triangular}
              alt="Triangular Shape"
              style={{
                marginRight: "20px",
                width: "15px",
                height: "auto",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                color: "#003A6C",
                fontFamily: "Courier Prime",
                width: "80%",
              }}
            >
              Without requiring a blockchain, these dapps can be decentralized
              as Byzantine Fault Tolerant (BFT) services replicated on a number
              of nodes.
            </Typography>
          </Box>
          <hr
            style={{
              border: "none",
              borderBottom: "2px solid #003A6C",
              width: "100%",
              margin: "20px 0",
            }}
          />
          <Box
            sx={{ display: "flex", alignItems: "flex-start", padding: "80px" }}
          >
            <img
              src={triangular}
              alt="Triangular Shape"
              style={{
                marginRight: "20px",
                width: "15px",
                height: "auto",
              }}
            />
            <Typography
              variant="body1"
              sx={{
                color: "#003A6C",
                fontFamily: "Courier Prime",
                width: "80%",
              }}
            >
              Zellular enables the replicas to maintain uniformity of state by
              applying updates in the same sequence.
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "80px",
          }}
        >
          <img
            src={infoImage}
            alt="Information"
            style={{
              width: "80%",
              height: "auto",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutSection;
