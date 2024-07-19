import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  useMediaQuery,
  Container,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";

// Styled Tab Component with full-width background image
const StyledTab = styled(Tab)(({ image }) => ({
  fontWeight: "bold",
  fontSize: "16px",
  color: "white",
  textTransform: "none",
  background: `url(${image}) center center / cover no-repeat`,
  width: "100%",
  minWidth: 0,
  position: "relative",
  padding: 0,
  "& .MuiTab-wrapper": {
    position: "relative",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  "&.Mui-selected": {
    border: "2px solid #333",
    borderRadius: "5px",
  },
}));

// Data for the tabs
const tabData = [
  {
    label: "CONSTRUCTION",
    tabImage: "src/assets/one.png",
    contentImage:
      "https://img.freepik.com/free-photo/construction-site-with-workers_23-2147622231.jpg?size=626&ext=jpg",
    content: (
      <>
        <Typography
          variant="h4"
          sx={{
            textTransform: "capitalize",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Construction
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          We're construction geniuses. There we said it. New builds, historic
          restoration, elaborate renovations, or investment rental properties -
          we've done it all ... and we've done it all to perfection. But don't
          just take our word for it - Check out our portfolio to see the
          difference!
        </Typography>
        <Box
          sx={{
            background: `url(src/assets/one.png) center center / cover no-repeat`,
            color: "white",
            textTransform: "none",
            marginTop: "20px",
            padding: "10px 20px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          View More Details
        </Box>
      </>
    ),
  },
  {
    label: "ARCHITECTURE",
    tabImage: "src/assets/two.png",
    contentImage:
      "https://img.freepik.com/free-photo/real-estate-concept_23-2147752423.jpg?size=626&ext=jpg",
    content: (
      <>
        <Typography
          variant="h4"
          sx={{
            textTransform: "capitalize",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          ARCHITECTURE
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          You know what they say, “time is money,” and we know you value yours,
          that’s why we designed our property management services to handle
          well, everything. Our bespoke services are tailored to deliver a
          5-star experience to our VIP clients so you can rest assured that
          under our care your property will be managed to pristine perfection.
        </Typography>
        <Box
          sx={{
            background: `url(src/assets/two.png) center center / cover no-repeat`,
            color: "white",
            textTransform: "none",
            marginTop: "20px",
            padding: "10px 20px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          View More Details
        </Box>
      </>
    ),
  },
  {
    label: "RENOVATIONS",
    tabImage: "src/assets/three.png",
    contentImage:
      "https://img.freepik.com/free-photo/house-by-beach_23-2147734323.jpg?size=626&ext=jpg",
    content: (
      <>
        <Typography
          variant="h4"
          sx={{
            textTransform: "capitalize",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          RENOVATIONS
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          You know what they say, “time is money,” and we know you value yours,
          that’s why we designed our property management services to handle
          well, everything. Our bespoke services are tailored to deliver a
          5-star experience to our VIP clients so you can rest assured that
          under our care your property will be managed to pristine perfection.
        </Typography>
        <Box
          sx={{
            background: `url(src/assets/three.png) center center / cover no-repeat`,
            color: "white",
            textTransform: "none",
            marginTop: "20px",
            padding: "10px 20px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          View More Details
        </Box>
      </>
    ),
  },
  {
    label: "REMODELING",
    tabImage: "src/assets/four.png",
    contentImage:
      "https://img.freepik.com/free-photo/cleaning-service-concept_23-2147760543.jpg?size=626&ext=jpg",
    content: (
      <>
        <Typography
          variant="h4"
          sx={{
            textTransform: "capitalize",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          REMODELING
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          You know what they say, “time is money,” and we know you value yours,
          that’s why we designed our property management services to handle
          well, everything. Our bespoke services are tailored to deliver a
          5-star experience to our VIP clients so you can rest assured that
          under our care your property will be managed to pristine perfection.
        </Typography>
        <Box
          sx={{
            background: `url(src/assets/four.png) center center / cover no-repeat`,
            color: "white",
            textTransform: "none",
            marginTop: "20px",
            padding: "10px 20px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          View More Details
        </Box>
      </>
    ),
  },
];

const Services = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    const interval = setInterval(() => {
      setTabIndex((prevIndex) => (prevIndex + 1) % tabData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "20px",
        marginTop: "5rem",
        marginBottom: "5rem",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "3rem" }}>
        WHAT'S YOUR NEXT MOVE?
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: "3rem" }}>
        View our Listings
      </Typography>
      <Tabs
        value={tabIndex}
        onChange={(e, newValue) => setTabIndex(newValue)}
        indicatorColor="none"
        textColor="primary"
        centered
        sx={{
          marginBottom: "20px",
          width: "100%", // Ensure the Tabs container spans the full width
        }}
        variant={isSmallScreen ? "scrollable" : "fullWidth"}
        scrollButtons={isSmallScreen ? "auto" : "off"}
      >
        {tabData.map((tab, index) => (
          <StyledTab key={index} label={tab.label} image={tab.tabImage} />
        ))}
      </Tabs>
      <Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "left",
            padding: "20px",
            mt: "100px",
          }}
        >
          <Box
            component="img"
            src={tabData[tabIndex].contentImage}
            alt={tabData[tabIndex].label}
            sx={{
              width: isSmallScreen ? "100%" : "500px",
              height: isSmallScreen ? "auto" : "500px",
              marginRight: isSmallScreen ? "0" : "20px",
              marginBottom: isSmallScreen ? "20px" : "0",
            }}
          />
          <Box sx={{ width: isSmallScreen ? "100%" : "50%" }}>
            {tabData[tabIndex].content}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;
