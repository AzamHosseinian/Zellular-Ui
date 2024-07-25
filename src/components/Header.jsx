import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Header = () => (
  <AppBar
    position="absolute"
    color="transparent"
    sx={{
      backgroundColor: "transparent",
      boxShadow: "none",
      padding: "20px 30px", // Adjust padding if needed
      zIndex: 10,
    }}
  >
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img src="logo.svg" alt="Zellular Logo" style={{ height: "30px" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexGrow: 1,
          gap: 2,
        }}
      >
        <Button
          href="#news"
          sx={{
            textTransform: "none",
            fontFamily: "Courier Prime",
            color: "#92E6A7",
            fontWeight: "bold",
          }}
        >
          News
        </Button>
        <Button
          href="#about"
          sx={{
            textTransform: "none",
            fontFamily: "Courier Prime",
            color: "#92E6A7",
            fontWeight: "bold",
          }}
        >
          About
        </Button>
        <Button
          href="#advantages"
          sx={{
            textTransform: "none",
            fontFamily: "Courier Prime",
            color: "#92E6A7",
            fontWeight: "bold",
          }}
        >
          Advantages
        </Button>
        <Button
          href="#advantages"
          sx={{
            textTransform: "none",
            fontFamily: "Courier Prime",
            color: "#92E6A7",
            fontWeight: "bold",
          }}
        >
          Social Media
        </Button>
      </Box>
      <Box sx={{ width: "30px" }} />
    </Toolbar>
  </AppBar>
);

export default Header;
