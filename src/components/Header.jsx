// import React, { useState } from "react";
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Box,
//   IconButton,
//   useMediaQuery,
//   useTheme,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// const Header = () => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("md"));
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = (open) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }
//     setDrawerOpen(open);
//   };

//   const navItems = [
//     "CONSTRUCTION",
//     "ARCHITECTURE",
//     "RENOVATIONS",
//     "REMODELING",
//   ];

//   const drawer = (
//     <Box
//       sx={{ width: 250 }}
//       role="presentation"
//       onClick={toggleDrawer(false)}
//       onKeyDown={toggleDrawer(false)}
//     >
//       <List>
//         {navItems.map((item) => (
//           <ListItem  key={item}>
//             <ListItemText primary={item} />
//           </ListItem>
//         ))}
//         <ListItem >
//           <ListItemText primary="ABOUT" />
//         </ListItem>
//         <ListItem >
//           <ListItemText primary="BLOG" />
//         </ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     <AppBar position="static" color="default" elevation={0}>
//       <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
//         <Box
//           sx={{
//             display: "flex",
//             alignItems: "center",
//             flexGrow: isMobile ? 1 : 0,
//           }}
//         >
//           <AccountCircleIcon sx={{ mr: 1 }} />
//           <Typography
//             variant="body2"
//             sx={{ mr: 2, display: { xs: "none", sm: "block" } }}
//           >
//             CONTACT US
//           </Typography>
//           <Typography
//             variant="body2"
//             sx={{ display: { xs: "none", sm: "block" } }}
//           >
//             +265-773-599715
//           </Typography>
//         </Box>

//         <Typography
//           variant="h6"
//           component="div"
//           sx={{ flexGrow: 1, textAlign: "center" }}
//         >
//           BUKKO Construction Bureau
//         </Typography>

//         {isMobile ? (
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={toggleDrawer(true)}
//           >
//             <MenuIcon />
//           </IconButton>
//         ) : (
//           <Box sx={{ display: "flex" }}>
//             <Button color="inherit">ABOUT</Button>
//             <Button color="inherit">BLOG</Button>
//           </Box>
//         )}
//       </Toolbar>
//       {!isMobile && (
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             py: 1,
//             flexWrap: "wrap",
//             backgroundColor: "#f3efea",
//           }}
//         >
//           {navItems.map((item) => (
//             <Button color="inherit" key={item}>
//               {item}
//             </Button>
//           ))}
//         </Box>
//       )}
//       <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
//         {drawer}
//       </Drawer>
//     </AppBar>
//   );
// };

// export default Header;

// Header.jsx
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
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const navItems = [
    { text: "CONSTRUCTION", path: "/construction" },
    { text: "ARCHITECTURE", path: "/architecture" },
    { text: "RENOVATIONS", path: "/renovations" },
    { text: "REMODELING", path: "/remodeling" },
  ];

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navItems.map((item) => (
          <ListItem  component={Link} to={item.path} key={item.text}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
        <ListItem  component={Link} to="/about">
          <ListItemText primary="ABOUT" />
        </ListItem>
        <ListItem  component={Link} to="/blog">
          <ListItemText primary="BLOG" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static" color="default" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: isMobile ? 1 : 0,
          }}
        >
          <AccountCircleIcon sx={{ mr: 1 }} />
          <Typography
            variant="body2"
            sx={{ mr: 2, display: { xs: "none", sm: "block" } }}
          >
            CONTACT US
          </Typography>
          <Typography
            variant="body2"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            +265-773-599715
          </Typography>
        </Box>

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, textAlign: "center" }}
        >
          BUKKO Construction Bureau
        </Typography>

        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: "flex" }}>
            <Button color="inherit" component={Link} to="/about">
              ABOUT
            </Button>
            <Button color="inherit" component={Link} to="/blog">
              BLOG
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
            backgroundColor: "#f3efea",
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
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;
