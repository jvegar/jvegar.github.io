import { ReactNode } from "react";

type ButtonType = "submit" | "reset" | "button" | undefined;

interface ButtonProps {
  children: ReactNode;
  isLoading: boolean;
  type: ButtonType;
  disabled: boolean;
}

export const Button = ({ children, isLoading, ...props }: ButtonProps) => (
  <button
    {...props}
    className={`
        w-full px-4 py-2 text-sm font-medium text-white 
        bg-blue-600 rounded-lg shadow-sm
        hover:bg-blue-700 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        disabled:bg-blue-400 disabled:cursor-not-allowed
        transition-colors duration-200
        flex items-center justify-center
      `}
  >
    {isLoading ? (
      <>
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
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
