import { Container, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { products } from "../../data";
import SingleProduct from "./SingleProduct";
import SingleProductDesktop from "./SingleProductDesktop";

export const Products = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const renderProducts = products.map((product) => (
    <Grid
      item
      key={product.id}
      display="flex"
      xs={2}
      sm={4}
      md={4}
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
    <Container>
      <Grid
        container
        spacing={{
          xs: 2,
          md: 4,
        }}
        justifyContent={"center"}
        sx={{ margin: "0px 4px 10px 4px" }}
        size={{ xs: 4, sm: 8, md: 12 }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
};
