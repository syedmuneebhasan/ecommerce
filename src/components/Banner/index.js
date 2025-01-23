import React from "react";
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/banner";

export const Banner = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer>
      <BannerImage src={"/images/banner/banner.jpeg"} />
      <BannerContent>
        <Typography variant="h6">My Collection</Typography>
        <BannerTitle>New Product</BannerTitle>
        <BannerDescription>
          Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit
          consectetur adipiscing elit
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
};
