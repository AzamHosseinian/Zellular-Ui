import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import backgroundImage from "../assets/images/HeroSection/background.svg";
import animationWebm from "../assets/images/HeroSection/animation.webm";
import ArrowIcon from "../assets/images/HeroSection/arrows.svg";
import "./HeroSection.css";

const HeroSection = () => {
  const [isLoading, setLoading] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = videoRef.current.duration;
      }
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#FFFFFF",
          width: "100%",
          padding: "80px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Box position="relative">
          <Box
            sx={{
              width: 25,
              height: 25,
              backgroundColor: "#92E6A7",
              borderRadius: "50%",
              position: "absolute",
              top: "-5px",
              left: "-30px",
              marginTop: "15%",
            }}
          />
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              color: "#FDF5E6",
              fontWeight: "bold",
              fontFamily: "Space Grotesk",
              fontSize: "80px",
              marginTop: "15%",
              lineHeight: "0.8",
            }}
          >
            Filling the Gap between
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              color: "#FDF5E6",
              fontWeight: "bold",
              fontFamily: "Space Grotesk",
              fontSize: "80px",
              display: "inline-block",
              paddingLeft: "40rem",
              marginBottom: "5%",
            }}
          >
            Web2 <span style={{ fontFamily: "CabinetGrotesk" }}>&</span> Web3
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "#92E6A7",
              fontSize: "24px",
              color: "#003A6C",
              borderRadius: "70px",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
              marginLeft: "45rem",
              padding: "10px 20px",
              "&:hover": {
                bgcolor: "#FDF5E6",
                color: "#003A6C",
              },
            }}
            endIcon={
              <Box
                component="img"
                src={ArrowIcon}
                sx={{
                  width: 24,
                  height: 24,
                  ml: 1,
                }}
              />
            }
          >
            Build on Zellular
          </Button>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#92E6A7",
              fontFamily: "Courier Prime",
              fontSize: "40px",
              textAlign: "left",
              marginTop: "10%",
              lineHeight: "1.125",
            }}
          >
            Develop sub-second finality
            <br />
            <span style={{ paddingLeft: "15rem" }}>high-throughput dApps</span>
            <br />
            <span style={{ paddingLeft: "20rem" }}>
              in{" "}
              <span className="typing-effect">any programming language.</span>
            </span>
          </Typography>
          <Box position="relative">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "5%",
              }}
            >
              <Box
                sx={{
                  width: 15,
                  height: 15,
                  backgroundColor: "#92E6A7",
                  borderRadius: "50%",
                  position: "relative",
                  marginRight: "10px",
                  marginLeft: "55%",
                }}
              />
              <Typography
                sx={{
                  bgcolor: "transparent",
                  color: "#FDF5E6",
                  textTransform: "none",
                  boxShadow: 0,
                  borderRadius: 0,
                  fontFamily: "Courier Prime",
                  padding: 0,
                  fontSize: "24px",
                }}
              >
                Secured by EigenLayer
              </Typography>
            </Box>
          </Box>
        </Box>
        {isLoading ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            style={{
              height: "100vh",
              opacity: 1,
              transition: "opacity 0.001s",
            }}
            alt="Hero Section Animation"
          >
            <source src={animationWebm} type="video/webm" />
          </video>
        ) : (
          <video
            ref={videoRef}
            style={{
              height: "100vh",
              opacity: 1,
              transition: "opacity 0.001s",
            }}
            controls={false}
          >
            <source src={animationWebm} type="video/webm" />
          </video>
        )}
      </Box>
    </Box>
  );
};

export default HeroSection;
