import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import one from "../assets/one.png";
import two from "../assets/two.png";
import aboutsus from "../assets/aboutus.png";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: "2.5rem" }}>
        <Box py={4} textAlign="center">
          <Typography variant="h2" component="h2" gutterBottom>
            About us
          </Typography>
        </Box>

        <Grid container spacing={4} mb={8}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              <span style={{ fontWeight: "bold" }}>
                Bukko Design and Construction Bureau Ltd
              </span>{" "}
              is a leading firm known for its innovative designs and quality
              construction. Starting as a small team with a vision to redefine
              industry standards,{" "}
              <span style={{ fontWeight: "bold" }}>Bukko </span>
              quickly distinguished itself through its founders&#39; commitment
              to excellence, expanding from residential and commercial projects
              to industrial and public structures. Emphasizing creative yet
              functional design, meticulous construction, client-centered
              service, and sustainable practices,{" "}
              <span style={{ fontWeight: "bold" }}>Bukko</span> has built a
              reputation for delivering exceptional projects. Today, we continue
              to push industry boundaries, creating spaces that inspire, endure,
              and elevate everyday life.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={aboutsus}
              alt="Luxury Home"
              style={{ width: "100%", borderRadius: "8px" }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={4} mb={8} sx={{ marginTop: "2rem" }}>
          <Grid item xs={6} md={6} style={{ position: "relative" }}>
            <img src={one} alt="" style={{ width: "50%" }} />
            <span
              style={{
                position: "absolute",
                top: "30%",
                left: "30%",
                transform: "translate(-50%, -50%)",
                fontWeight: "bold",
                // backgroundColor: "rgba(255, 255, 255, 0.7)",
                padding: "5px",
                color: "#fff",
                fontSize: "1.8rem",
              }}
            >
              Our Mission
            </span>
            <Typography variant="body1" paragraph>
              At{" "}
              <span style={{ fontWeight: "bold" }}>
                Bukko Design and Construction Bureau Ltd
              </span>
              ., our mission is to transform visions into reality through
              innovative design, superior craftsmanship, and a commitment to
              client satisfaction. We strive to create functional, beautiful,
              and sustainable spaces that enhance the quality of life for our
              clients and communities.
            </Typography>
          </Grid>

          <Grid item xs={6} md={6} style={{ position: "relative" }}>
            <img src={two} alt="" style={{ width: "50%" }} />
            <span
              style={{
                position: "absolute",
                top: "30%",
                left: "30%",
                transform: "translate(-50%, -50%)",
                fontWeight: "bold",
                // backgroundColor: "rgba(255, 255, 255, 0.7)",
                padding: "5px",
                color: "#fff",
                fontSize: "1.8rem",
              }}
            >
              Our Vision
            </span>
            <Typography variant="body1" paragraph>
              Our vision is to be a leader in the architecture and construction
              industry, renowned for our creativity, quality, and integrity. We
              aim to continuously push the boundaries of design and
              construction, fostering a culture of excellence and sustainability
              while building lasting relationships with our clients.
            </Typography>
          </Grid>

          {/* <Grid item xs={6} md={6} style={{ position: "relative" }}>
            <img src={two} alt="" style={{ width: "50%" }} />
            <span
              style={{
                position: "absolute",
                top: "30%",
                left: "30%",
                transform: "translate(-50%, -50%)",
                fontWeight: "bold",
                // backgroundColor: "rgba(255, 255, 255, 0.7)",
                padding: "5px",
                color: "#fff",
                fontSize: "1.8rem",
              }}
            >
              Our Values
            </span>
            <Typography variant="body1" paragraph>
              <span style={{ fontWeight: "bold" }}>"IQSITE"</span> aligns with
              Bukko Design and Construction Bureau&#39;s commitment to{" "}
              <span style={{ fontWeight: "bold" }}>
                Innovation, Quality, Sustainability, Integrity, Excellence, and
                Teamwork,
              </span>
            </Typography>
          </Grid> */}
        </Grid>
      </Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          // justifyContent: "center",
        }}
      >
        <Grid item xs={6} md={6} style={{ position: "relative" }}>
          <img src={two} alt="" style={{ width: "50%" }} />
          <span
            style={{
              position: "absolute",
              top: "30%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontWeight: "bold",
              // backgroundColor: "rgba(255, 255, 255, 0.7)",
              padding: "5px",
              color: "#fff",
              fontSize: "1.8rem",
            }}
          >
            Our Values
          </span>
          <Typography
            variant="body1"
            paragraph
            sx={{
              // width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <span style={{ fontWeight: "bold" }}>"IQSITE"</span>aligns with
            Bukko Design and Construction Bureau&#39;s commitment to{" "}
            <span style={{ fontWeight: "bold" }}>
              Innovation, Quality, Sustainability, Integrity, Excellence, and
              Teamwork,
            </span>
          </Typography>
        </Grid>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          py: 4,
          backgroundColor: "#2E2E2E",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ mt: 6, color: "#fff" }}
        >
          GETTING IN TOUCH
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mt: 6, color: "#fff" }}>
          Would you like to ask us a question or do you need more information?
        </Typography>
        <Button
          variant="outlined"
          startIcon={<EmailIcon />}
          sx={{
            mt: 6,
            color: "#fff",
            border: "1px solid white",
            py: 3,
            px: 5,
            "&:hover": {
              backgroundColor: "#eb6319", // Change background color to orange on hover
              color: "#fff", // Text color remains white on hover
            },
          }}
        >
          CONTACT US
        </Button>
      </Box>
    </>
  );
};

export default About;
