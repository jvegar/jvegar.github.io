import { useState } from "react";
import { Alert } from "../../common/Alert";
import { Input } from "../../common/Input";
import { Button } from "../../common/Button";
import styles from "./LoginPage.module.css";

function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    emailOrUsername: "",
    password: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    emailOrUsername: "",
    password: "",
  });

  const validateForm = () => {
    const errors = {
      emailOrUsername: "",
      password: "",
    };

    if (!formData.emailOrUsername.trim()) {
      errors.emailOrUsername = "Username is required";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    setValidationErrors(errors);
    return !Object.values(errors).some((error) => error);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear errors when user types
    setValidationErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
    setError("");
  };

  const handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://nest-local-oauth.onrender.com/api/auth/sign-in",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Authentication failed");
      }

      const data = await response.json();
      console.log(data);
      // Handle successful login (e.g., store token, redirect)
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.login}>
      <div className={styles.loginContainer}>
        {/* Header */}
        <div className={styles.loginHeader}>
          <h2 className={styles.loginTitle}>Welcome back</h2>
          <p className={styles.loginSubtitle}>Please sign in to your account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <Alert message={error} />

          <div className={styles.loginFormFields}>
            <Input
              label="EmailOrUsername"
              name="emailOrUsername"
              type="text"
              placeholder="Enter your username"
              required
              disabled={isLoading}
              value={formData.emailOrUsername}
              onChange={handleInputChange}
              error={validationErrors.emailOrUsername}
            />

            <Input
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required
              disabled={isLoading}
              value={formData.password}
              onChange={handleInputChange}
              error={validationErrors.password}
            />
          </div>

          {/* Forgot Password Link */}
          <div className={styles.loginForgotPassword}>
            <a
              href="/forgot-password"
              className={styles.loginForgotPasswordLink}
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <Button type="submit" disabled={isLoading} isLoading={isLoading}>
            Sign in
          </Button>

          {/* Sign Up Link */}
          <div className={styles.loginSignup}>
            Don't have an account?{" "}
            <a href="/register" className={styles.loginSignupLink}>
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
