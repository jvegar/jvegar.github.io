import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function Button({
  isLoading,
  variant = "primary",
  fullWidth = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${
        fullWidth ? styles.fullWidth : ""
      }`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className={styles.loading}>Loading...</span>
      ) : (
        children
      )}
    </button>
  );
}
