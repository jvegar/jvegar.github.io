import LoginPage from "./LoginPage/LoginPage";
import styles from "./MyPlatform.module.css";

function MyPlatform() {
  return (
    <section className={styles.myPlatformSection} id="my-platform-section">
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>My Platform</h2>
        <LoginPage />
      </div>
    </section>
  );
}

export default MyPlatform;
