import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import BlogLayout from "../components/Blogs";
import Testimonials from "../components/Testimonials";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Box sx={{ mt: 4, mb: 4, p: 6 }}>
        <Services />
        <BlogLayout />
      </Box>
      <Testimonials />
    </>
  );
};

export default Home;
