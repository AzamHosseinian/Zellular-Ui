import React, { useEffect, useRef } from "react";
import { Box, Grid, Typography } from "@mui/material";
import logo from "../assets/images/AboutSection/logo.svg";
import logotype from "../assets/images/AboutSection/logotype.svg";
import infoImage from "../assets/images/AboutSection/info-img.svg";

const AboutSection = ({ isHovered, onIntersect }) => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          onIntersect(entry.isIntersecting);
        });
      },
      { threshold: 0.22 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, [onIntersect]);

  return (
    <Box
      ref={aboutRef}
      sx={{
        backgroundColor: "#FDF5E6",
        alignContent: "center",
        padding: "80px",
      }}
    >
      <Grid container spacing={2}>
        <Grid container item spacing={2} sx={{ marginBottom: "12%" }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                margin: "40px",
                gap: "40px",
              }}
            >
              <img
                src={logo}
                alt="Logo"
                style={{
                  width: isHovered ? "40px" : "75px",
                  height: "auto",
                  transition: "width 2s ease-in-out",
                }}
              />
              <img
                src={logotype}
                alt="Logotype"
                style={{
                  width: isHovered ? "380px" : "422px",
                  height: "auto",
                  transition: "width 2s ease-in-out",
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="body1"
              sx={{
                color: "#003A6C",
                fontFamily: "Courier Prime",
                fontWeight: "bold",
                paddingTop: isHovered ? "90px" : "160px",
                transition: "padding-top 1.5s ease",
              }}
            >
              Zellular is a decentralized sequencer that enables developing
              high-throughput dapps (100,000+ TPS) implemented in high-level
              languages (such as JS, GO, and Python) and hosted on EigenLayer
              and other restaking platforms to ensure security.
            </Typography>
          </Grid>
        </Grid>

        <Grid container item spacing={2}>
          <Grid container item xs={12} md={6} spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                sx={{
                  color: "#003A6C",
                  fontFamily: "Courier Prime",
                  width: "80%",
                  marginBottom: "40px",
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
                  fontFamily: "Courier Prime",
                  width: "80%",
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
                width: "40%",
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
