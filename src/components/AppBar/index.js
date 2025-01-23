import { createTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { AppBarMobile } from "./AppBarMobile";
import { AppBarDesktop } from "./AppBarDesktop";

export const AppBar = () => {
  const theme = createTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      {matches ? (
        <AppBarMobile matches={matches} />
      ) : (
        <AppBarDesktop matches={matches} />
      )}
    </div>
  );
};
