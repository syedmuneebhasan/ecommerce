import React from "react";
import { useUIContext } from "../../context/ui";
import { Box, Typography } from "@mui/material";
import { ProductDetailCard } from "../ProductDetailCard";
import { Colors } from "../../styles/theme";

export const Wishlist = () => {
  const { wishlistedItems } = useUIContext();
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
        Your Wishlist
      </Typography>
      {wishlistedItems?.length === 0 && (
        <Typography>Your wishlist is empty</Typography>
      )}
      {wishlistedItems?.map((item) => (
        <ProductDetailCard product={item} />
      ))}
    </Box>
  );
};
