import { create } from "zustand";
import { ToastData } from "../types/toast.types";

interface ToastsState {
  toasts: ToastData[];
  createToast: (toast: ToastData) => void;
  deleteToast: (id: number) => void;
}

const useToastsStore = create<ToastsState>((set) => ({
  toasts: [],

  createToast: (toast) =>
    set((state) => {
      if (toast.duration) setTimeout(() => state.deleteToast(toast.id), toast.duration);
      return { toasts: [...state.toasts, toast] };
    }),

  deleteToast: (id) => set((state) => ({ toasts: state.toasts.filter((toast) => toast.id !== id) })),
}));

export default useToastsStore;
