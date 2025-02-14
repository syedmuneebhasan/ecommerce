import { Box, styled } from "@mui/material";
import { Colors } from "../theme";

export const ProductDetailCardImage = styled("img")(({ src }) => ({
  src: `url(${src})`,
  height: "200px",
  width: "200px",
}));

export const ProductCardContainer = styled(Box)(() => ({
  border: "1px solid black",
  borderRadius: "10px",
  padding: "1rem",
  display: "flex",
  justifyContent: "center",

  alignItems: "center",
  gap: "5rem",
}));
