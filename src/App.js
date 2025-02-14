import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import "./App.css";
import {
  AppBar,
  Banner,
  Cart,
  Footer,
  ProductDetail,
  Products,
  Promotions,
  SearchBox,
} from "./components";
import theme from "./styles/theme";
import AppDrawer from "./components/Drawer";
import { UIProvider } from "./context/ui";

function App() {
  return (
    <Container maxWidth="xl">
      <ThemeProvider theme={theme}>
        <UIProvider>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <AppBar />
                    <Banner />
                    <Promotions />
                    <Box display="flex" justifyContent={"center"} p={4}>
                      <Typography variant="h4">Our Products</Typography>
                    </Box>
                    <Products />
                    <Footer />
                    <AppDrawer />
                    <SearchBox />
                  </>
                }
              />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </BrowserRouter>
        </UIProvider>
      </ThemeProvider>
    </Container>
  );
}

export default App;
