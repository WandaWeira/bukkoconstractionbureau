import React from "react";
import { Box, Container, Typography, useMediaQuery, Grid } from "@mui/material";

const Overview = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Container sx={{mt: 8}}>
      <Grid container spacing={4} mb={8}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" component="h2" gutterBottom>
            Overview
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to Bukko Design and Construction Bureau Ltd., where
            innovation meets craftsmanship. With a legacy of excellence in
            architecture, construction, renovations, and remodeling, we are
            dedicated to transforming your vision into reality. Our expert team
            combines creative design, meticulous planning, and superior
            construction techniques to deliver exceptional results for
            residential, commercial, and industrial projects. At Bukko, we pride
            ourselves on our holistic approach, ensuring seamless integration of
            aesthetic appeal and functional excellence. Whether building your
            dream home, renovating a space, or undertaking a large-scale
            commercial development, our commitment to quality and client
            satisfaction sets us apart. Discover the Bukko difference – where
            every project is a masterpiece in the making. Bukko Design and
            Construction Bureau Ltd, Crafting Excellence Since Day One.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://images.unsplash.com/photo-1721403715005-cd5df8ab90ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
            alt="Luxury Home"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Overview;
