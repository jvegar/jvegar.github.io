type AlertType = "error" | "success";

interface AlertProps {
  message: string;
  type?: AlertType;
}

export const Alert = ({ message, type = "error" }: AlertProps) => {
  const styles = {
    error: "bg-red-50 text-red-700 border-red-200",
    success: "bg-green-50 text-green-700 border-green-200",
  };

  return message ? (
    <div
      className={`p-4 rounded-lg border ${styles[type]} text-sm flex items-start`}
    >
      {type === "error" && (
        <svg
          className="h-5 w-5 mr-2 flex-shrink-0"
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
  ) : null;
};
