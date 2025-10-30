import { BrowserRouter } from "react-router";
import {
  ThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import Routes from "./routes/Routes";

import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import themeWithComponents from "./theme";

function App() {
  return (
    <ThemeProvider theme={themeWithComponents}>
      <CssBaseline>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
