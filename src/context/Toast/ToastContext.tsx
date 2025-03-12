import { createContext, useContext } from "react";

export interface ToastData {
  id: number;
  message: string;
  type?: "info" | "success" | "error";
  duration?: number;
}

interface ToastContext {
  addToast: (toast: Omit<ToastData, "id">) => void;
}

const defaultToastContextValue: ToastContext = {
  addToast: () => {},
};

export const ToastContext = createContext(defaultToastContextValue);

export const useToastContext = () => useContext(ToastContext);
