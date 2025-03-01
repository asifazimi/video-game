import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "./components/ui/provider";
import { ColorModeProvider } from "./components/ui/color-mode";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <ColorModeProvider>
          <App />
        </ColorModeProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
