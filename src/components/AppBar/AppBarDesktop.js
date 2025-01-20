import React from "react";
import { AppBarContainer, AppBarHeader, MyList } from "../../styles/appBar";
import { ListItemText } from "@mui/material";

export const AppBarDesktop = () => {
  return (
    <AppBarContainer>
      <AppBarHeader>My Project</AppBarHeader>
      <MyList>
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />
      </MyList>
    </AppBarContainer>
  );
};
