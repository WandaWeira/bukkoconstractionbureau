import React from "react";
import HeroSection from "../components/HeroSection";
import Services from "../components/Services";
import BlogLayout from "../components/Blogs";
import Testimonials from "../components/Testimonials";
import Overview from "../components/Overview";
import Clients from "../components/Clients";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Clients />
      <Overview />
      <Services />
      <Testimonials />
    </>
  );
};

export default Home;
