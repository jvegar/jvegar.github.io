import { ReactNode } from "react";
import styles from "./Button.module.css";

type ButtonType = "submit" | "reset" | "button" | undefined;

interface ButtonProps {
  children: ReactNode;
  isLoading?: boolean;
  type?: ButtonType;
  disabled?: boolean;
}

export const Button = ({
  children,
  isLoading = false,
  type = "button",
  disabled = false,
  ...props
}: ButtonProps) => (
  <button
    type={type}
    disabled={disabled || isLoading}
    className={styles.button}
    {...props}
  >
    {isLoading ? (
      <>
        <svg
          className={styles.buttonSpinner}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className={styles.buttonSpinnerTrack}
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className={styles.buttonSpinnerProgress}
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        Processing...
      </>
    ) : (
      children
    )}
  </button>
);
