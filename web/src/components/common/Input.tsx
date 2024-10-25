import { FC } from "react";
import styles from "./Input.module.css";
import { clsx } from "clsx";

interface InputProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export const Input: FC<InputProps> = ({ label, error, ...props }) => {
  const inputClassName = clsx(styles.input, {
    [styles.inputError]: error,
  });

  return (
    <div className={styles.inputWrapper}>
      <label className={styles.inputLabel} htmlFor={props.name}>
        {label}
      </label>

      <input {...props} id={props.name} className={inputClassName} />

      {error && <p className={styles.inputErrorMessage}>{error}</p>}
    </div>
  );
};
