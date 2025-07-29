import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Alert } from "@components/common/Alert";
import { Input } from "@components/common/Input";
import { Button } from "@components/common/Button";
import UserProfile from "@components/my-platform/UserProfile/UserProfile";
import styles from "./LoginPage.module.css";

const SIGN_IN_URL = import.meta.env.VITE_SIGN_IN_URL;
const AUTH_ME_URL = import.meta.env.VITE_AUTH_ME_URL;

function LoginPage() {
  const navigate = useNavigate();
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
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const checkExistingSession = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) return;

      try {
        setIsLoading(true);
        const response = await fetch(AUTH_ME_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Session expired");
        }

        const userData = await response.json();
        setUserData(userData);
      } catch (err) {
        console.error((err as Error).message);
        localStorage.removeItem("accessToken");
        setError("Session expired. Please sign in again.");
      } finally {
        setIsLoading(false);
      }
    };

    checkExistingSession();
  }, []);

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
      const response = await fetch(SIGN_IN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Authentication failed");
      }

      const data = await response.json();
      setUserData(data.user);
      // Store the access token in localStorage or a secure storage method
      localStorage.setItem("accessToken", data.accessToken);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem("accessToken");
  };

  if (userData) {
    return <UserProfile user={userData} onLogout={handleLogout} />;
  }

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
              label="Username"
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
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/platform/signup");
              }}
              className={styles.loginSignupLink}
            >
              Sign up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
