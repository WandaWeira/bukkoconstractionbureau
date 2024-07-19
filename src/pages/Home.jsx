import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import { Container, Box } from "@mui/material";
import BlogLayout from "../components/Blogs";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <Box sx={{ mt: 4, mb: 4, p: 6 }}>
        <Services />
        <BlogLayout />
      </Box>
      <Testimonials />
      <Footer />
    </>
  );
};

export default Home;
