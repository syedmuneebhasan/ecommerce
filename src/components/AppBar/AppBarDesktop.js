import React from "react";
import { AppBarContainer, AppBarHeader, MyList } from "../../styles/appBar";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";
import { useUIContext } from "../../context/ui";

export const AppBarDesktop = ({ matches }) => {
  const { setShowSearchBox } = useUIContext();
  return (
    <AppBarContainer>
      <AppBarHeader>My Project</AppBarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText primary="Categories" />
        <ListItemText primary="Products" />
        <ListItemText primary="Contact Us" />
      </MyList>
      <ListItemButton sx={{ justifyContent: "center" }}>
        <ListItemIcon
          sx={{ justifyContent: "center" }}
          onClick={() => setShowSearchBox(true)}
        >
          <SearchIcon />
        </ListItemIcon>
      </ListItemButton>
      <Actions matches={matches} />
    </AppBarContainer>
  );
};
