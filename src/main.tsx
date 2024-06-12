import ReactDOM from "react-dom/client";
import App from "./App/App.tsx";
import GlobalStyles from "./theme/GlobalStyles";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <GlobalStyles />
    <App />
  </>
);
