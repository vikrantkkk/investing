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
import WebIcon from "@mui/icons-material/Web"; 
import PhoneIcon from "@mui/icons-material/Phone";
import logo from "../assets/svg/home.svg";
import darkLogo from "../assets/svg/darklogo.svg";
import { useDarkMode } from "../hooks/DarkModeContext";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const { darkMode } = useDarkMode(); 

  // Scroll to the top whenever the route changes
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 250,
        backgroundColor: darkMode ? "#0E0F19" : "#fff",
        color: darkMode ? "#fff" : "#000",
        height: "100vh",
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <div className="flex justify-center my-4 pb-4 border-b-2 dark:border-none">
        <a href="/" className="flex items-center">
          <img 
            src={darkMode ? darkLogo : logo} 
            alt="MyBrand Logo" 
            className="h-[50px] w-[167px] border-none" 
          />
        </a>
      </div>

      <List>
        {["Webinar", "Contact Us"].map((text, index) => {
          const targetRoute = text === "Webinar" ? "/" : "/contact";
          const isActive = location.pathname === targetRoute;

          return (
            <ListItem key={text} disablePadding>
              <ListItemButton
                component={Link} 
                to={targetRoute}
                sx={{
                  backgroundColor: isActive ? "#58FF2926" : "transparent", 
                  color: isActive ? "#26AD00" : darkMode ? "#ddd" : "black",
                  "&:hover": {
                    backgroundColor: isActive ? "#58FF2926" : darkMode ? "#333" : "#f0f0f0",
                  },
                }}
              >
                <ListItemIcon>
                  {text === "Webinar" ? (
                    <WebIcon sx={{ color: isActive ? "#26AD00" : darkMode ? "#ddd" : "black" }} />
                  ) : (
                    <PhoneIcon sx={{ color: isActive ? "#26AD00" : darkMode ? "#ddd" : "black" }} />
                  )}
                </ListItemIcon>
                <ListItemText
                  primary={text}
                  sx={{
                    color: isActive ? "#26AD00" : darkMode ? "#ddd" : "black", 
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
    <div className="">
      <Button onClick={toggleDrawer(true)}>
        <div className={`text-black ${darkMode ? 'text-gray-400' : 'text-black'}`}>
          <MenuIcon />
        </div>
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
