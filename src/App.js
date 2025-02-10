import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import "./App.css";
import { AppBar, Banner, Footer, Products, Promotions } from "./components";
import theme from "./styles/theme";
import AppDrawer from "./components/Drawer";
import { UIProvider } from "./context/ui";

function App() {
  return (
    <Container maxWidth="xl">
      <ThemeProvider theme={theme}>
        <UIProvider>
          <AppBar />
          <Banner />
          <Promotions />
          <Box display="flex" justifyContent={"center"} p={4}>
            <Typography variant="h4">Our Products</Typography>
          </Box>
          <Products />
          <Footer />
          <AppDrawer />
        </UIProvider>
      </ThemeProvider>
    </Container>
  );
}

export default App;
