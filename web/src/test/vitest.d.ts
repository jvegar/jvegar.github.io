/// <reference types="vitest" />
import '@testing-library/jest-dom';

interface CustomMatchers<R = unknown> {
  toBeInTheDocument(): R;
  toHaveClass(className: string): R;
  toHaveAttribute(attr: string, value?: string): R;
}
