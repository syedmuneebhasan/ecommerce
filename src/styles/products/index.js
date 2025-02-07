import { Box, Button, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { Colors } from "../theme";

export const Product = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    position: "relative",
  },
}));

export const ProductImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  width: "100%",
  background: Colors.light_gray,
  padding: "10px",
  [theme.breakpoints.down("md")]: {
    width: "80%",
    padding: "24px",
  },
}));

export const ProductActionButton = styled(IconButton)(() => ({
  background: Colors.white,
  margin: 4,
}));

export const ProductFavButton = styled(ProductActionButton)(
  ({ isFav, theme }) => ({
    color: isFav ? Colors.primary : Colors.light,
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      right: 0,
      top: 10,
    },
  })
);

export const ProductAddToCart = styled(Button)(({ show, theme }) => ({
  width: "120px",
  fontSize: "12px",
  [theme.breakpoints.up("md")]: {
    position: "absolute",
    bottom: "28%",
    width: "280px",
    padding: "10px 5px",
  },
  background: Colors.secondary,
  opacity: 0.9,
}));

export const ProductMetaWrapper = styled(Box)(({ theme }) => ({
  padding: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const ProductActionsWrapper = styled(Box)(({ show, theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: show ? "block" : "none",
    position: "absolute",
    right: 0,
    top: "20%",
  },
}));
