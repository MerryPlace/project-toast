import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function addToast(variant, message) {
    const toastId = crypto.randomUUID();

    const newToast = { toastId, variant, message };
    setToasts([newToast, ...toasts]);
  }

  function removeToast(toastId) {
    const newToasts = toasts.filter((toast) => {
      return toast.toastId !== toastId;
    });
    setToasts(newToasts);
  }

  function clearToasts() {
    setToasts([]);
  }

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, removeToast, clearToasts }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
