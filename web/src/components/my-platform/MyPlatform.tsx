import { Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage/LoginPage";
import SignupPage from "./SignupPage/SignupPage";
import EditData from "./EditData/EditData";
import styles from "./MyPlatform.module.css";

function MyPlatform() {
  return (
    <section className={styles.myPlatformSection} id="my-platform-section">
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/edit" element={<EditData />} />
        </Routes>
      </div>
    </section>
  );
}

export default MyPlatform;
