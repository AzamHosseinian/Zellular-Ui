import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Triangular from "../assets/images/HeaderIcon/triangular.svg";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const socialLinks = {
    Discord: "https://discord.com/invite/zellular",
    Medium: "https://medium.com/@zellular",
    X: "https://x.com/zellular_xyz",
  };

  const handleClick = (event) => {
    const targetName = event.currentTarget.textContent;
    if (targetName === "Social Media") {
      setAnchorEl(event.currentTarget);
    } else {
      const section = document.getElementById(
        targetName.toLowerCase().replace(/ /g, "")
      );
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  const handleMenuClick = (event) => {
    const site = event.currentTarget.textContent;
    const url = socialLinks[site];
    if (url) {
      window.open(url, "_blank");
    }
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItemStyle = {
    fontFamily: "Courier Prime",
    fontSize: "24px",
    color: "#92E6A7",
    backgroundColor: "transparent",
  };

  return (
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
          {["About", "News", "Advantages", "Social Media"].map(
            (text, index) => (
              <Box
                key={index}
                component="a"
                onClick={handleClick}
                sx={{
                  textTransform: "none",
                  color: "#92E6A7",
                  fontWeight: "bold",
                  position: "relative",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  "&:hover .triangle": {
                    animation: "slideIn 6s ease-out forwards",
                    visibility: "visible",
                  },
                }}
              >
                <Typography
                  variant="h6"
                  component="span"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Courier Prime Bold",
                    fontSize: "24px",
                  }}
                >
                  {text}
                  <Box
                    className="triangle"
                    component="span"
                    sx={{
                      visibility: "hidden",
                      padding: "0 10px",
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
            )
          )}
          <Menu
            id="social-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "social-media-button",
            }}
            PaperProps={{
              style: {
                backgroundColor: "transparent",
                boxShadow: "none",
              },
            }}
          >
            {["Discord", "Medium", "X"].map((option) => (
              <MenuItem
                key={option}
                onClick={handleMenuClick}
                sx={menuItemStyle}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box sx={{ width: "120px" }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
