import { useContext } from "react";
import { ToastContext } from ".";
import { ToastData } from "../../../types/toast.types";

export const useToast = () => {
  const { toasts, setToasts } = useContext(ToastContext);

  const deleteToast = (id: number) => {
    setToasts((toasts) => toasts.filter((toast) => toast.id !== id));
  };

  const creteToast = (toast: ToastData) => {
    setToasts((toasts) => [...toasts, toast]);
    if (toast.duration) setTimeout(() => deleteToast(toast.id), toast.duration);
  };

  return { toasts, deleteToast, creteToast };
};
