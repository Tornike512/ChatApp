import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@app/sass/Global.scss";
import { GlobalProvider } from "./Providers/GlobalProvider/GlobalProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider>
  </React.StrictMode>
);
