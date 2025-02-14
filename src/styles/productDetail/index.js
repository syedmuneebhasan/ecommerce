import { Box, styled, Typography } from "@mui/material";
import { Colors } from "../theme";

export const ProductDetails = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  width: "50%",
  gap: "1rem",
}));

export const ProductDetailImage = styled("img")(({ src }) => ({
  src: `url(${src})`,
  height: "400px",
  width: "500px",
  borderRadius: "10px",
  background: Colors.light_gray,
}));

export const ProductTitle = styled(Typography)(() => ({
  fontSize: "2rem",
  fontWeight: "bold",
}));
