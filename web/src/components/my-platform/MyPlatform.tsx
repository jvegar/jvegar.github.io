import LoginPage from "./LoginPage/LoginPage";
import styles from "./MyPlatform.module.css";

function MyPlatform() {
  return (
    <section className={styles.myPlatformSection} id="my-platform-section">
      <div className={styles.container}>
        <LoginPage />
      </div>
    </section>
  );
}

export default MyPlatform;
