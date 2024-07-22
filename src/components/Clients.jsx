import React from "react";
import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
// import clientLogos from './clientLogos'; // Array of client logo URLs

const clientLogos = [
  "/src/assets/bukkologo.png",
  "/src/assets/bukkologo.png",
  "/src/assets/bukkologo.png",
  "/src/assets/bukkologo.png",
  "/src/assets/bukkologo.png",
  "/src/assets/bukkologo.png",
  // Add more logos as needed
];

const ScrollContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
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
//   marginTop: "2rem",
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
        backgroundColor: "#126984",
      }}
    >
      {/* <Typography
        variant={isSmallScreen ? "h5" : "h4"}
        gutterBottom
        sx={{ color: "#fff" }}
      >
        Our Clients
      </Typography> */}
      <ScrollContainer>
        {clientLogos.map((logo, index) => (
          <Logo key={index} src={logo} alt={`Client ${index + 1}`} />
        ))}
      </ScrollContainer>
    </Box>
  );
};

export default OurClients;
