import { useCallback, useState } from "react";
import Toast from "../../components/Toast";
import { ToastContext, ToastData } from "./ToastContext";

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = useCallback(
    ({ message, type = "info", duration = 3000 }: Omit<ToastData, "id">) => {
      const id = Date.now();
      setToasts((prev) => [...prev, { id, message, type, duration }]);
    },
    []
  );

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed top-4 left-4 right-4 space-y-2 z-50">
        {toasts.slice(0, 3).map(({ id, message, type, duration }) => (
          <Toast
            key={id}
            id={id}
            type={type}
            message={message}
            duration={duration}
            onClose={removeToast}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
