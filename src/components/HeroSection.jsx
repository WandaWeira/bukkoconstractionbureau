import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import three from "../assets/3.jpg";
import four from "../assets/4.jpg";
import five from "../assets/5.jpg";

const HeroContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "100vh",
  width: "100%",
  overflow: "hidden",
}));

const ImageSlider = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  transition: "transform 1s ease-in-out",
});

const ImageSlide = styled("div")({
  minWidth: "100%",
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
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
    image: one,
    prefix: "Innovative",
    scriptText: "Designs,",
    suffix: "Quality Construction",
  },
  {
    image: two,
    prefix: "Innovative",
    scriptText: "Designs,",
    suffix: "Quality Construction",
  },
  {
    image: three,
    prefix: "Innovative",
    scriptText: "Designs,",
    suffix: "Quality Construction",
  },
  {
    image: four,
    prefix: "Innovative",
    scriptText: "Designs,",
    suffix: "Quality Construction",
  },
  {
    image: five,
    prefix: "Innovative",
    scriptText: "Designs,",
    suffix: "Quality Construction",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <HeroContainer>
      <ImageSlider style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {carouselData.map((item, index) => (
          <ImageSlide
            key={index}
            style={{ backgroundImage: `url(${item.image})` }}
          />
        ))}
      </ImageSlider>
      <ContentOverlay>
        <HeroText variant="h1">
          {carouselData[currentIndex].prefix}{" "}
          <ScriptText>{carouselData[currentIndex].scriptText}</ScriptText>{" "}
          {carouselData[currentIndex].suffix}
        </HeroText>
      </ContentOverlay>
    </HeroContainer>
  );
};

export default HeroSection;