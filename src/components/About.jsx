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
import aboutsus from "../assets/aboutus.jpg";

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
                Bukko Design and Construction Bureau Ltd.
              </span>{" "}
              is a leading firm renowned for its innovative designs and quality
              construction. Originally starting as a small team with a vision to
              redefine industry standards, Bukko quickly distinguished itself
              through the founders' commitment to excellence. This dedication
              enabled the company to expand its scope from residential and
              commercial projects to include industrial and public structures as
              well.
            </Typography>
            <Typography variant="body1" paragraph>
              Emphasizing creative yet functional design, Bukko integrates
              aesthetics with practicality in every project. Their meticulous
              construction methods ensure that each build meets the highest
              standards of quality and safety. This approach has helped Bukko
              build a reputation for delivering exceptional projects that not
              only meet but exceed client expectations.
            </Typography>
            <Typography variant="body1" paragraph>
              Client-centered service is a cornerstone of Bukko’s philosophy.
              They work closely with each client to understand their unique
              needs and goals, ensuring that the final outcome aligns perfectly
              with the client’s vision. Sustainable practices are also integral
              to their operations, incorporating eco-friendly materials and
              energy-efficient solutions to create environmentally responsible
              structures.
            </Typography>
            <Typography variant="body1" paragraph>
              Today, Bukko Design and Construction Bureau Ltd. continues to push
              industry boundaries, staying at the forefront of design and
              construction trends. Their unwavering commitment to innovation and
              excellence allows them to create spaces that inspire, endure, and
              elevate everyday life, solidifying their status as a leader in the
              industry.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={aboutsus}
              alt="Luxury Home"
              style={{
                width: "100%",
                borderRadius: "8px",
                objectFit: "cover",
                height: "90%",
              }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={4} mb={8} sx={{ marginTop: "6rem" }}>
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
        <Grid item xs={6} md={6} style={{ position: "relative" }} mb={12}>
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
      {/* <Box
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
      </Box> */}
    </>
  );
};

export default About;
