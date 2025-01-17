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
import arch1 from "../assets/arch1.jpg";
import arch2 from "../assets/architecture3.jpg";
import arch3 from "../assets/architecture4.jpg";
import arch4 from "../assets/architecture6.jpg";
import arch5 from "../assets/architecture5.jpg";

const services = [
  {
    image: arch2,
    // text: "A HIGHLY TRAINED HOME MAINTENANCE SERVICE, LICENSED & INSURED AND LOCATED ON SITE",
    // details: "Detailed information about the home maintenance service.",
  },
  {
    image: arch3,
    // text: "A VACATION CONCIERGE TO ENSURE YOUR HOME IS READY FOR YOUR ARRIVAL AND TO LEND A HAND DURING YOUR STAY",
    // details: "Detailed information about the vacation concierge service.",
  },
  {
    image: arch5,
    // text: "A LICENSED REAL ESTATE BROKERAGE TO WORK WITH YOU SHOULD YOUR REAL ESTATE NEEDS CHANGE",
    // details: "Detailed information about the real estate brokerage.",
  },
  {
    image: arch4,
    // text: "A LICENSED REAL ESTATE BROKERAGE TO WORK WITH YOU SHOULD YOUR REAL ESTATE NEEDS CHANGE",
    // details: "Detailed information about the real estate brokerage.",
  },
];

const Architecture = () => {
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
          ARCHITECTURE
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" paragraph>
            At{" "}
            <span style={{ fontWeight: "bold" }}>
              Bukko Design and Construction Bureau Ltd
            </span>
            ., our architecture services blend creativity with functionality to
            create innovative and sustainable designs.
          </Typography>
          <Typography variant="body1" paragraph>
            Our team of experienced architects works closely with clients to
            understand their vision and translate it into thoughtfully crafted
            spaces that are both aesthetically pleasing and highly functional.
            From conceptual design and detailed planning to the final blueprint,
            we ensure every project reflects our commitment to quality and
            precision.
          </Typography>
          <Typography variant="body1" paragraph>
            Whether designing residential, commercial, or public spaces, we
            prioritize integrating cutting-edge technology and sustainable
            practices to deliver environments that are not only beautiful but
            also environmentally responsible.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={arch1}
            alt="Luxury Home"
            style={{
              width: "100%",
              borderRadius: "8px",
              objectFit: "contain",
            }}
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
                style={{ width: "100%", borderRadius: "8px" }}
              />
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
              width: isSmallScreen ? "90%" : 500,
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

export default Architecture;
