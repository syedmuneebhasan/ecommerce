import { styled } from "@mui/system";
import { Colors } from "../theme";
import { Box, Typography } from "@mui/material";

export const PromotionsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  overflow: "hidden",
  background: Colors.secondary,
}));

export const MessageText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Montez", "cuſsive"',
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    fontSize: "3rem",
  },
  color: Colors.white,
  fontSize: "1.5rem",
}));
