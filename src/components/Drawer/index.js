import React from "react";
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DrawerCloseButton } from "../../styles/drawer";
import { useUIContext } from "../../context/ui";
import { useNavigate } from "react-router-dom";

const AppDrawer = () => {
  const navigate = useNavigate();
  const { drawerOpen, setDrawerOpen } = useUIContext();
  return (
    <>
      {drawerOpen && (
        <DrawerCloseButton>
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </DrawerCloseButton>
      )}
      <Drawer open={drawerOpen}>
        <List>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <Divider />
          <Divider />
          <ListItemButton>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
          <Divider />
          <ListItemButton onClick={() => navigate("/cart")}>
            <ListItemText>My Cart</ListItemText>
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText>Contact Us</ListItemText>
          </ListItemButton>
          <Divider />
        </List>
      </Drawer>
    </>
  );
};

export default AppDrawer;
