import ReactDOM from "react-dom/client";
import App from "./App/App.tsx";
import GlobalStyles from "./theme/GlobalStyles";
import { ToastProvider } from "./providers/ToastProviders/ToastContext/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ToastProvider>
    <GlobalStyles />
    <App />
  </ToastProvider>
);
