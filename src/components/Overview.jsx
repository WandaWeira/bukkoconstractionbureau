import React from "react";
import { Box, Container, Typography, useMediaQuery, Grid } from "@mui/material";
import one from "../assets/5.jpg";

const Overview = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return (
    <Box sx={{ mt: 8, backgroundColor: "#f6f6f6", p: { xs: 3, md: 12 } }}>
      <Typography
        variant="h3"
        component="h1"
        sx={{ marginBottom: "3rem", textAlign: "center" }}
      >
        Overview
      </Typography>
      <Grid container spacing={4} mb={8}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ textAlign: { xs: "center", md: "left" } }}
        >
          <Typography variant="body1" paragraph>
            Welcome to{" "}
            <span style={{ fontWeight: "bold" }}>
              Bukko Design and Construction Bureau Ltd.
            </span>
            , where innovation meets craftsmanship. With a rich legacy of
            excellence in architecture, construction, renovations, and
            remodeling, we are dedicated to transforming your vision into
            reality. Our commitment to quality and client satisfaction sets us
            apart in every project we undertake.
          </Typography>
          <Typography variant="body1" paragraph>
            Our expert team combines creative design, meticulous planning, and
            superior construction techniques to deliver exceptional results.
            Whether working on residential, commercial, or industrial projects,
            we ensure seamless integration of aesthetic appeal and functional
            excellence. At <span style={{ fontWeight: "bold" }}>Bukko</span>, we
            pride ourselves on our holistic approach, making sure every detail
            is thoughtfully considered.
          </Typography>
          <Typography variant="body1" paragraph>
            From building your dream home to renovating a cherished space or
            embarking on a large-scale commercial development,{" "}
            <span style={{ fontWeight: "bold" }}>Bukko</span> is your trusted
            partner. Our dedication to crafting excellence ensures that every
            project is handled with the utmost care and professionalism,
            reflecting our passion for perfection.
          </Typography>
          <Typography variant="body1" paragraph>
            Discover the <span style={{ fontWeight: "bold" }}>Bukko</span>{" "}
            difference – where every project is a masterpiece in the making.{" "}
            <span style={{ fontWeight: "bold" }}>
              Bukko Design and Construction Bureau Ltd.
            </span>
            , crafting excellence since day one. Experience the artistry and
            precision that have defined our legacy, and let us help you bring
            your dreams to life.
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
