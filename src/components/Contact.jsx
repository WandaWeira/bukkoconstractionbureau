import React from "react";
import { Container, Grid, Typography, Box, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Ensure the images from leaflet package are correctly imported
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix the default marker icon issue with react-leaflet
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const ContactUs = () => {
  const position = [0.3192, 32.5761];

  return (
    <Container maxWidth="lg" sx={{ my: 12 }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            Contact details
          </Typography>
          <Box mt={2}>
            <Box display="flex" alignItems="center" mb={2}>
              <IconButton color="primary">
                <PhoneIcon />
              </IconButton>
              <Box ml={2}>
                <Typography variant="subtitle1">Phone</Typography>
                <Typography variant="body1">+256 782 500 843 | 0200 905 388</Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center" mb={2}>
              <IconButton color="primary">
                <EmailIcon />
              </IconButton>
              <Box ml={2}>
                <Typography variant="subtitle1">Email</Typography>
                <Typography variant="body1">
                  bukkoconstructionbureau@gmail.com
                  <br />
                  info@bukkoconstructionbureau.com
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <IconButton color="primary">
                <LocationOnIcon />
              </IconButton>
              <Box ml={2}>
                <Typography variant="subtitle1">Address</Typography>
                <Typography variant="body1">
                  Kisozi complex,
                  <br />
                  annex building, ground floor, rm 1
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: "450px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>Kisozi complex, annex building, ground floor, rm 1</Popup>
            </Marker>
          </MapContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
