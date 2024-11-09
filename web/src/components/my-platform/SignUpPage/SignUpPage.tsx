import { useState } from "react";
import styles from "./SignUpPage.module.css";
import { Input } from "../../common/Input";
import { Button } from "../../common/Button";
import { Alert } from "../../common/Alert";

interface SignUpForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function SignUpPage() {
  const [formData, setFormData] = useState<SignUpForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<Partial<SignUpForm>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Partial<SignUpForm> = {};

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords don't match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsLoading(true);
      try {
        // Add your signup logic here
      } finally {
        setIsLoading(false);
      }
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
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
            error={errors.password}
          />

          <Input
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            required
            error={errors.confirmPassword}
          />

          {Object.keys(errors).length > 0 && (
            <Alert message="Please fix the errors above" type="error" />
          )}

          <Button type="submit" isLoading={isLoading}>
            Sign Up
          </Button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
