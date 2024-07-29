import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../assets/bukkologo.png";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  
  const navItems = [
    { text: "HOME", path: "/" },
    { text: "CONSTRUCTION", path: "/construction" },
    { text: "ARCHITECTURE", path: "/architecture" },
    { text: "RENOVATIONS", path: "/renovations" },
    { text: "REMODELING", path: "/remodeling" },
  ];

  return (
    <AppBar position="static" color="default" elevation={0} mt="5px">
      <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: isMobile ? 1.5 : 0,
          }}
        >
          <img
            src={Logo}
            alt="logo"
            style={{
              width: "100px",
              height: "100%",
              objectFit: "cover",
              marginBottom: "20px",
            }}
          />
        </Box>

        {!isMobile && (
          <Link to="/" style={{ textDecoration: "none" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                textAlign: "center",
                color: "#e8631d",
                fontSize: {
                  xs: "20px",
                  sm: "20px",
                  md: "1.5rem",
                  lg: "2rem",
                }, // Responsive font size
                fontWeight: { xs: "normal", sm: "bold" }, // Optional: Adjust font weight
              }}
            >
              BUKKO DESIGN & CONSTRUCTION BUREAU
            </Typography>
          </Link>
        )}

        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open menu"
              edge="start"
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{ sx: { minWidth: 200 } }} // Adjust width as needed
            >
              {navItems.map((item) => (
                <MenuItem
                  component={Link}
                  to={item.path}
                  onClick={handleClose}
                  key={item.text}
                >
                  {item.text}
                </MenuItem>
              ))}
              <MenuItem component={Link} to="/about" onClick={handleClose}>
                ABOUT
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Button
              variant="contained"
              component={Link}
              to="/about"
              sx={{ backgroundColor: "#e8631d" }}
            >
              ABOUT
            </Button>
            <Button
              variant="outlined"
              component={Link}
              to="/contact"
              sx={{ borderColor: "#e8631d", color: "#e8631d" }}
            >
              CONTACT
            </Button>
          </Box>
        )}
      </Toolbar>
      {!isMobile && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            py: 1,
            flexWrap: "wrap",
            backgroundColor: "#126984",
            color: "#fff",
          }}
        >
          {navItems.map((item) => (
            <Button
              color="inherit"
              component={Link}
              to={item.path}
              key={item.text}
            >
              {item.text}
            </Button>
          ))}
        </Box>
      )}
    </AppBar>
  );
};

export default Header;
