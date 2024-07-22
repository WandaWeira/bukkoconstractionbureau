// import React from 'react'

// const Architecture = () => {
//   return (
//     <div>Architecture</div>
//   )
// }

// export default Architecture

import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  ListItemIcon,
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const listItems = [
  "Weekly Absentee Home Care Check with Summary Report",
  "Vendor Services (cleaning, landscaper, pool maintenance, etc)",
  "Renovation/ Project Management/General Contractor",
  "Pre-Arrival Home Setup",
  "Delivery Acceptance/ Errand Running",
  "Departure Home Check",
  "Grocery Shopping/ Delivery",
  "Home Organization & Cleaning",
  "Travel Planning",
];

const services = [
  {
    image:
      "https://images.unsplash.com/photo-1721403715005-cd5df8ab90ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    text: "A HIGHLY TRAINED HOME MAINTENANCE SERVICE, LICENSED & INSURED AND LOCATED ON SITE",
  },
  {
    image:
      "https://images.unsplash.com/photo-1721403715005-cd5df8ab90ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    text: "A VACATION CONCIERGE TO ENSURE YOUR HOME IS READY FOR YOUR ARRIVAL AND TO LEND A HAND DURING YOUR STAY",
  },
  {
    image:
      "https://images.unsplash.com/photo-1721403715005-cd5df8ab90ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    text: "AN AWARD-WINNING Renovations COMPANY FOR RENOVATIONS, ADDITIONS AND NEW BUILDS",
  },
  {
    image:
      "https://images.unsplash.com/photo-1721403715005-cd5df8ab90ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    text: "A LICENSED REAL ESTATE BROKERAGE TO WORK WITH YOU SHOULD YOUR REAL ESTATE NEEDS CHANGE",
  },
];

const Renovations = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container maxWidth="lg">
      <Box
        py={4}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          LUXURY SIMPLIFIED HOME SERVICES
        </Typography>
        <Typography
          variant="h6"
          component="h2"
          color="textSecondary"
          gutterBottom
        >
          HIGH-TOUCH <span style={{ color: "orange" }}>home care</span> FOR YOUR
          PEACE OF MIND
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" paragraph>
            As a full-spectrum property management firm, we offer personalized
            luxury home management and maintenance services throughout the
            Charleston, Bluffton, Hilton Head areas. We provide unparalleled
            services including housekeeping, preventive maintenance, concierge
            services, and more, including other essential services as requested
            by the homeowner.
          </Typography>
          <Typography variant="body1" paragraph>
            Whether your asset is beachfront along one of the lowcountry’s
            sun-filled beaches, or behind the gates in the upscale community of
            Palmetto Bluff, as owners ourselves, we appreciate the investment
            you have made in your property. As such, we work to ensure all is
            safe and maintained during your absence.
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
      {/* ///second rection.  */}

      <Box
        py={4}
        textAlign="center"
        mt={8}
        mb={8}
        sx={{ borderTop: "1px solid #333" }}
      >
        <Typography variant="h5" component="h2" gutterBottom>
          ALL UNDER ONE ROOF
        </Typography>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          <span style={{ color: "orange" }}>
            Our comprehensive offering includes:
          </span>
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
            <Paper style={{ position: "relative" }}>
              <img
                src={service.image}
                alt="Service"
                style={{ width: "100%", borderRadius: "8px" }}
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
    </Container>
  );
};

export default Renovations;
