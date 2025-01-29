import { getImageURL } from "../../../utils/image-util";
import styles from "./Stack.module.css";
// import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

interface StackItem {
  id: number;
  name: string;
  url: string;
  iconPath: string;
  orderIndex: number;
}

function Stack() {
  const fetchStackData = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_MY_PLATFORM_API_URL}/api/tech-stack`
    );
    return await response.json();
  };

  const {
    isPending,
    error,
    data: stackData,
  } = useQuery<StackItem[]>({
    queryKey: ["stackData"],
    queryFn: fetchStackData,
  });

  if (isPending) return "Loading...";

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
