import React from "react";
import { useUIContext } from "../../context/ui";
import { Box, Typography } from "@mui/material";
import { ProductDetailCard } from "../ProductDetailCard";
import { Colors } from "../../styles/theme";

export const Cart = () => {
  const { cartItems } = useUIContext();
  console.log(">> ", cartItems.length);
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      gap={"1rem"}
    >
      <Typography variant="h1" sx={{ color: Colors.primary }}>
        Your Cart
      </Typography>
      {cartItems?.map((item) => (
        <ProductDetailCard product={item} />
      ))}
    </Box>
  );
};
