import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Triangular from "../assets/images/HeaderIcon/triangular.svg";

const Header = () => (
  <AppBar
    position="absolute"
    color="transparent"
    sx={{
      backgroundColor: "transparent",
      boxShadow: "none",
      padding: "20px 30px",
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
          gap: 4,
        }}
      >
        {["About", "News", "Advantages", "Social Media"].map((text, index) => (
          <Box
            key={index}
            component="a"
            href={`#${text.toLowerCase().replace(/ /g, "")}`}
            sx={{
              textTransform: "none",
              color: "#92E6A7",
              fontWeight: "bold",
              position: "relative",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              "&:hover .triangle": {
                animation: "slideIn 6s ease-out forwards", // Slower animation with ease-out
                visibility: "visible", // Triangle becomes visible on hover
              },
            }}
          >
            <Typography
              variant="h6"
              component="span"
              sx={{
                display: "flex",
                alignItems: "center",
                fontFamily: "Courier Prime",
                fontWeight: "bold",
                // paddingLeft: "15px",
              }}
            >
              {text}
              <Box
                className="triangle"
                component="span"
                sx={{
                  visibility: "hidden", // Triangle is always taking up space but not visible
                  padding: "0 10px", // Ensure padding does not affect layout disproportionately
                }}
              >
                <img
                  src={Triangular}
                  alt="Triangle"
                  style={{ height: "12px" }}
                />
              </Box>
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ width: "120px" }} />
    </Toolbar>
  </AppBar>
);

export default Header;
