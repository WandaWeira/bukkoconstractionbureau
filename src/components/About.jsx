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
              management firm, we offer personalized luxury home management and
              maintenance services throughout the Charleston, Bluffton, Hilton
              Head areas. We provide unparalleled services including
              housekeeping, preventive maintenance, concierge services, and
              more, including other essential services as requested by the
              homeowner.
            </Typography>
            <Typography variant="body1" paragraph>
              Whether your asset is beachfront along one of the lowcountry’s
              sun-filled beaches, or behind the gates in the upscale community
              of Palmetto Bluff, as owners ourselves, we appreciate the
              investment you have made in your property. As such, we work to
              ensure all is safe and maintained during your absence.
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
