import { BrowserRouter } from "react-router";
import {
  ThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import ReactRoutes from "./Routes";

import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BrowserRouter>
          <ReactRoutes />
        </BrowserRouter>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
