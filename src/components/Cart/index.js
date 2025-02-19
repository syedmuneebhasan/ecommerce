import React from "react";
import { useUIContext } from "../../context/ui";
import { Box, Typography } from "@mui/material";
import { ProductDetailCard } from "../ProductDetailCard";
import { Colors } from "../../styles/theme";

export const Cart = () => {
  const { cartItems } = useUIContext();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      p={4}
      gap={"1rem"}
    >
      <Typography variant="h2" sx={{ color: Colors.primary }}>
        Your Cart
      </Typography>
      {cartItems?.length === 0 && <Typography>Your cart is empty</Typography>}
      {cartItems?.map((item) => (
        <ProductDetailCard product={item} />
      ))}
    </Box>
  );
};
