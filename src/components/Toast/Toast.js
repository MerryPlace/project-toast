import React from "react";
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./Toast.module.css";

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ variant, children, onDismiss }) {
  const Icon = ICONS_BY_VARIANT[variant];
  const variantStyle = styles[variant];

  return (
    <div className={`${styles.toast} ${variantStyle}`}>
      <div className={styles.iconContainer}>
        <Icon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{`${variant} - `}</VisuallyHidden>
        {children}
      </p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          onDismiss();
        }}
      >
        <button
          className={styles.closeButton}
          aria-label="Dismiss message"
          aria-live="off"
        >
          <X size={24} />
        </button>
      </form>
    </div>
  );
}

export default Toast;
