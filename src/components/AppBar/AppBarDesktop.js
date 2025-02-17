import React from "react";
import { AppBarContainer, AppBarHeader, MyList } from "../../styles/appBar";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";
import { useUIContext } from "../../context/ui";

export const AppBarDesktop = ({ matches, productRef, contactRef }) => {
  const { setShowSearchBox } = useUIContext();
  return (
    <AppBarContainer>
      <AppBarHeader>My Project</AppBarHeader>
      <MyList type="row">
        <ListItemText primary="Home" />
        <ListItemText
          primary="Products"
          onClick={(e) => {
            e.preventDefault();
            productRef.current.scrollIntoView({ behavior: "smooth" });
          }}
          sx={{ cursor: "pointer" }}
        />
        <ListItemText
          primary="Contact Us"
          onClick={(e) => {
            e.preventDefault();
            contactRef.current.scrollIntoView({ behavior: "smooth" });
          }}
          sx={{ cursor: "pointer" }}
        />
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
