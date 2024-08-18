import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
import App from "@/App";

// Internal components
import { Toaster } from "@/components/ui/toaster";
import { WalletProvider } from "@/components/wallet/WalletProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WalletProvider>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
    </WalletProvider>
  </React.StrictMode>
);