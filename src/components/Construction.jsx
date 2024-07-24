import React, { useState } from "react";
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
// import construct1 from "../assets/construct1.jpg"
import construct2 from "../assets/construction1.jpg";
import construct3 from "../assets/construction2.jpg";
import construct1 from "../assets/construction3.jpg";
import construct5 from "../assets/construction4.jpg";
// import contract0 from "../assets/contract45.jpeg";
import constr from "../assets/const.jpg";

const services = [
  {
    image: constr,
    text: "A HIGHLY TRAINED HOME MAINTENANCE SERVICE, LICENSED & INSURED AND LOCATED ON SITE",
    details: "Detailed information about the home maintenance service.",
  },
  {
    image: construct1,
    text: "A VACATION CONCIERGE TO ENSURE YOUR HOME IS READY FOR YOUR ARRIVAL AND TO LEND A HAND DURING YOUR STAY",
    details: "Detailed information about the vacation concierge service.",
  },
  {
    image: construct5,
    text: "AN AWARD-WINNING Construction COMPANY FOR Construction, ADDITIONS AND NEW BUILDS",
    details: "Detailed information about the Construction company.",
  },
  {
    image: construct2,
    text: "A LICENSED REAL ESTATE BROKERAGE TO WORK WITH YOU SHOULD YOUR REAL ESTATE NEEDS CHANGE",
    details: "Detailed information about the real estate brokerage.",
  },
];

const Construction = () => {
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
        <Typography variant="h3" component="h1" gutterBottom>
          CONSTRUCTION
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" paragraph>
            At Bukko Design and Construction Bureau Ltd., our construction
            services are defined by precision, quality, and a client-centric
            approach. We manage every aspect of the building process, from
            initial planning and permitting to final inspections and project
            handover.
          </Typography>
          <Typography variant="body1" paragraph>
            Our team of skilled professionals ensures that each project is
            executed with meticulous attention to detail, adhering to the
            highest standards of safety and craftsmanship.
          </Typography>
          <Typography variant="body1" paragraph>
            Whether constructing new commercial buildings, residential homes, or
            industrial facilities, we deliver exceptional results on time and
            within budget, transforming visions into enduring structures that
            inspire and function seamlessly.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src={construct3}
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
        {/* <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          <span style={{ color: "orange" }}>
            Our comprehensive offering includes:
          </span>
        </Typography> */}
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
              <Box
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
              </Box>
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
                    objectFit: "contain",
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

export default Construction;
