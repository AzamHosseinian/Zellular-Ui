import React from "react";
import { Box, Grid } from "@mui/material";
import logo from "../assets/images/Footer/footer-logo.svg";

import discordIcon from "../assets/images/Footer/discord.svg";
import emailIcon from "../assets/images/Footer/email.svg";
import mediumIcon from "../assets/images/Footer/medium.svg";
import xIcon from "../assets/images/Footer/X.svg";

const Footer = () => {
  const socialMedias = [
    { name: "Medium", icon: mediumIcon },
    { name: "X", icon: xIcon },
    { name: "Discord", icon: discordIcon },
    { name: "Email", icon: emailIcon },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#003A6C",
        color: "#FFFFFF",
      }}
    >
      <Grid container alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              margin: "30px 80px",
            }}
          >
            <img src={logo} alt="Logo" style={{ height: "30px" }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "40px",
            }}
          >
            {socialMedias.map((social, index) => (
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
                <img
                  src={social.icon}
                  alt={social.name}
                  style={{ height: "30px", paddingLeft: "10px" }}
                />
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
