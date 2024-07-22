import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import Logo1 from "../assets/attachment_27583864.png";
import Logo2 from "../assets/CATIC.png";
import Logo3 from "../assets/FB_IMG_1678698681858.jpg";
import Logo4 from "../assets/FB_IMG_1678698974581.jpg";
import Logo5 from "../assets/polad-uganda-logo.jpg";
import Logo6 from "../assets/royallogo.png";
import Logo7 from "../assets/state_house.png";
import Logo8 from "../assets/TALI LogoFinal_RGB.jpg";

const clientLogos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8];

const ScrollContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",  // Change to flex-start
  width: "100%",
  height: "auto",
  overflowX: "auto",
  whiteSpace: "nowrap",
  "&::-webkit-scrollbar": {
    display: "none",
  },
  "-ms-overflow-style": "none", // IE and Edge
  "scrollbar-width": "none", // Firefox
}));

const Logo = styled("img")(({ theme }) => ({
  height: "80px",
  margin: theme.spacing(0, 2),
  [theme.breakpoints.down("sm")]: {
    height: "40px",
    margin: theme.spacing(0, 1),
  },
}));

const OurClients = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: theme.spacing(4),
        overflow: "hidden" // Ensure the parent does not limit overflow
      }}
    >
      <ScrollContainer>
        {clientLogos.map((logo, index) => (
          <Logo key={index} src={logo} alt={`Client ${index + 1}`} />
        ))}
      </ScrollContainer>
    </Box>
  );
};

export default OurClients;
