import React, { useState } from "react";
import styles from "./Contact.module.css";
import { Input } from "../common/Input";
import { Button } from "../common/Button";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setValidationErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsLoading(true);
    // Add your form submission logic here
  };

  return (
    <section className={styles.contactContainer} id="contact-section">
      <h1 className={styles.contactTitle}>Contact Me</h1>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <Input
          label="Name"
          name="name"
          type="text"
          placeholder="Enter your name"
          required
          disabled={isLoading}
          value={formData.name}
          onChange={handleChange}
          error={validationErrors.name}
        />
        <Input
          label="Email"
          name="email"
          type="text"
          placeholder="Enter your email"
          required
          disabled={isLoading}
          value={formData.email}
          onChange={handleChange}
          error={validationErrors.email}
        />
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <Button type="submit" disabled={isLoading} isLoading={isLoading}>
          Send Message
        </Button>
      </form>
    </section>
  );
}

export default Contact;
