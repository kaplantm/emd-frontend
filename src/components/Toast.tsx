import { useEffect } from "react";

const toastTypes = {
  success: "bg-green-500 text-white",
  error: "bg-red-500 text-white",
  info: "bg-blue-500 text-white",
  warning: "bg-yellow-500 text-black",
};

interface ToastProps {
  type?: keyof typeof toastTypes;
  id: number;
  message?: string;
  duration?: number;
  onClose: (id: number) => void;
}

export default function Toast({
  type = "info",
  message,
  id,
  onClose,
  duration = 3000,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration, id]);

  return (
    <div
      className={`p-4 text-center rounded-full shadow-lg w-full ${toastTypes[type]} animate-toast`}
    >
      <strong>{message}</strong>
    </div>
  );
}
