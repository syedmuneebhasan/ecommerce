import React, { useState } from "react";
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
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FitScreenIcon from "@mui/icons-material/FitScreen";
import { useNavigate } from "react-router-dom";
import { useUIContext } from "../../context/ui";

const SingleProductDesktop = ({ product, matches }) => {
  const navigate = useNavigate();
  const { cartLength, setCartLength, cartItems, setCartItems } = useUIContext();
  const [showOptions, setShowOptions] = useState(false);

  const isItemAddedToCart = cartItems.find((item) => item.id === product.id);
  return (
    <>
      <Product
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
        onClick={() =>
          navigate(`/product/${product.id}`, {
            state: {
              product: product,
            },
          })
        }
      >
        <ProductImage src={product.image} />
        <ProductMeta product={product} />
        <ProductFavButton isFav={0}>
          <FavoriteIcon />
        </ProductFavButton>

        {showOptions && (
          <ProductAddToCart
            onClick={(e) => {
              e.stopPropagation();
              setCartLength(cartLength + 1);
              setCartItems([...cartItems, product]);
            }}
            disabled={isItemAddedToCart}
          >
            {isItemAddedToCart ? "Added to Cart" : "Add To Cart"}
          </ProductAddToCart>
        )}
        <ProductActionsWrapper show={showOptions}>
          <Stack direction={"column"}>
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionsWrapper>
      </Product>
    </>
  );
};

export default SingleProductDesktop;
