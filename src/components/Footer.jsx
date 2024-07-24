import React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Link,
  Container,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { LinkedIn } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#126984",
        p: 6,
        // marginTop: "2rem",
        color: "#fff"
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6">
            BUKKO DESIGN & CONSTRUCTION BUREAU
          </Typography>
          <Typography sx={{ display: "flex", flexDirection: "column" }}>
            Kisozi complex,
            <br />
            annex building, ground floor, rm 1
            <br />
            +256 782 500 843
            <br />
            <Link
              href="mailto:bukkoconstructionbureau@gmail.com"
              sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
            >
              bukkoconstructionbureau@gmail.com
            </Link>
            <Link
              href="mailto:info@bukkoconstructionbureau.com"
              sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
            >
              info@bukkoconstructionbureau.com
            </Link>
          </Typography>
          <Box sx={{ display: "flex", mt: 2 }}>
            <Link
              href="https://ug.linkedin.com/company/bukko-design-and-construction-bureau?trk=similar-pages"
              target="_blank"
            >
              <LinkedIn sx={{ mx: 0.5, color: "#126984" }} />
            </Link>
            <Link
              href="https://www.facebook.com/Bukkoconstructionbureauug/"
              target="_blank"
            >
              <FacebookIcon sx={{ mx: 0.5, color: "#126984" }} />
            </Link>
            <Link
              href="https://www.instagram.com/bukkoconstructionbureau?igsh=YTQwZjQ0NmI0OA=="
              target="_blank"
            >
              <InstagramIcon sx={{ mx: 0.5, color: "#126984" }} />
            </Link>
            <Link
              href="https://www.tiktok.com/@bukkobureau?_t=8oBgWL2CwfG&amp;_r=1"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faTiktok}
                style={{ margin: "0.5rem", marginTop: "5px", color: "#126984" }}
              />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Link
            href="/about"
            sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
          >
            <Typography variant="h6" gutterBottom>
              ABOUT
            </Typography>
          </Link>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {/* <Link
              href="/blog"
              variant="body2"
              sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
            >
              BLOG
            </Link> */}
            <Link
              href="/construction"
              variant="body2"
              sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
            >
              CONSTRUCTION
            </Link>
            <Link
              href="/architecture"
              variant="body2"
              sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
            >
              ARCHITECTURE
            </Link>
            <Link
              href="/renovations"
              variant="body2"
              sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
            >
              RENOVATIONS
            </Link>
            <Link
              href="/remodeling"
              variant="body2"
              sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
            >
              REMODELING
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Have Questions? We'd love to help!
          </Typography>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              required
              fullWidth
              margin="normal"
              label="First Name"
              variant="outlined"
            />
            <TextField
              required
              fullWidth
              margin="normal"
              label="Last Name"
              variant="outlined"
            />
            <TextField
              required
              fullWidth
              margin="normal"
              label="Email Address"
              variant="outlined"
            />
            <TextField
              required
              fullWidth
              margin="normal"
              label="Message"
              multiline
              rows={4}
              variant="outlined"
            />
            <Box sx={{ mt: 2 }}>
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "orange",
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: "#126984",
                  },
                }}
              >
                LET'S TALK
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4, borderTop: "1px solid #ddd", pt: 2 }}>
        <Typography variant="body2" color="textSecondary" align="center">
          © 2024 BUKKO DESIGN & CONSTRUCTION BUREAU, Privacy policy, Terms &
          Conditions
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
