import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Grid,
  Typography,
  Button,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EmailIcon from "@mui/icons-material/Email";
import Logo1 from "../assets/seyani.jpg";
import Logo2 from "../assets/CATIC.png";
import Logo3 from "../assets/FB_IMG_1678698681858.jpg";
import Logo4 from "../assets/FB_IMG_1678698974581.jpg";
import Logo5 from "../assets/polad-uganda-logo.jpg";
import Logo6 from "../assets/royallogo.png";
import Logo7 from "../assets/state_house.png";
import Logo8 from "../assets/TALI LogoFinal_RGB.jpg";

const testimonials = [
  {
    name: "Mr. Edwin Ssebunya",
    title: "CEO, Royal Suites Hotel Bugolobi",
    avatar: Logo6, // replace with the actual path to the avatar image
    content:
      "Working with Bukko Design and Construction Bureau Ltd. for the renovation and interior design of Royal Suites Hotel Bugolobi has been a truly exceptional experience. Their innovative approach and meticulous attention to detail have transformed our hotel into a stunning and functional space that exceeds our expectations. From concept to completion, Bukko's commitment to quality and client satisfaction was evident in every aspect of the project. The team’s creativity and professionalism have greatly enhanced our guest experience, and we are proud to showcase their work. We highly recommend Bukko for their outstanding craftsmanship and dedication to excellence.",
  },
  {
    name: "Mr. John",
    title: "Kawuku residential house remodeling",
    avatar: "",
    content:
      "I am thrilled with the results of the remodeling project Bukko Design and Construction Bureau Ltd. completed for my residential house. Their team transformed my home into a luxurious and sophisticated space, exceeding all my expectations. From the initial design to the final touches, Bukko's attention to detail and commitment to quality were evident. The seamless integration of modern amenities and elegant design elements has truly elevated my living experience. I couldn’t be more satisfied with their work and highly recommend Bukko for anyone looking to enhance their home with a touch of luxury.",
  },
  {
    name: "Mr. Bharat Halai",
    title: "Operations Manager at Seyani Brothers International, Uganda.",
    avatar: Logo1, // replace with the actual path to the avatar image
    content:
      "Our collaboration with Bukko Design and Construction Bureau Ltd. on various subcontracts has been highly satisfactory. Bukko consistently demonstrates a high level of professionalism and expertise in every project. Their attention to detail, timely execution, and commitment to quality have greatly contributed to the success of our ventures. The team’s ability to deliver outstanding results and their proactive approach to addressing challenges make them a valuable partner. We look forward to continuing our successful partnership with Bukko and recommend them for their exceptional service and reliability.",
  },
  {
    name: "",
    title: "Topline Investments Ltd.",
    avatar: "",
    content:
      "Partnering with Bukko Design and Construction Bureau Ltd. for our commercial projects in Uganda has been a remarkable experience. Their architectural designs have brought a new level of sophistication and functionality to our developments. Bukko's innovative approach and keen understanding of our needs have resulted in designs that not only meet but exceed our expectations. Their commitment to excellence and attention to detail have been instrumental in the success of our projects. We highly recommend Bukko for their outstanding architectural expertise and dedication to delivering top-quality results.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  return (
    <>
      <Box sx={{ py: 8, backgroundColor: "#f6f6f6" }}>
        <Container>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ color: "#FFA000" }}
          >
            TESTIMONIALS
          </Typography>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{ color: "#FFA000", fontWeight: "bold" }}
          >
            What Our Clients Say
          </Typography>
          <Box position="relative" width="100%">
            <Grid container justifyContent="center">
              <Grid item xs={12} sm={8} md={6}>
                <Card
                  sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
                    borderRadius: "16px",
                    color: "#FFFFFF",
                    padding: "20px",
                    mt: 8,
                  }}
                >
                  <CardContent>
                    <Avatar
                      alt={testimonials[currentIndex].name}
                      src={testimonials[currentIndex].avatar}
                      sx={{
                        width: 56,
                        height: 56,
                        mx: "auto",
                        mb: 2,
                        border: "2px solid #FFA000",
                        objectFit: "cover",
                      }}
                    />
                    <Typography
                      variant="body2"
                      // align="center"
                      gutterBottom
                      sx={{ color: " #333", fontStyle: "italic" }}
                    >
                      {testimonials[currentIndex].content}
                    </Typography>
                    <Typography
                      variant="h6"
                      align="center"
                      gutterBottom
                      sx={{ color: "#333", fontWeight: "bold" }}
                    >
                      {testimonials[currentIndex].name}
                    </Typography>
                    <Typography
                      variant="body2"
                      align="center"
                      gutterBottom
                      sx={{ color: " #333" }}
                    >
                      {testimonials[currentIndex].title}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
            <IconButton
              onClick={handlePrev}
              sx={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                color: "#333",
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <IconButton
              onClick={handleNext}
              sx={{
                position: "absolute",
                top: "50%",
                right: "10px",
                transform: "translateY(-50%)",
                color: "#333",
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>
      {/* <Container maxWidth="sm"> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // textAlign: "center",
          py: 8,
          backgroundColor: "#2E2E2E",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ mt: 6, color: "#fff" }}
        >
          GETTING IN TOUCH
        </Typography>
        <Typography variant="body1" gutterBottom sx={{ mt: 6, color: "#fff" }}>
          Would you like to ask us a question or do you need more information?
        </Typography>
        <Button
          variant="outlined"
          startIcon={<EmailIcon />}
          sx={{
            mt: 6,
            color: "#fff",
            border: "1px solid white",
            py: 3,
            px: 5,
            "&:hover": {
              backgroundColor: "#eb6319", // Change background color to orange on hover
              color: "#fff", // Text color remains white on hover
            },
          }}
        >
          CONTACT US
        </Button>
      </Box>
      {/* </Container> */}
    </>
  );
};

export default Testimonials;
