export type ToastType = "NORMAL" | "WARNING" | "ERROR";

export type ToastData = {
  text: string;
  type: ToastType;
  id: number;
  duration: number;
};
