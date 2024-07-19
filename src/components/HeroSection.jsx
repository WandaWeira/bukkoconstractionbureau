import React, { useState, useEffect } from "react";
import { Box, Typography, Fade } from "@mui/material";
import { styled } from "@mui/system";

const HeroContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "100vh",
  width: "100%",
  overflow: "hidden",
}));

const ImageBackground = styled("img")({
  position: "absolute",
  top: "50%",
  left: "50%",
  minWidth: "100%",
  minHeight: "100%",
  width: "auto",
  height: "auto",
  transform: "translate(-50%, -50%)",
  objectFit: "cover",
});

const ContentOverlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.3)",
}));

const HeroText = styled(Typography)(({ theme }) => ({
  color: "white",
  textAlign: "center",
  fontSize: "3rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

const ScriptText = styled("span")({
  fontFamily: "'Brush Script MT', cursive",
  fontSize: "1.2em",
});

const carouselData = [
  {
    image:
      "https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?size=626&ext=jpg",
    prefix: "WE",
    scriptText: "build",
    suffix: "IN THE LOWCOUNTRY",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/construction-site-with-building-construction-crane-background_406811-25297.jpg?size=626&ext=jpg",
    prefix: "WE",
    scriptText: "design",
    suffix: "LUXURY HOMES",
  },
  {
    image:
      "https://img.freepik.com/free-photo/scene-construction-site-with-equipment_23-2151317290.jpg?size=626&ext=jpg",
    prefix: "WE",
    scriptText: "create",
    suffix: "BEAUTIFUL SPACES",
  },
  // Add more items as needed
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentItem = carouselData[currentIndex];

  return (
    <HeroContainer>
      <Fade in={true} timeout={1000}>
        <ImageBackground src={currentItem.image} alt="Hero Background" />
      </Fade>
      <ContentOverlay>
        <Fade in={true} timeout={1000}>
          <HeroText variant="h1">
            {currentItem.prefix}{" "}
            <ScriptText>{currentItem.scriptText}</ScriptText>{" "}
            {currentItem.suffix}
          </HeroText>
        </Fade>
      </ContentOverlay>
    </HeroContainer>
  );
};

export default HeroSection;
