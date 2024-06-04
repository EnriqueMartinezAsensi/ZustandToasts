import { ToastData } from "../../types/toast.types";
import { ReduxAction } from "../types";

export type AddToastAction = ReduxAction<"toasts/addToast", ToastData>;
export type RemoveToastAction = ReduxAction<"toasts/removeToast", { id: number }>;

export const addToast = (toast: ToastData): AddToastAction => ({ type: "toasts/addToast", payload: toast });
export const removeToast = (id: number): RemoveToastAction => ({ type: "toasts/removeToast", payload: { id } });
