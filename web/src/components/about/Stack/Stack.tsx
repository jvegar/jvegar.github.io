import styles from "./Stack.module.css";
import { stackData } from "../../../data/stack";

function Stack() {
  return (
    <section className={styles.stackSection} id="stack-section">
      <div className={styles.stackSectionContainer}>
        <div className={styles.stackSectionRow}>
          {stackData.map((item) => (
            <div key={item.name} className={styles.stackSectionColumn}>
              <a
                href={item.url}
                className={styles.stackSectionPartner}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={item.iconUrl}
                  className={styles.stackSectionImage}
                  alt={item.name}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stack;
