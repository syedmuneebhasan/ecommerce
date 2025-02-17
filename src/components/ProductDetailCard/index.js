import React, { useState } from "react";
import {
  ProductCardContainer,
  ProductDetailCardImage,
} from "../../styles/productDetailCard";
import { Button, Typography } from "@mui/material";

export const ProductDetailCard = ({ product }) => {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 100;

  const toggleReadMore = () => {
    setExpanded(!expanded);
  };
  return (
    <ProductCardContainer>
      <ProductDetailCardImage src={product.image} />
      <Typography>
        {expanded || product.description.length <= maxLength
          ? product.description
          : `${product.description.substring(0, maxLength)}...`}
      </Typography>
      {product.description.length > maxLength && (
        <Button onClick={toggleReadMore} color="primary">
          {expanded ? "Read Less" : "Read More"}
        </Button>
      )}
      <Typography>${product.price}</Typography>
    </ProductCardContainer>
  );
};
