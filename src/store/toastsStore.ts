import { create } from "zustand";
import { ToastData } from "../types/toast.types";

interface ToastsState {
  toasts: ToastData[];
  createToast: (toast: ToastData) => void;
  deleteToast: (id: number) => void;
}

const createToast = (toast: ToastData, state: ToastsState) => {
  if (toast.duration) setTimeout(() => state.deleteToast(toast.id), toast.duration);
  return { toasts: [...state.toasts, toast] };
};

const deleteToast = (id: number, state: ToastsState) => {
  return { toasts: state.toasts.filter((toast) => toast.id !== id) };
};

const useToastsStore = create<ToastsState>(
  (set): ToastsState => ({
    toasts: [],

    createToast: (toast) => set((state) => createToast(toast, state)),

    deleteToast: (id) => set((state) => deleteToast(id, state)),
  })
);

export default useToastsStore;
