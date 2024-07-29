import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import aboutsus from "../assets/aboutus.jpg";
import one from "../assets/one.png";
import two from "../assets/two.png";

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box>
      {/* Main Section */}
      <Box
        sx={{
          px: { xs: "2rem", sm: "4rem", lg: "8rem" },
          pb: "5rem",
          backgroundColor: "#f6f6f6",
        }}
      >
        <Box py={4} textAlign="center">
          <Typography variant="h2" component="h2" gutterBottom>
            About us
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body1" paragraph>
              <span style={{ fontWeight: "bold" }}>
                Bukko Design and Construction Bureau Ltd.
              </span>{" "}
              is a leading firm renowned for its innovative designs and quality
              construction. Originally starting as a small team with a vision to
              redefine industry standards, <span  style={{ fontWeight: "bold" }}>Bukko</span> quickly distinguished itself
              through the founders' commitment to excellence. This dedication
              enabled the company to expand its scope from residential and
              commercial projects to include industrial and public structures as
              well.
            </Typography>
            <Typography variant="body1" paragraph>
              Emphasizing creative yet functional design, <span  style={{ fontWeight: "bold" }}>Bukko</span> integrates
              aesthetics with practicality in every project. Their meticulous
              construction methods ensure that each build meets the highest
              standards of quality and safety. This approach has helped <span  style={{ fontWeight: "bold" }}>Bukko</span>
              build a reputation for delivering exceptional projects that not
              only meet but exceed client expectations.
            </Typography>
            <Typography variant="body1" paragraph>
              Client-centered service is a cornerstone of <span  style={{ fontWeight: "bold" }}>Bukko's</span> philosophy.
              They work closely with each client to understand their unique
              needs and goals, ensuring that the final outcome aligns perfectly
              with the client's vision. Sustainable practices are also integral
              to their operations, incorporating eco-friendly materials and
              energy-efficient solutions to create environmentally responsible
              structures.
            </Typography>
            <Typography variant="body1" paragraph>
              Today, <span  style={{ fontWeight: "bold" }}>Bukko Design and Construction Bureau Ltd</span>. continues to push
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
                height: "auto",
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Mission, Values, Vision Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          px: { xs: "2rem", sm: "4rem", lg: "8rem" },
          pt: "5rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: { xs: "100%", sm: "80%", md: "50%" },
          }}
        >
          <Grid item xs={12} sm={12} md={6} style={{ position: "relative" }}>
            <img src={one} alt="Our Mission" style={{ borderRadius: "8px" }} />
            <span
              style={{
                position: "absolute",
                top: "20%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontWeight: "bold",
                padding: "5px",
                color: "#fff",
                fontSize: "1.5rem",
                textAlign: "center",
              }}
            >
              Our Mission
            </span>
            <Typography variant="body1" paragraph sx={{ mt: 2 }}>
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
        </Box>

        <Grid container spacing={4} mb={8} sx={{ marginTop: "4rem" }}>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            style={{ position: "relative" }}
            mb={12}
          >
            <img src={two} alt="Our Values" style={{ borderRadius: "8px" }} />
            <span
              style={{
                position: "absolute",
                top: "35%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontWeight: "bold",
                padding: "5px",
                color: "#fff",
                fontSize: "1.5rem",
                textAlign: "center",
              }}
            >
              Our Values
            </span>
            <Typography
              variant="body1"
              paragraph
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                mt: 2,
              }}
            >
              <span style={{ fontWeight: "bold" }}>"IQSITE"</span> aligns with
              Bukko Design and Construction Bureau&#39;s commitment to{" "}
              <span style={{ fontWeight: "bold" }}>
                Innovation, Quality, Sustainability, Integrity, Excellence, and
                Teamwork,
              </span>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={6} style={{ position: "relative" }}>
            <img src={two} alt="Our Vision" style={{ borderRadius: "8px" }} />
            <span
              style={{
                position: "absolute",
                top: "25%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontWeight: "bold",
                padding: "5px",
                color: "#fff",
                fontSize: "1.5rem",
                textAlign: "center",
              }}
            >
              Our Vision
            </span>
            <Typography variant="body1" paragraph sx={{ mt: 2 }}>
              Our vision is to be a leader in the architecture and construction
              industry, renowned for our creativity, quality, and integrity. We
              aim to continuously push the boundaries of design and
              construction, fostering a culture of excellence and sustainability
              while building lasting relationships with our clients.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
