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
import renovation1 from "../assets/renovation1.jpg";
import renovation2 from "../assets/renovation2.jpg";
import renovation3 from "../assets/renovation3.jpg";
import renovation4 from "../assets/renovatopn4.jpg";
import renovation5 from "../assets/renovation5.jpg";

const services = [
  {
    image: renovation2,
    // text: "A HIGHLY TRAINED HOME MAINTENANCE SERVICE, LICENSED & INSURED AND LOCATED ON SITE",
    // details: "Detailed information about the home maintenance service.",
  },
  {
    image: renovation3,
    // text: "A VACATION CONCIERGE TO ENSURE YOUR HOME IS READY FOR YOUR ARRIVAL AND TO LEND A HAND DURING YOUR STAY",
    // details: "Detailed information about the vacation concierge service.",
  },
  {
    image: renovation4,
    // text: "AN AWARD-WINNING RENOVATIONS COMPANY FOR RENOVATIONS, ADDITIONS AND NEW BUILDS",
    // details: "Detailed information about the renovations company.",
  },
  {
    image: renovation5,
    // text: "A LICENSED REAL ESTATE BROKERAGE TO WORK WITH YOU SHOULD YOUR REAL ESTATE NEEDS CHANGE",
    // details: "Detailed information about the real estate brokerage.",
  },
];

const Renovations = () => {
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
          RENOVATIONS
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" paragraph>
            At <span style={{fontWeight: "bold"}}>Bukko Design and Construction Bureau Ltd</span>., our renovation
            services are dedicated to revitalizing and transforming spaces to
            meet our clients' evolving needs. We specialize in upgrading
            outdated or inefficient areas into modern, functional, and
            aesthetically pleasing environments.
          </Typography>
          <Typography variant="body1" paragraph>
            Our expert team manages every phase of the renovation process, from
            initial assessment and design to execution and final touches,
            ensuring minimal disruption and maximum satisfaction. excellence and
            sustainability.
          </Typography>
          <Typography variant="body1" paragraph>
            Whether it's a residential home, commercial property, or industrial
            facility, we deliver high-quality renovations that enhance both the
            value and usability of the space, all while adhering to our
            commitment to excellence and sustainability.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={renovation1}
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

export default Renovations;
