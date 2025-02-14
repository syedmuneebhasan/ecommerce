import { Box, styled, TextField, Typography } from "@mui/material";
import { Colors } from "../theme";

export const SearchBoxContainer = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: Colors.primary,
  zIndex: 99999,
  opacity: 0.9,
}));

export const SearchFieldContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: Colors.primary,
  zIndex: 99999,
  opacity: 0.9,
}));

export const SearchField = styled(TextField)(({ theme }) => ({
  ".MuiInputLabel-root": {
    color: Colors.secondary,
  },

  ".MuiInput-root": {
    fontSize: "1rem",
    [theme.breakpoints.up("md")]: {
      fontSize: "2rem",
    },
    color: Colors.secondary,
  },

  ".MuiInput-root::before": {
    borderBottom: `1px solid ${Colors.secondary}`,
  },

  padding: "0 0 0 40px",
}));

export const SearchedItemsContainer = styled(Box)(({ theme }) => ({
  height: "300px",
  overflowY: "scroll",
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

export const SearchedItem = styled(Typography)(({ theme }) => ({
  color: Colors.secondary,
  cursor: "pointer",
  fontSize: "1rem",
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
  padding: "0 40px",
}));
