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
    text: "AN AWARD-WINNING CONSTRUCTION COMPANY FOR RENOVATIONS, ADDITIONS AND NEW BUILDS",
  },
  {
    image:
      "https://images.unsplash.com/photo-1721403715005-cd5df8ab90ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    text: "A LICENSED REAL ESTATE BROKERAGE TO WORK WITH YOU SHOULD YOUR REAL ESTATE NEEDS CHANGE",
  },
];

const Architecture = () => {
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
      {/* //Third section */}

      <Box py={4} textAlign="center">
        <Typography variant="h6" component="h2" gutterBottom>
          DETAIL DRIVEN AND LOCALLY-BASED BUILDER
        </Typography>
      </Box>
      <Box textAlign="center" py={2}>
        <Typography variant="subtitle1" color="textSecondary" sx={{ my: 4 }}>
          LOCATED WITHIN THE GATES OF{" "}
          <span style={{ color: "orange" }}>PALMETTO BLUFF</span>, our
          site-based, responsive team includes a licensed General Contractor
          with an ‘A’ Grade status and approval in place for operation in the
          community by the Palmetto Bluff DRB. Our Home Services team can easily
          assist clients in obtaining a quote from our internal construction
          firm, <span style={{ color: "orange" }}>SIMPLIFIED CONSTRUCTION</span>
          , on your home improvement projects.
        </Typography>
      </Box>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box textAlign="center" py={2}>
            <img
              src="https://images.unsplash.com/photo-1721403715005-cd5df8ab90ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
              alt="New Construction"
              style={{ width: "100px" }}
            />
            <Typography variant="h6" component="h3" gutterBottom>
              NEW CONSTRUCTION
            </Typography>
            <Typography variant="body1" color="textSecondary">
              No project is too big or too small for our construction team and,
              as a client of Luxury Simplified Homes Services, you’ll receive
              priority status for estimating and quickly getting your
              construction project underway.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box textAlign="center" py={2}>
            <img
              src="https://images.unsplash.com/photo-1721403715005-cd5df8ab90ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
              alt="Renovations"
              style={{ width: "100px" }}
            />
            <Typography variant="h6" component="h3" gutterBottom>
              RENOVATIONS
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Whether our team has built your home, or you have hired us to
              manage your existing residence, our combined years of experience
              can take stress out of handling the upkeep of your valuable
              investment.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box py={4} textAlign="center" my={4}>
        <Button
          variant="outlined"
          color="primary"
          sx={{ border: "1px solid #333", color: "#333" }}
        >
          GET TO KNOW SIMPLIFIED CONSTRUCTION
        </Button>
      </Box>
      <Box
        textAlign="center"
        py={2}
        sx={{ borderBottom: "1px solid #333", pb: 8 }}
      >
        <Typography variant="body2" color="textSecondary">
          We have fostered deep relationships with the area’s most reputable
          vendors and maintenance specialists.{" "}
          <span style={{ color: "orange" }}>
            LUXURY SIMPLIFIED HOME SERVICES
          </span>{" "}
          allows homeowners to take full advantage, offering access to the best
          local professionals.
        </Typography>
      </Box>
      {/* ////Last section */}

      <Box py={4} textAlign="center">
        <Typography variant="h6" component="h2" gutterBottom>
          AN ELEVATED EXPERIENCE
        </Typography>
      </Box>

      <Grid container spacing={4} mb={8}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" paragraph>
            <span style={{ color: "orange" }}>As a full-spectrum property</span>{" "}
            management firm, we offer personalized luxury home management and
            maintenance services throughout the Charleston, Bluffton, Hilton
            Head areas. We provide unparalleled services including housekeeping,
            preventive maintenance, concierge services, and more, including
            other essential services as requested by the homeowner.
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

      <Container>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ pt: 8, borderTop: "1px solid #333", mb: 4 }}
        >
          BESPOKE SERVICES
        </Typography>

        <Typography variant="body1" paragraph>
          AT LUXURY SIMPLIFIED HOME SERVICES, we combine our construction and
          maintenance expertise with our bespoke concierge services, which
          include housekeeper management, errand running, grocery shopping, home
          organization, event planning, holiday decor and preparations, and much
          more. We are committed to knowing each of client's personality and
          their preferences before they arrive, so that their stay is easy and
          seamless from day one.
        </Typography>

        <Grid container spacing={2}>
          {listItems.map((item, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <List disablePadding>
                <ListItem sx={{ py: 0 }}>
                  <ListItemIcon sx={{ minWidth: "24px" }}>
                    <FiberManualRecordIcon sx={{ fontSize: 8 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{ variant: "body2" }}
                  />
                </ListItem>
              </List>
            </Grid>
          ))}
        </Grid>

        <Typography variant="body2" sx={{ mt: 4 }}>
          There's simply no limit to the tasks that our property managers can
          assist you with.
        </Typography>
      </Container>
    </Container>
  );
};

export default Architecture;
