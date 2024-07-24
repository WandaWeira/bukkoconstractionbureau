import React from "react";
import { Box, Container, Typography, useMediaQuery, Grid } from "@mui/material";
import one from "../assets/5.jpg";

const Overview = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box sx={{ mt: 8, backgroundColor: "#f6f6f6", p: 12 }}>
      <Grid container spacing={4} mb={8}>
        <Grid item xs={12} md={6} sx={{ textAlign: "left" }}>
          <Typography variant="h4" sx={{ marginBottom: "3rem" }}>
            Overview
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to{" "}
            <span style={{ fontWeight: "bold" }}>
              Bukko Design and Construction Bureau Ltd
            </span>
            ., where innovation meets craftsmanship. With a legacy of excellence
            in architecture, construction, renovations, and remodeling, we are
            dedicated to transforming your vision into reality.
          </Typography>
          <Typography variant="body1" paragraph>
            Our expert team combines creative design, meticulous planning, and
            superior construction techniques to deliver exceptional results for
            residential, commercial, and industrial projects. At{" "}
            <span style={{ fontWeight: "bold" }}>Bukko</span>, we pride
            ourselves on our holistic approach, ensuring seamless integration of
            aesthetic appeal and functional excellence. Whether building your
            dream home, renovating a space, or undertaking a large-scale
            commercial development, our commitment to quality and client
            satisfaction sets us apart.
          </Typography>
          <Typography variant="body1" paragraph>
            Discover the <span style={{ fontWeight: "bold" }}>Bukko</span>{" "}
            difference – where every project is a masterpiece in the making.{" "}
            <span style={{ fontWeight: "bold" }}>
              Bukko Design and Construction Bureau Ltd
            </span>
            , Crafting Excellence Since Day One.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={one}
            alt="Luxury Home"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Overview;
