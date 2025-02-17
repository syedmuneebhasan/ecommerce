import {
  Box,
  Button,
  Grid2,
  List,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { forwardRef } from "react";
import { FooterTitle, SubscribeInput } from "../../styles/footer";
import { Colors } from "../../styles/theme";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import { useNavigate } from "react-router-dom";

export const Footer = forwardRef((props, ref) => {
  const navigate = useNavigate();
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
      ref={ref}
    >
      <Grid2 container spacing={2} justifyContent={"center"}>
        <Grid2 item size={{ md: 6, lg: 4 }}>
          <FooterTitle variant="body1">About Us</FooterTitle>
          <Typography variant="caption2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            iure quas quod. Quam, voluptatem? Quisquam iure quas quod. Quam,
            voluptatem?
          </Typography>
          <Box
            sx={{
              mt: 4,
              color: Colors.dove_gray,
            }}
          >
            <FacebookIcon sx={{ mr: 1 }} />
            <TwitterIcon sx={{ mr: 1 }} />
            <InstagramIcon />
          </Box>
        </Grid2>
        <Grid2 item size={{ md: 6, lg: 2 }}>
          <FooterTitle variant="body1">information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms &apm; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid2>
        <Grid2 item size={{ md: 6, lg: 2 }}>
          <FooterTitle variant="body1">my account</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Login
              </Typography>
            </ListItemText>
            <ListItemText onClick={() => navigate("/cart")}>
              <Typography lineHeight={2} variant="caption2">
                My Cart
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Wishlist
              </Typography>
            </ListItemText>
          </List>
        </Grid2>
        <Grid2 item size={{ md: 6, lg: 4 }}>
          <FooterTitle variant="body1">newsletter</FooterTitle>
          <Stack>
            <SubscribeInput
              color="primary"
              label="Email Address"
              variant="standard"
            />
            <Button
              startIcon={<SendIcon sx={{ color: Colors.white }} />}
              variant="contained"
              sx={{ mt: 4, mb: 4 }}
            >
              Subscribe
            </Button>
          </Stack>
        </Grid2>
      </Grid2>
    </Box>
  );
});
