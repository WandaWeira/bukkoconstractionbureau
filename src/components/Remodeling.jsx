import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Modal,
  Backdrop,
  Fade,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import remodel0 from "../assets/remodelling.jpg";
import remodel1 from "../assets/remodel1.jpg";
import remodel2 from "../assets/remodel2.jpg";
import remodel3 from "../assets/remodel3.jpg";
import remodel4 from "../assets/remodel4.jpg";
import remodeling from "../assets/remodeling.jpeg";

const services = [
  {
    image: remodel0,
    // text: "A HIGHLY TRAINED HOME MAINTENANCE SERVICE, LICENSED & INSURED AND LOCATED ON SITE",
    // details: "Detailed information about the home maintenance service.",
  },
  {
    image: remodel2,
    // text: "A VACATION CONCIERGE TO ENSURE YOUR HOME IS READY FOR YOUR ARRIVAL AND TO LEND A HAND DURING YOUR STAY",
    // details: "Detailed information about the vacation concierge service.",
  },
  {
    image: remodel3,
    // text: "AN AWARD-WINNING Remodeling COMPANY FOR Remodeling, ADDITIONS AND NEW BUILDS",
    // details: "Detailed information about the Remodeling company.",
  },
  {
    image: remodel4,
    // text: "A LICENSED REAL ESTATE BROKERAGE TO WORK WITH YOU SHOULD YOUR REAL ESTATE NEEDS CHANGE",
    // details: "Detailed information about the real estate brokerage.",
  },
];

const Remodeling = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpen = (service) => {
    setSelectedService(service);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedService(null);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  return (
    <Container maxWidth="lg" sx={{ marginTop: "2.5rem", mb: 8 }}>
      <Box
        py={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{
            fontSize: {
              xs: "2rem", // font size for extra-small screens (mobile)
              sm: "3rem", // font size for small screens (tablets)
              md: "3rem", // font size for medium screens (small laptops)
              lg: "3rem", // font size for large screens (desktops)
            },
          }}
        >
          REMODELING
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" paragraph>
            At{" "}
            <span style={{ fontWeight: "bold" }}>
              Bukko Design and Construction Bureau Ltd
            </span>
            ., our remodeling services are designed to bring your unique vision
            to life, transforming existing spaces into personalized, functional,
            and stylish environments. We handle all aspects of remodeling, from
            conceptual design and planning to construction and finishing
            touches, ensuring a seamless and stress-free experience for our
            clients.
          </Typography>
          <Typography variant="body1" paragraph>
            Whether it's a kitchen makeover, bathroom upgrade, or a complete
            home transformation, our skilled team focuses on innovation,
            quality, and attention to detail. By blending modern design trends
            with your specific preferences, we create spaces that not only meet
            but exceed your expectations, enhancing both the beauty and value of
            your property.
          </Typography>
          <Typography variant="body1" paragraph>
            By blending modern design trends with your specific preferences, we
            create spaces that not only meet but exceed your expectations,
            enhancing both the beauty and value of your property.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={remodeling}
            alt="Luxury Home"
            style={{ width: "100%", borderRadius: "8px" }}
          />
        </Grid>
      </Grid>

      <Box
        py={8}
        textAlign="center"
        mt={8}
        sx={{ borderTop: "1px solid #333" }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Some of Our Projects
        </Typography>
      </Box>
      <Grid
        container
        spacing={4}
        sx={{ borderBottom: "1px solid #333" }}
        pb={5}
      >
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Paper
              style={{ position: "relative", cursor: "pointer" }}
              onClick={() => handleOpen(service)}
            >
              <img
                src={service.image}
                alt="Service"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
              {/* <Box
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  padding: isSmallScreen ? "8px" : "16px",
                  borderRadius: "8px",
                  textAlign: "center",
                }}
              >
                <Typography
                  variant="body2"
                  style={{ fontSize: isSmallScreen ? "0.8rem" : "1rem" }}
                >
                  {service.text}
                </Typography>
              </Box> */}
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: isSmallScreen ? 300 : 500,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
              borderRadius: "8px",
            }}
          >
            {selectedService && (
              <>
                <img
                  src={selectedService.image}
                  alt="Selected Service"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    marginBottom: "16px",
                  }}
                />
                <Typography variant="h6" component="h2" gutterBottom>
                  {selectedService.text}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  {selectedService.details}
                </Typography>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </Container>
  );
};

export default Remodeling;
