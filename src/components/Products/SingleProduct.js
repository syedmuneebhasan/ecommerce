import React from "react";
import {
  Product,
  ProductActionButton,
  ProductActionsWrapper,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
} from "../../styles/products";
import ProductMeta from "./ProductMeta";
import { Stack } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { useNavigate } from "react-router-dom";
import { useUIContext } from "../../context/ui";

const SingleProduct = ({ product, matches }) => {
  const navigate = useNavigate();
  const { cartLength, setCartLength, cartItems, setCartItems } = useUIContext();
  const isItemAddedToCart = cartItems.find((item) => item.id === product.id);

  return (
    <>
      <Product
        onClick={() =>
          navigate(`/product/${product.id}`, {
            state: {
              product: product,
            },
          })
        }
      >
        <ProductImage src={product.image} />
        <ProductMeta product={product} matches={matches} />
        <ProductActionsWrapper>
          <Stack direction={"row"}>
            <ProductFavButton isFav={0}>
              <FavoriteIcon />
            </ProductFavButton>
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductAddToCart
        variant="contained"
        onClick={() => {
          setCartLength(cartLength + 1);
          setCartItems([...cartItems, product]);
        }}
        disabled={isItemAddedToCart}
      >
        {isItemAddedToCart ? "Added to Cart" : "Add To Cart"}
      </ProductAddToCart>
    </>
  );
};

export default SingleProduct;
