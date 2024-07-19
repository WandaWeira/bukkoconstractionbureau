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
// import {
//   ArrowBackIosIcon,
//   ArrowForwardIosIcon,
//   EmailIcon,
// } from "@mui/icons-material";

const testimonials = [
  {
    name: "Mike Torello",
    title: "Executive Engineer",
    avatar: "src/assets/four.png", // replace with the actual path to the avatar image
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    name: "Rick Wright",
    title: "Executive Engineer",
    avatar: "src/assets/four.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    name: "Devon Miles",
    title: "Executive Engineer",
    avatar: "src/assets/four.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    name: "Mike Torello",
    title: "Executive Engineer",
    avatar: "src/assets/four.png", // replace with the actual path to the avatar image
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    name: "Rick Wright",
    title: "Executive Engineer",
    avatar: "src/assets/four.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
  },
  {
    name: "Devon Miles",
    title: "Executive Engineer",
    avatar: "src/assets/four.png",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
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
      <Box sx={{ backgroundColor: "#f6f6f6", py: 8 }}>
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
          <Typography
            variant="body1"
            align="center"
            gutterBottom
            sx={{ mt: 8 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
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
                      }}
                    />
                    <Typography
                      variant="body2"
                      align="center"
                      gutterBottom
                      sx={{ color: " #333" }}
                    >
                      {testimonials[currentIndex].content}
                    </Typography>
                    <Typography
                      variant="h6"
                      align="center"
                      gutterBottom
                      sx={{ color: "#333" }}
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
          textAlign: "center",
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
