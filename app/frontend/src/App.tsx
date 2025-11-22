import { BrowserRouter } from "react-router";
import {
  ThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import ReactRoutes from "./Routes";

import theme from "./theme";
import ApiContextProvider from "./context/api/ApiContextProvider";

function App() {
  return (
    <ApiContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <BrowserRouter>
            <ReactRoutes />
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </ApiContextProvider>
  );
}

export default App;
