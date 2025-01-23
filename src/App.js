import { Container, ThemeProvider } from "@mui/material";
import "./App.css";
import { AppBar, Banner, Promotions } from "./components";
import theme from "./styles/theme";

function App() {
  return (
    <Container maxWidth="xl">
      <ThemeProvider theme={theme}>
        <AppBar />
        <Banner />
        <Promotions />
      </ThemeProvider>
    </Container>
  );
}

export default App;
