import styles from "./Alert.module.css";
import { clsx } from "clsx";

type AlertType = "error" | "success";

interface AlertProps {
  message: string;
  type?: AlertType;
}

export const Alert = ({ message, type = "error" }: AlertProps) => {
  if (!message) return null;

  const alertStyles = clsx(styles.alert, {
    [styles.alertError]: type === "error",
    [styles.alertSuccess]: type === "success",
  });

  return (
    <div className={alertStyles}>
      {type === "error" && (
        <svg
          className={styles.alertIcon}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {message}
    </div>
  );
};
