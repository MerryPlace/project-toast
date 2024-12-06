import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

import useOnKeyDown from "../../hooks/useOnKeyDown";

import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { removeToast, clearToasts, toasts } = React.useContext(ToastContext);

  useOnKeyDown("Escape", clearToasts);

  React.useEffect(() => {
    function handleEscape(event) {
      if (event.code === "Escape") {
        clearToasts();
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [clearToasts]);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast) => (
        <li className={styles.toastWrapper} key={toast.toastId}>
          <Toast
            variant={toast.variant}
            onDismiss={() => {
              removeToast(toast.toastId);
            }}
          >
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
