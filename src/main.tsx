import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "@/App";
// Internal components
import { Toaster } from "@/components/ui/toaster";
import { WalletProvider } from "@/components/WalletProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WalletProvider>
          <App />
          <Toaster />
    </WalletProvider>
  </React.StrictMode>,
);