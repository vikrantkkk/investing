import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import WebIcon from "@mui/icons-material/Web"; // Icon for Webinar
import PhoneIcon from "@mui/icons-material/Phone"; // Icon for Contact Us
import logo from "../assets/svg/home.svg"; // Import the logo
import { useDarkMode } from "../hooks/DarkModeContext";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation(); // Access the current route
  const {darkMode} = useDarkMode(); // Access the dark mode state

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        borderRight: "2px solid #ddd", // Right border for the drawer
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      {/* Logo at the top of the Drawer */}
      <div className="flex justify-center my-4 border-b-2 pb-4">
        <a href="/" className="flex items-center">
          <img src={logo} alt="MyBrand Logo" className="h-[50px] w-[167px]" />
        </a>
      </div>

      <List>
        {["Webinar", "Contact Us"].map((text, index) => {
          // Define the target route for each menu item
          const targetRoute = text === "Webinar" ? "/" : "/contact";
          // Check if the current location matches the route
          const isActive = location.pathname === targetRoute;

          return (
            <ListItem key={text} disablePadding>
              <ListItemButton
                component={Link} // Make the item clickable as a link
                to={targetRoute}
                sx={{
                  backgroundColor: isActive ? "#58FF2926" : "transparent", // Green background with alpha for active
                  color: isActive ? "#26AD00" : "black", // Figma green text color for active, black for inactive
                  "&:hover": {
                    backgroundColor: isActive ? "#58FF2926" : "#f0f0f0", // Active stays green, inactive gets light gray hover
                  },
                }}
              >
                <ListItemIcon>
                  {text === "Webinar" ? (
                    <WebIcon sx={{ color: isActive ? "#26AD00" : "black" }} />
                  ) : (
                    <PhoneIcon sx={{ color: isActive ? "#26AD00" : "black" }} />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    color: isActive ? "#26AD00" : "black", // Green text for active, black for inactive
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <div className="text-black dark:text-gray-400">
          <MenuIcon />
        </div>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
