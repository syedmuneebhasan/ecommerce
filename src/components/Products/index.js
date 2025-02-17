import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTheme } from "@mui/material/styles";
import React, { forwardRef } from "react";
import { products } from "../../data";
import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";

export const Products = forwardRef((props, ref) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const renderProducts = products.map((product) => (
    <Grid
      item
      key={product.id}
      display="flex"
      size={{ xs: 12, sm: 6, md: 4 }}
      flexDirection={"column"}
      alignItems={"center"}
    >
      {matches ? (
        <SingleProduct product={product} matches={matches} />
      ) : (
        <SingleProductDesktop product={product} matches={matches} />
      )}
    </Grid>
  ));
  return (
    <Container ref={ref}>
      <Box display="flex" justifyContent={"center"} p={4}>
        <Typography variant="h4">Our Products</Typography>
      </Box>
      <Grid
        container
        spacing={{
          xs: 2,
          md: 4,
        }}
        justifyContent={"center"}
        sx={{ margin: "0px 4px 10px 4px" }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
});
