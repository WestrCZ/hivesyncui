import * as React from "react";
import {
  createRoot, hydrateRoot,
} from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
if (container === null) {
  throw new Error("App root not found");
}

if (container.hasChildNodes()) {
  hydrateRoot(container, (<React.StrictMode><App /></React.StrictMode>));
}
else {
  const root = createRoot(container);
  root.render(<React.StrictMode><App /></React.StrictMode>);
}
