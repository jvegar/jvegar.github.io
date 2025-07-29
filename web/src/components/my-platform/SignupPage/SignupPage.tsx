import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignupPage.module.css";
import { Input } from "@components/common/Input";
import { Button } from "@components/common/Button";
import { Alert } from "@components/common/Alert";
import { Modal } from "@components/common/Modal";

const SIGN_UP_URL = import.meta.env.VITE_SIGN_UP_URL;

interface SignUpForm {
  name: string;
  email: string;
  password1: string;
  password2: string;
}

function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignUpForm>({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const [errors, setErrors] = useState<Partial<SignUpForm>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors: Partial<SignUpForm> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.password1) {
      newErrors.password1 = "Password is required";
    } else if (formData.password1.length < 8) {
      newErrors.password1 = "Password must be at least 8 characters";
    }

    if (formData.password1 !== formData.password2) {
      newErrors.password2 = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setApiError("");

    try {
      const response = await fetch(SIGN_UP_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setApiError(data.message || "Registration failed. Please try again.");
        return;
      }

      setShowSuccessModal(true);
    } catch (err) {
      setApiError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.signUp}>
      <div className={styles.signUpContainer}>
        <div className={styles.signUpHeader}>
          <h2 className={styles.signUpTitle}>Sign Up</h2>
          <p className={styles.signUpSubtitle}>
            Please sign up your new account
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            label="Name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            error={errors.name}
          />

          <Input
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john.doe@example.com"
            required
            error={errors.email}
          />

          <Input
            label="Password"
            name="password1"
            type="password"
            value={formData.password1}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            error={errors.password1}
          />

          <Input
            label="Confirm Password"
            name="password2"
            type="password"
            value={formData.password2}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
            error={errors.password2}
          />

          {Object.keys(errors).length > 0 && (
            <Alert message="Please fix the errors above" type="error" />
          )}

          {apiError && <Alert message={apiError} type="error" />}

          <Button type="submit" isLoading={isLoading}>
            Sign Up
          </Button>
          <div className={styles.signupLogin}>
            Already have an account?{" "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/platform");
              }}
              className={styles.signupLoginLink}
            >
              Sign in
            </a>
          </div>
        </form>
      </div>

      <Modal
        isOpen={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false);
          navigate("/platform/login");
        }}
        title="Registration Successful!"
      >
        <div className={styles.modalContent}>
          <p>
            Please check your email to complete the registration process. We've
            sent you a verification link to {formData.email}.
          </p>
          <Button
            onClick={() => {
              setShowSuccessModal(false);
              navigate("/platform/login");
            }}
          >
            Go to Login
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default SignupPage;
