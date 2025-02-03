import React from "react";
import {
  Product,
  ProductActionsWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from "../../styles/products";
import ProductMeta from "./ProductMeta";
import { Stack } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";

const SingleProduct = ({ product, matches }) => {
  return (
    <>
      <Product>
        <ProductImage src={product.image} />
        <ProductMeta product={product} />
        <ProductActionsWrapper>
          <Stack direction={"row"}>
            <ProductFavButton>
              <ShareIcon />
            </ProductFavButton>
            <ProductFavButton>
              <FavoriteIcon />
            </ProductFavButton>
          </Stack>
        </ProductActionsWrapper>
        <ProductAddToCart>Add to cart</ProductAddToCart>
      </Product>
    </>
  );
};

export default SingleProduct;
