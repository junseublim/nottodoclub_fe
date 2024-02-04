// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App.tsx";
import ModalContextProvider from "./context/modal.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ModalContextProvider>
      <App />
    </ModalContextProvider>
  </QueryClientProvider>
);
