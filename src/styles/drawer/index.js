import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export const DrawerCloseButton = styled(Button)(() => ({
  position: "absolute",
  top: 10,
  left: "250px",
  zIndex: 1999,
}));
