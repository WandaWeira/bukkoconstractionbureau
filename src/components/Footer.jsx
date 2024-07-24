// import React from "react";
// import {
//   Box,
//   Typography,
//   Grid,
//   TextField,
//   Button,
//   Link,
//   Container,
// } from "@mui/material";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import { LinkedIn } from "@mui/icons-material";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTiktok } from "@fortawesome/free-brands-svg-icons";

// const Footer = () => {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         bgcolor: "#126984",
//         p: 6,
//         // marginTop: "2rem",
//         color: "#fff",
//       }}
//     >
//       <Grid container spacing={4}>
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="h6">
//             BUKKO DESIGN & CONSTRUCTION BUREAU
//           </Typography>
//           <Typography sx={{ display: "flex", flexDirection: "column" }}>
//             Kisozi complex,
//             <br />
//             annex building, ground floor, rm 1
//             <br />
//             +256 782 500 843
//             <br />
//             <Link
//               href="mailto:bukkoconstructionbureau@gmail.com"
//               sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
//             >
//               bukkoconstructionbureau@gmail.com
//             </Link>
//             <Link
//               href="mailto:info@bukkoconstructionbureau.com"
//               sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
//             >
//               info@bukkoconstructionbureau.com
//             </Link>
//           </Typography>
//           <Box sx={{ display: "flex", mt: 2 }}>
//             <Link
//               href="https://ug.linkedin.com/company/bukko-design-and-construction-bureau?trk=similar-pages"
//               target="_blank"
//             >
//               <LinkedIn sx={{ mx: 0.5, color: "#126984" }} />
//             </Link>
//             <Link
//               href="https://www.facebook.com/Bukkoconstructionbureauug/"
//               target="_blank"
//             >
//               <FacebookIcon sx={{ mx: 0.5, color: "#126984" }} />
//             </Link>
//             <Link
//               href="https://www.instagram.com/bukkoconstructionbureau?igsh=YTQwZjQ0NmI0OA=="
//               target="_blank"
//             >
//               <InstagramIcon sx={{ mx: 0.5, color: "#126984" }} />
//             </Link>
//             <Link
//               href="https://www.tiktok.com/@bukkobureau?_t=8oBgWL2CwfG&amp;_r=1"
//               target="_blank"
//             >
//               <FontAwesomeIcon
//                 icon={faTiktok}
//                 style={{ margin: "0.5rem", marginTop: "5px", color: "#126984" }}
//               />
//             </Link>
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={6} md={3}>
//           <Link
//             href="/about"
//             sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
//           >
//             <Typography variant="h6" gutterBottom>
//               ABOUT
//             </Typography>
//           </Link>

//           <Box sx={{ display: "flex", flexDirection: "column" }}>
//             {/* <Link
//               href="/blog"
//               variant="body2"
//               sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
//             >
//               BLOG
//             </Link> */}
//             <Link
//               href="/construction"
//               variant="body2"
//               sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
//             >
//               CONSTRUCTION
//             </Link>
//             <Link
//               href="/architecture"
//               variant="body2"
//               sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
//             >
//               ARCHITECTURE
//             </Link>
//             <Link
//               href="/renovations"
//               variant="body2"
//               sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
//             >
//               RENOVATIONS
//             </Link>
//             <Link
//               href="/remodeling"
//               variant="body2"
//               sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
//             >
//               REMODELING
//             </Link>
//           </Box>
//         </Grid>
//         <Grid item xs={12} sm={12} md={6}>
//           <Typography variant="h6" gutterBottom>
//             Have Questions? We'd love to help!
//           </Typography>
//           <Box component="form" noValidate autoComplete="off">
//             <TextField
//               required
//               fullWidth
//               margin="normal"
//               label="First Name"
//               variant="outlined"
//             />
//             <TextField
//               required
//               fullWidth
//               margin="normal"
//               label="Last Name"
//               variant="outlined"
//             />
//             <TextField
//               required
//               fullWidth
//               margin="normal"
//               label="Email Address"
//               variant="outlined"
//             />
//             <TextField
//               required
//               fullWidth
//               margin="normal"
//               label="Message"
//               multiline
//               rows={4}
//               variant="outlined"
//             />
//             <Box sx={{ mt: 2 }}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 sx={{
//                   backgroundColor: "orange",
//                   color: "#fff",
//                   "&:hover": {
//                     backgroundColor: "#126984",
//                   },
//                 }}
//               >
//                 LET'S TALK
//               </Button>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//       <Box sx={{ mt: 4, borderTop: "1px solid #ddd", pt: 2 }}>
//         <Typography
//           variant="body2"
//           color="textSecondary"
//           align="center"
//           sx={{ color: "#fff" }}
//         >
//           © 2024 BUKKO DESIGN & CONSTRUCTION BUREAU, Privacy policy, Terms &
//           Conditions
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default Footer;

// App.js
import React from "react";
import { Container, Box, Typography, Button, Link, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { LinkedIn } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#126984",
        color: "#fff",
        padding: "40px 0",
        position: "relative",
        // mt: 8
      }}
    >
      <Box
        sx={{
          // backgroundColor: '#FFD700',
          height: "100px",
          width: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          borderBottomRightRadius: "50%",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              BUKKO DESIGN & CONSTRUCTION BUREAU
            </Typography>
            <Box>
              <Typography
                sx={{ display: "flex", flexDirection: "column", mt: 3 }}
              >
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
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "flex-start",
                marginTop: "20px",
              }}
            >
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
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
