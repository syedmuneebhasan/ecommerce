import React from "react";
import { AppBarContainer, AppBarHeader } from "../../styles/appBar";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "./Actions";
import { useUIContext } from "../../context/ui";

export const AppBarMobile = ({ matches }) => {
  const { setDrawerOpen, setShowSearchBox } = useUIContext();
  return (
    <AppBarContainer>
      <IconButton onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <AppBarHeader variant="h4" textAlign={"center"}>
        My Project
      </AppBarHeader>
      <IconButton onClick={() => setShowSearchBox(true)}>
        <SearchIcon />
      </IconButton>
      <Actions matches={matches} />
    </AppBarContainer>
  );
};
