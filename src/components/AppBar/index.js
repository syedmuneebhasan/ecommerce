import { createTheme, useMediaQuery } from "@mui/material";
import React from "react";
import { AppBarMobile } from "./AppBarMobile";
import { AppBarDesktop } from "./AppBarDesktop";

export const AppBar = ({ productRef, contactRef }) => {
  const theme = createTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <div>
      {matches ? (
        <AppBarMobile matches={matches} />
      ) : (
        <AppBarDesktop
          matches={matches}
          productRef={productRef}
          contactRef={contactRef}
        />
      )}
    </div>
  );
};
