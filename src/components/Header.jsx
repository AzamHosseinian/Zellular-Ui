import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Header = () => (
  <AppBar
    position="static"
    color="default"
    sx={{
      backgroundColor: "#FDF5E6",
      boxShadow: "none",
      padding: "0 30px",
    }}
  >
    <Toolbar>
      <Box sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
        <img src="logo.svg" alt="Zellular Logo" style={{ height: "30px" }} />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Button color="inherit" href="#news" sx={{ textTransform: "none" }}>
          News
        </Button>
        <Button color="inherit" href="#about" sx={{ textTransform: "none" }}>
          About
        </Button>
        <Button color="inherit" href="#services" sx={{ textTransform: "none" }}>
          Services
        </Button>
        <Button
          color="inherit"
          href="#advantages"
          sx={{ textTransform: "none" }}
        >
          Advantages
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Header;
