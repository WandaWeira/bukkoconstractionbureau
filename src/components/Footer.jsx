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
// import PinterestIcon from "@mui/icons-material/Pinterest";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GoogleIcon from "@mui/icons-material/Google";
// import LinkIcon from "@mui/icons-material/Link";

// const Footer = () => {
//   return (
//     <Box
//       component="footer"
//       sx={{
//         bgcolor: "background.paper",
//         py: 6,
//         borderTop: "1px solid #ddd",
//         marginTop: "2rem",
//       }}
//     >
//       <Container maxWidth="lg">
//         <Grid container spacing={4}>
//           <Grid item xs={12} sm={6} md={3}>
//             <Typography variant="h6" gutterBottom>
//               Bukko Construction Bureau
//             </Typography>
//             <Typography>
//               50 Immigration Street, Suite 204
//               <br />
//               Charleston, SC 29403
//               <br />
//               +256 (773) 599-715
//               <br />
//               info@bukkoconstruction.com
//             </Typography>
//             <Box sx={{ display: "flex", mt: 2 }}>
//               <Link href="#">
//                 <PinterestIcon sx={{ mx: 0.5 }} />
//               </Link>
//               <Link href="#">
//                 <FacebookIcon sx={{ mx: 0.5 }} />
//               </Link>
//               <Link href="#">
//                 <TwitterIcon sx={{ mx: 0.5 }} />
//               </Link>
//               <Link href="#">
//                 <GoogleIcon sx={{ mx: 0.5 }} />
//               </Link>
//               <Link href="#">
//                 <LinkIcon sx={{ mx: 0.5 }} />
//               </Link>
//               <Link href="#">
//                 <InstagramIcon sx={{ mx: 0.5 }} />
//               </Link>
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={6} md={3}>
//             <Typography variant="h6" gutterBottom>
//               ABOUT
//             </Typography>
//             <Box sx={{ display: "flex", flexDirection: "column" }}>
//               <Link
//                 href="#"
//                 variant="body2"
//                 sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
//               >
//                 BLOG
//               </Link>
//               <Link
//                 href="#"
//                 variant="body2"
//                 sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
//               >
//                 CONSTRUCTION
//               </Link>
//               <Link
//                 href="#"
//                 variant="body2"
//                 sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
//               >
//                 REAL ESTATE
//               </Link>
//               <Link
//                 href="#"
//                 variant="body2"
//                 sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
//               >
//                 VACATION RENTALS
//               </Link>
//               <Link
//                 href="#"
//                 variant="body2"
//                 sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
//               >
//                 HOME SERVICES
//               </Link>
//               <Link
//                 href="#"
//                 variant="body2"
//                 sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
//               >
//                 CONTACT
//               </Link>
//               <Link
//                 href="#"
//                 variant="body2"
//                 sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
//               >
//                 SITEMAP
//               </Link>
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={12} md={6}>
//             <Typography variant="h6" gutterBottom>
//               Have Questions? We'd love to help!
//             </Typography>
//             <Box component="form" noValidate autoComplete="off">
//               <TextField
//                 required
//                 fullWidth
//                 margin="normal"
//                 label="First Name"
//                 variant="outlined"
//               />
//               <TextField
//                 required
//                 fullWidth
//                 margin="normal"
//                 label="Last Name"
//                 variant="outlined"
//               />
//               <TextField
//                 required
//                 fullWidth
//                 margin="normal"
//                 label="Email Address"
//                 variant="outlined"
//               />
//               <TextField
//                 required
//                 fullWidth
//                 margin="normal"
//                 label="Message"
//                 multiline
//                 rows={4}
//                 variant="outlined"
//               />
//               <Box sx={{ mt: 2 }}>
//                 <Button variant="contained" color="primary">
//                   LET'S TALK
//                 </Button>
//               </Box>
//             </Box>
//           </Grid>
//         </Grid>
//         <Box sx={{ mt: 4, borderTop: "1px solid #ddd", pt: 2 }}>
//           <Typography variant="body2" color="textSecondary" align="center">
//             © 2024 Bukko Construction Bureau, Privacy policy, Terms & Conditions
//           </Typography>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default Footer;

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
import PinterestIcon from "@mui/icons-material/Pinterest";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import LinkIcon from "@mui/icons-material/Link";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        p: 6,
        // borderTop: "1px solid #ddd",
        marginTop: "2rem",
      }}
    >
      {/* <Container maxWidth="lg"> */}
      <Grid container spacing={4}>
        <Grid item xs={12} textAlign="center" mb={2}>
          <Typography variant="h6" gutterBottom>
            INSTAGRAM
          </Typography>
          <Box sx={{ mt: 3, mb: 4 }}>
            <Link
              href="#"
              sx={{
                textDecoration: "none",
                color: "#FFA500", // Orange color
                fontSize: "1.5rem",
                border: "1px solid #ddd",
                p: "1rem",
                fontFamily: "'Dancing Script', cursive", // Calligraphy font
              }}
            >
              @bukkocontruction
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Bukko Construction
          </Typography>
          <Typography>
            50 Immigration Street, Suite 204
            <br />
            Charleston, SC 29403
            <br />
            +256 (773) 853-6055
            <br />
            info@bukko.com
          </Typography>
          <Box sx={{ display: "flex", mt: 2 }}>
            <Link href="#">
              <PinterestIcon sx={{ mx: 0.5 }} />
            </Link>
            <Link href="#">
              <FacebookIcon sx={{ mx: 0.5 }} />
            </Link>
            <Link href="#">
              <TwitterIcon sx={{ mx: 0.5 }} />
            </Link>
            <Link href="#">
              <GoogleIcon sx={{ mx: 0.5 }} />
            </Link>
            <Link href="#">
              <LinkIcon sx={{ mx: 0.5 }} />
            </Link>
            <Link href="#">
              <InstagramIcon sx={{ mx: 0.5 }} />
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            ABOUT
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Link
              href="#"
              variant="body2"
              sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
            >
              BLOG
            </Link>
            <Link
              href="#"
              variant="body2"
              sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
            >
              CONSTRUCTION
            </Link>
            <Link
              href="#"
              variant="body2"
              sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
            >
              REAL ESTATE
            </Link>
            <Link
              href="#"
              variant="body2"
              sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
            >
              VACATION RENTALS
            </Link>
            <Link
              href="#"
              variant="body2"
              sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
            >
              HOME SERVICES
            </Link>
            <Link
              href="#"
              variant="body2"
              sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
            >
              CONTACT
            </Link>
            <Link
              href="#"
              variant="body2"
              sx={{ textDecoration: "none", color: "inherit", mb: 1 }}
            >
              SITEMAP
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
              <Button variant="contained" color="primary">
                LET'S TALK
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ mt: 4, borderTop: "1px solid #ddd", pt: 2 }}>
        <Typography variant="body2" color="textSecondary" align="center">
          © 2024 Luxury Simplified LLC, Privacy policy, Terms & Conditions
        </Typography>
      </Box>
      {/* </Container> */}
    </Box>
  );
};

export default Footer;
