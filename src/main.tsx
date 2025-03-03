import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "./components/ui/provider";
import { ColorModeProvider } from "./components/ui/color-mode";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24, // 24 hours
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <ColorModeProvider>
          <App />
          <ReactQueryDevtools />
        </ColorModeProvider>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
