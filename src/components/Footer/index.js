import {
  Box,
  Grid2,
  List,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { FooterTitle, SubscribeInput } from "../../styles/footer";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Colors } from "../../styles/theme";
import { BannerButton } from "../../styles/banner";

export const Footer = () => {
  return (
    <Box
      sx={{
        background: Colors.shaft,
        color: Colors.white,
        p: { xs: 4, md: 10 },
        pt: 12,
        pb: 12,
        fontSize: { xs: "12px", md: "14px" },
      }}
    >
      <Grid2
        container
        rowSpacing={4}
        columnSpacing={2}
        justifyContent={"center"}
      >
        <Grid2 item size={{ md: 6, lg: 4 }}>
          <FooterTitle>Title</FooterTitle>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipiscing elit suscipit
            consectetur adipiscing elit{" "}
          </Typography>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              gap: "1rem",
            }}
          >
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
          </Box>
        </Grid2>
        <Grid2 item size={{ md: 6, lg: 2 }}>
          <FooterTitle>infomation</FooterTitle>
          <List>
            <ListItemText>
              <Typography variant="body1">About Us</Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="body1">Order Tracking</Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="body1">Privacy &amp; Policy</Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="body1">Terms &amp; Conditions</Typography>
            </ListItemText>
          </List>
        </Grid2>
        <Grid2 item size={{ md: 6, lg: 2 }}>
          <FooterTitle>Account</FooterTitle>
          <List>
            <ListItemText>
              <Typography variant="body1">My Account</Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="body1">Sample 1</Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="body1">Sample 2</Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="body1">Sample 3</Typography>
            </ListItemText>
          </List>
        </Grid2>
        <Grid2 item size={{ md: 6, lg: 2 }}>
          <FooterTitle>newsletter</FooterTitle>
          <Stack>
            <SubscribeInput
              label="Email Address"
              variant="standard"
              sx={{ mb: 2 }}
            />
            <BannerButton>Subscribe</BannerButton>
          </Stack>
        </Grid2>
      </Grid2>
    </Box>
  );
};
