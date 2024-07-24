// Footer.jsx
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import logo from "../assets/images/Footer/footer-logo.svg";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#003A6C",
        padding: "20px 90px",
        color: "#FFFFFF",
      }}
    >
      <Grid container alignItems="center">
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="Logo" style={{ height: "50px" }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              padding: "20px",
            }}
          >
            {["X", "Discord", "Email"].map((text, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "40px",
                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    width: 10,
                    height: 10,
                    backgroundColor: "#92E6A7",
                    borderRadius: "50%",
                    position: "absolute",
                    top: 0,
                    left: -10,
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "Courier New, Courier, monospace",
                    fontWeight: "bold",
                    color: "#FDF5E6",
                    paddingLeft: "10px", // Space for the green circle
                  }}
                >
                  {text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
