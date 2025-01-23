import React from "react";
import { AppBarContainer, AppBarHeader } from "../../styles/appBar";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";

export const AppBarMobile = ({ matches }) => {
  return (
    <AppBarContainer>
      <IconButton>
        <MenuIcon />
      </IconButton>
      <AppBarHeader variant="h4" textAlign={"center"}>
        My Project
      </AppBarHeader>
      <IconButton>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppBarContainer>
  );
};
