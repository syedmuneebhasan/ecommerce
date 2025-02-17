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
  Wishlist,
} from "./components";
import theme from "./styles/theme";
import AppDrawer from "./components/Drawer";
import { UIProvider } from "./context/ui";
import { useRef } from "react";

function App() {
  const productRef = useRef(null);
  const contactRef = useRef(null);

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
                    <AppBar productRef={productRef} contactRef={contactRef} />
                    <Banner />
                    <Promotions />
                    <Products ref={productRef} />
                    <Footer ref={contactRef} />
                    <AppDrawer />
                    <SearchBox />
                  </>
                }
              />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
          </BrowserRouter>
        </UIProvider>
      </ThemeProvider>
    </Container>
  );
}

export default App;
