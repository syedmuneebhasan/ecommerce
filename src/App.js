import { Button, Container, ThemeProvider } from "@mui/material";
import "./App.css";
import { AppBar } from "./components";
import theme from "./styles/theme";

function App() {
  return (
    <Container maxWidth="xl">
      <ThemeProvider theme={theme}>
        <AppBar />
        <Button variant="contained">Test</Button>
      </ThemeProvider>
    </Container>
  );
}

export default App;
