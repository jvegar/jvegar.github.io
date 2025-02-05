import { useData } from "../../../context/useData";
import { getImageURL } from "../../../utils/image-util";
import styles from "./Stack.module.css";

function Stack() {
  const { data, isLoading, error } = useData();
  const { techStack: stackData } = data || {};

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <section className={styles.stackSection} id="stack-section">
      <div className={styles.stackSectionContainer}>
        <div className={styles.stackSectionRow}>
          {stackData?.map((item) => (
            <div key={item.name} className={styles.stackSectionColumn}>
              <a
                href={item.url}
                className={styles.stackSectionPartner}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={getImageURL(item.iconPath)}
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
