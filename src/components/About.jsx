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

const people = [
  {
    name: "CHRIS LEIGH-JONES",
    title: "principal",
    imageUrl:
      "https://images.unsplash.com/photo-1721403715005-cd5df8ab90ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  },
  {
    name: "SEBRINA LEIGH-JONES",
    title: "co-founder & vice president",
    imageUrl:
      "https://images.unsplash.com/photo-1721403715005-cd5df8ab90ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  },
  {
    name: "MARY MOORE",
    title: "brand strategist & content manager",
    imageUrl:
      "https://images.unsplash.com/photo-1721403715005-cd5df8ab90ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
  },
];

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Container maxWidth="lg">
        <Box py={4} textAlign="center">
          <Typography variant="h3" component="h2" gutterBottom>
            About us
          </Typography>
        </Box>

        <Grid container spacing={4} mb={8}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" component="h2" gutterBottom>
              ONE STOP SHOP
            </Typography>
            <Typography variant="body1" paragraph>
              <span style={{ color: "orange" }}>
                As a full-spectrum property
              </span>{" "}
              Bukko Design and Construction Bureau Ltd is a leading firm known
              for its innovative designs and quality construction. Starting as a
              small team with a vision to redefine industry standards, Bukko
              quickly distinguished itself through its founders&#39; commitment
              to excellence, expanding from residential and commercial projects
              to industrial and public structures. Emphasizing creative yet
              functional design, meticulous construction, client-centered
              service, and sustainable practices, Bukko has built a reputation
              for delivering exceptional projects. Today, we continue to push
              industry boundaries, creating spaces that inspire, endure, and
              elevate everyday life.
            </Typography>
            <Typography variant="body1" paragraph>
              <span style={{ fontWeight: "bold" }}>Our Mission: </span> At Bukko
              Design and Construction Bureau Ltd., our mission is to transform
              visions into reality through innovative design, superior
              craftsmanship, and a commitment to client satisfaction. We strive
              to create functional, beautiful, and sustainable spaces that
              enhance the quality of life for our clients and communities.<br />
              <span style={{ fontWeight: "bold" }}>Our Vision: </span> Our
              vision is to be a leader in the architecture and construction
              industry, renowned for our creativity, quality, and integrity. We
              aim to continuously push the boundaries of design and
              construction, fostering a culture of excellence and sustainability
              while building lasting relationships with our clients.<br />
              <span style={{ fontWeight: "bold" }}>Our Values: </span>
              <span style={{ fontWeight: "bold" }}>"IQSITE"</span> aligns with
              Bukko Design and Construction Bureau&#39;s commitment to{" "}
              <span style={{ fontWeight: "bold" }}>
                Innovation, Quality, Sustainability, Integrity, Excellence, and
                Teamwork,
              </span>
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

        <Box py={4} textAlign="center">
          <Typography variant="h4" component="h2" gutterBottom>
            Meet the Team
          </Typography>
        </Box>

        {/* team */}
        {/* <Container maxWidth="lg" sx={{ py: 4 }}> */}
        <Grid container spacing={3} mb={8}>
          {people.map((person, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardMedia
                  component="img"
                  image={person.imageUrl}
                  alt={person.name}
                  sx={{
                    height: isMobile ? 200 : 250,
                    objectFit: "cover",
                  }}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: "bold" }}
                  >
                    {person.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {person.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* </Container> */}
      </Container>
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
