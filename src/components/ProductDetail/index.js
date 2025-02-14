import { Box, Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";
import {
  ProductDetailImage,
  ProductDetails,
  ProductTitle,
} from "../../styles/productDetail";

export const ProductDetail = () => {
  const location = useLocation();

  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <ProductDetails>
        <ProductDetailImage src={location.state.product.image} />
        <ProductTitle>{location.state.product.name}</ProductTitle>
        <Typography>{location.state.product.description}</Typography>
      </ProductDetails>
    </Box>
  );
};
