import React from "react";
import { ProductMetaWrapper } from "../../styles/products";
import { Typography } from "@mui/material";

const ProductMeta = ({ product }) => {
  return (
    <ProductMetaWrapper>
      <Typography variant="h5">{product.name}</Typography>
      <Typography variant="body1">${product.price}</Typography>
    </ProductMetaWrapper>
  );
};

export default ProductMeta;
