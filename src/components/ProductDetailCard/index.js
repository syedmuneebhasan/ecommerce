import React from "react";
import {
  ProductCardContainer,
  ProductDetailCardContainer,
  ProductDetailCardImage,
} from "../../styles/productDetailCard";
import { Typography } from "@mui/material";
import { Colors } from "../../styles/theme";

export const ProductDetailCard = ({ product }) => {
  return (
    <ProductCardContainer>
      <ProductDetailCardImage src={product.image} />
      <Typography>{product.description}</Typography>
      <Typography>{product.price}</Typography>
    </ProductCardContainer>
  );
};
