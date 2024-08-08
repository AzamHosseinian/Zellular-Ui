import { Box, Grid } from "@mui/material";
import logo from "/assets/images/Footer/footer-logo.svg";

import discordIcon from "/assets/images/Footer/discord.svg";
import emailIcon from "/assets/images/Footer/email.svg";
import mediumIcon from "/assets/images/Footer/medium.svg";
import xIcon from "/assets/images/Footer/X.svg";

const Footer = () => {
  const socialMedias = [
    {
      name: "Medium",
      icon: mediumIcon,
      url: "https://medium.com/@zellular",
    },
    { name: "X", icon: xIcon, url: "https://x.com/zellular_xyz" },
    {
      name: "Discord",
      icon: discordIcon,
      url: "https://discord.com/invite/zellular",
    },
    { name: "Email", icon: emailIcon, url: "mailto:info@zellular.xyz" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#003A6C",
        color: "#FFFFFF",
      }}
    >
      <div className="flex flex-col md:flex-row gap-10 sm:gap-10 justify-between items-center px-5 py-8">
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={logo} alt="Logo" style={{ height: "30px" }} />
          </Box>
        </Grid>
        <Grid>
          <Box
            sx={{
              display: "flex",
            }}
          >
            {socialMedias.map((social, index) => (
              <a
                href={social.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "40px",
                    paddingTop: "5px",
                    position: "relative",
                    "&:hover .green-circle": {
                      display: "block",
                    },
                  }}
                >
                  <Box
                    className="green-circle"
                    sx={{
                      display: "none",
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
                    style={{ height: "22px", paddingLeft: "10px" }}
                  />
                </Box>
              </a>
            ))}
          </Box>
        </Grid>
      </div>
    </Box>
  );
};

export default Footer;
