import React from "react";
import { Container, Box, Typography, Link, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { LinkedIn } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import Logo from "../assets/logo.jpeg";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#126984",
        color: "#fff",
        padding: "40px 0",
        position: "relative",
      }}
    >
      <Box
        sx={{
          height: "100px",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          borderBottomRightRadius: "50%",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            {/* <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              BUKKO DESIGN & CONSTRUCTION BUREAU
            </Typography> */}
            <Box>
              <Box component="img" src={Logo} sx={{ width: "50%", mt: 3 }} />
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginTop: "20px",
              }}
            >
              <Typography>
                Kisozi complex,
                <br />
                annex building, ground floor, rm 1
                <br />
                +256 782 500 843
                <br />
                <Link
                  href="mailto:bukkoconstructionbureau@gmail.com"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  bukkoconstructionbureau@gmail.com
                </Link>
                <br />
                <Link
                  href="mailto:info@bukkoconstructionbureau.com"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  info@bukkoconstructionbureau.com
                </Link>
              </Typography>
              <Box sx={{ display: "flex", mt: 2 }}>
                <Link
                  href="https://ug.linkedin.com/company/bukko-design-and-construction-bureau?trk=similar-pages"
                  target="_blank"
                >
                  <LinkedIn sx={{ mx: 0.5, color: "#fff" }} />
                </Link>
                <Link
                  href="https://www.facebook.com/Bukkoconstructionbureauug/"
                  target="_blank"
                >
                  <FacebookIcon sx={{ mx: 0.5, color: "#fff" }} />
                </Link>
                <Link
                  href="https://www.instagram.com/bukkoconstructionbureau?igsh=YTQwZjQ0NmI0OA=="
                  target="_blank"
                >
                  <InstagramIcon sx={{ mx: 0.5, color: "#fff" }} />
                </Link>
                <Link
                  href="https://www.tiktok.com/@bukkobureau?_t=8oBgWL2CwfG&amp;_r=1"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    icon={faTiktok}
                    style={{
                      margin: "0.5rem",
                      marginTop: "5px",
                      color: "#fff",
                    }}
                  />
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginTop: "20px",
              }}
            >
              <Link href="/" underline="none" color="inherit">
                HOME
              </Link>
              <Link href="/construction" underline="none" color="inherit">
                CONSTRUCTION
              </Link>
              <Link href="/architecture" underline="none" color="inherit">
                ARCHITECTURE
              </Link>
              <Link href="/renovations" underline="none" color="inherit">
                RENOVATIONS
              </Link>
              <Link href="/remodeling" underline="none" color="inherit">
                REMODELING
              </Link>
              <Link href="/about" underline="none" color="inherit">
                ABOUT
              </Link>
              <Link href="/contact" underline="none" color="inherit">
                CONTACT
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
