import React from "react";
import { Container, Grid2, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { products } from "../../data";
import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";

export const Products = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const renderItems = products.map((product) => (
    <Grid2 item key={product.id}>
      {matches ? (
        <SingleProduct product={product} matches={matches} />
      ) : (
        <SingleProductDesktop product={product} matches={matches} />
      )}
    </Grid2>
  ));

  return (
    <Container>
      <Grid2
        container
        spacing={{ xs: 2, md: 4 }}
        justifyContent={"center"}
        mt={4}
      >
        {renderItems}
      </Grid2>
    </Container>
  );
};
