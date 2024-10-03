import styles from "./Stack.module.css";
import Aws from "../../../assets/icon-aws.svg";
import Docker from "../../../assets/icon-docker.svg";
import Javascript from "../../../assets/icon-javascript.svg";
import Nodejs from "../../../assets/icon-nodejs.svg";
import React from "../../../assets/icon-react.svg";
import Typescript from "../../../assets/icon-typescript.svg";
import Postgresql from "../../../assets/icon-postgres.svg";

function Stack() {
  return (
    <section className={styles.stackSection} id="stack-section">
      <div className={styles.stackSectionContainer}>
        <div className={styles.stackSectionRow}>
          {[Nodejs, Javascript, Typescript, React, Postgresql, Aws, Docker].map(
            (icon, index) => (
              <div key={index} className={styles.stackSectionColumn}>
                <a href="#" className={styles.stackSectionPartner}>
                  <img
                    src={icon}
                    className={styles.stackSectionImage}
                    alt={`Partner ${index}`}
                  />
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

export default Stack;
