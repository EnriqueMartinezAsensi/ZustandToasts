import ReactDOM from "react-dom/client";
import App from "./App/App.tsx";
import GlobalStyles from "./theme/GlobalStyles";
import { Provider as ReduxProvider } from "react-redux";
import toastsStore from "./store/toastsStore/toastsStore";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ReduxProvider store={toastsStore}>
    <GlobalStyles />
    <App />
  </ReduxProvider>
);
