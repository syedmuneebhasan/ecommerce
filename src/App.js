import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import "./App.css";
import { AppBar, Banner, Products, Promotions } from "./components";
import theme from "./styles/theme";

function App() {
  return (
    <Container maxWidth="xl">
      <ThemeProvider theme={theme}>
        <AppBar />
        <Banner />
        <Promotions />
        <Box
          justifyContent={"center"}
          mt={4}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">List of Products Available</Typography>
          <Products />
        </Box>
      </ThemeProvider>
    </Container>
  );
}

export default App;
