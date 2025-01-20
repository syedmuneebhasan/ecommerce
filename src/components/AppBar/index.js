import { createTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { AppBarMobile } from "./AppBarMobile";
import { AppBarDesktop } from "./AppBarDesktop";

export const AppBar = () => {
  const theme = createTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  return <div>{matches ? <AppBarMobile /> : <AppBarDesktop />}</div>;
};
