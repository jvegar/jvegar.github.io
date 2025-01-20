import { getImageURL } from "../../../utils/image-util";
import styles from "./Stack.module.css";
import { useEffect, useState } from "react";

interface StackItem {
  id: number;
  name: string;
  url: string;
  iconPath: string;
  orderIndex: number;
}

function Stack() {
  const [stackData, setStackData] = useState<StackItem[]>([]);

  useEffect(() => {
    const fetchStackData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_MY_PLATFORM_API_URL}/api/tech-stack`
        );
        const data = await response.json();
        setStackData(data);
      } catch (error) {
        console.error("Error fetching stack data:", error);
      }
    };

    fetchStackData();
  }, []);
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
