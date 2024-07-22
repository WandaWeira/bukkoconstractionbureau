// src/BlogLayout.js

import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Container,
} from "@mui/material";
import { styled } from "@mui/system";

const blogPosts = [
  {
    title:
      "Charleston SC: Bringing Your Boat to Warmer Climates for the Winter",
    category: "Discover Charleston",
    imageUrl:
      "https://img.freepik.com/free-photo/portrait-indigenous-person-as-construction-worker_23-2151102434.jpg?t=st=1721394151~exp=1721397751~hmac=9c28663e15dd8d8fdb9464bc619d6cf0bd45bc90e117a096ee2a498cd83fb77e&w=1060",
  },
  {
    title: "Planning for Short-Term Rental Income as an Investment Strategy",
    category: "Investment",
    imageUrl:
      "https://img.freepik.com/free-photo/portrait-indigenous-person-as-construction-worker_23-2151102434.jpg?t=st=1721394151~exp=1721397751~hmac=9c28663e15dd8d8fdb9464bc619d6cf0bd45bc90e117a096ee2a498cd83fb77e&w=1060",
  },
  {
    title:
      "Building in Palmetto Bluff: Revealing the Final Details of a Modern-Style Barn",
    category: "Construction",
    imageUrl:
      "https://img.freepik.com/free-photo/portrait-indigenous-person-as-construction-worker_23-2151102434.jpg?t=st=1721394151~exp=1721397751~hmac=9c28663e15dd8d8fdb9464bc619d6cf0bd45bc90e117a096ee2a498cd83fb77e&w=1060",
  },
  {
    title:
      "Buying Investment Property in Charleston SC: Could the Right Time Be Now?",
    category: "Real Estate",
    imageUrl:
      "https://img.freepik.com/free-photo/portrait-indigenous-person-as-construction-worker_23-2151102434.jpg?t=st=1721394151~exp=1721397751~hmac=9c28663e15dd8d8fdb9464bc619d6cf0bd45bc90e117a096ee2a498cd83fb77e&w=1060",
  },
  {
    title: "Explorer Yacht: A New Journey Begins from a Love for the Sea",
    category: "Explore-15",
    imageUrl:
      "https://img.freepik.com/free-photo/scene-construction-site-with-equipment_23-2151317263.jpg?t=st=1721395806~exp=1721399406~hmac=5c52f4f8bdb0731f58d84a23551545c276e3c8f58d195cc38bbaa29917eb8483&w=996",
  },
  {
    title: "Explorer Yacht: A New Journey Begins from a Love for the Sea",
    category: "Explore-15",
    imageUrl:
      "https://img.freepik.com/free-photo/scene-construction-site-with-equipment_23-2151317263.jpg?t=st=1721395806~exp=1721399406~hmac=5c52f4f8bdb0731f58d84a23551545c276e3c8f58d195cc38bbaa29917eb8483&w=996",
  },
];

const StyledCard = styled(Card)({
  position: "relative",
  height: "350px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
});

const ImageOverlay = styled("div")({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "center",
  zIndex: 1,
});

const TextOverlay = styled("div")({
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  padding: "10px",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
});

const BlogLayout = () => {
  return (
    <Box sx={{ py: "5rem", backgroundColor: "#f6f6f6" }}>
      <Container>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          From the Blog
        </Typography>

        <Box sx={{ mt: 4, borderTop: "1px solid #ddd", pt: 8, mb: 8 }}>
          <Grid container spacing={3}>
            {blogPosts.map((post, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <StyledCard>
                  <ImageOverlay
                    style={{ backgroundImage: `url(${post.imageUrl})` }}
                  />
                  <TextOverlay>
                    <Typography variant="h6">{post.category}</Typography>
                    <Typography variant="body2">{post.title}</Typography>
                  </TextOverlay>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogLayout;
