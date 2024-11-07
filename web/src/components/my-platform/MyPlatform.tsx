import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import styles from "./MyPlatform.module.css";

function MyPlatform() {
  return (
    <section className={styles.myPlatformSection} id="my-platform-section">
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </section>
  );
}

export default MyPlatform;
