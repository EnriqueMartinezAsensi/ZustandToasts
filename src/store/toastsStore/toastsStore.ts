import { configureStore } from "@reduxjs/toolkit";
import toastReducer from "./reducer";

const toastsStore = configureStore({ reducer: toastReducer });

export default toastsStore;
