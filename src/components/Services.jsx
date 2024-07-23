import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  useMediaQuery,
  Container,
} from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import arch0 from "../assets/arch0.jpg";
import const0 from "../assets/contract45.jpeg";
import remodel0 from "../assets/remodel0.jpg";
import renovation0 from "../assets/removation0.jpeg";

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
    tabImage: one,
    contentImage: const0,
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
          Quality construction is at the heart of our business. Our skilled team
          handles every aspect of the building process with precision and care.
          Whether it&#39;s a new build, commercial development, or residential
          project, we deliver exceptional results on time and within budget,
          ensuring structural integrity and aesthetic excellence.
        </Typography>
        <Link to="/construction" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              background: `url(${one}) center center / cover no-repeat`,
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
        </Link>
      </>
    ),
  },
  {
    label: "ARCHITECTURE",
    tabImage: two,
    contentImage: arch0,
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
          Our architectural designs are a blend of creativity and functionality.
          We craft unique and sustainable structures that not only stand out but
          also integrate seamlessly with their surroundings. From initial
          concept to final blueprint, our architects work closely with you to
          ensure every detail reflects your vision and needs.
        </Typography>
        <Link to="/architecture" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              background: `url(${two}) center center / cover no-repeat`,
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
        </Link>
      </>
    ),
  },
  {
    label: "RENOVATIONS",
    tabImage: three,
    contentImage: renovation0,
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
          Revitalize your space with our comprehensive renovation services. We
          transform outdated or inefficient areas into modern, functional, and
          beautiful environments. Our team meticulously plans and executes each
          renovation project, enhancing both the value and enjoyment of your
          property.
        </Typography>
        <Link to="/renovations" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              background: `url(${three}) center center / cover no-repeat`,
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
        </Link>
      </>
    ),
  },
  {
    label: "REMODELING",
    tabImage: four,
    contentImage: remodel0,
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
          Our remodelling services are tailored to your lifestyle and
          preferences. Whether it&#39;s a kitchen upgrade, bathroom makeover, or
          a complete home transformation, we focus on innovation, quality, and
          attention to detail. We work with you to create personalized spaces
          that reflect your style and meet your everyday needs.
        </Typography>
        <Link to="/remodeling" style={{ textDecoration: "none" }}>
          <Box
            sx={{
              background: `url(${four}) center center / cover no-repeat`,
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
        </Link>
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
        // marginTop: "5rem",
        marginBottom: "5rem",
        // backgroundColor: "#f6f6f6",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: "3rem" }}>
        Our Expertise:
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
            // mt: "100px",
          }}
        >
          <Box
            component="img"
            src={tabData[tabIndex].contentImage}
            alt={tabData[tabIndex].label}
            sx={{
              width: isSmallScreen ? "100%" : "80%",
              height: isSmallScreen ? "500px" : "500px",
              marginRight: isSmallScreen ? "0" : "20px",
              marginBottom: isSmallScreen ? "20px" : "0",
              borderRadius: "10px",
              boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.2)",
              objectFit: "cover",
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
