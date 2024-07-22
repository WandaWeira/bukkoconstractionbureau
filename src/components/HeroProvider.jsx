import React, { createContext, useContext, useState, useEffect } from "react";

const HeroContext = createContext();

export const useHero = () => useContext(HeroContext);

export const HeroProvider = ({ children }) => {
  const [currentImage, setCurrentImage] = useState("");

  const carouselData = [
    {
      image:
        "https://img.freepik.com/free-photo/civil-engineer-construction-worker-manager-holding-digital-tablet-blueprints-talking-planing-about-construction-site-cooperation-teamwork-concept_640221-156.jpg?size=626&ext=jpg",
      prefix: "Innovative",
      scriptText: "Designs,",
      suffix: "Quality Construction",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/construction-site-with-building-construction-crane-background_406811-25297.jpg?size=626&ext=jpg",
      prefix: "Innovative",
      scriptText: "Designs,",
      suffix: "Quality Construction",
    },
    {
      image:
        "https://img.freepik.com/free-photo/scene-construction-site-with-equipment_23-2151317290.jpg?size=626&ext=jpg",
      prefix: "Innovative",
      scriptText: "Designs,",
      suffix: "Quality Construction",
    },
    // Add more items as needed
  ];

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setCurrentImage(carouselData[index].image);
      index = (index + 1) % carouselData.length;
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <HeroContext.Provider value={{ currentImage }}>
      {children}
    </HeroContext.Provider>
  );
};
