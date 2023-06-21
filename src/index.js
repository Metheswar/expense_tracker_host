import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const disableTextSelection = {
  userSelect: "none",
};

root.render(
  <StrictMode>
    <div style={disableTextSelection}>
      <App />
    </div>
  </StrictMode>
);
