import "./Stack.css";
import Aws from "../../../assets/icon-aws.svg";
import Docker from "../../../assets/icon-docker.svg";
import Javascript from "../../../assets/icon-javascript.svg";
import Nodejs from "../../../assets/icon-nodejs.svg";
import React from "../../../assets/icon-react.svg";
import Typescript from "../../../assets/icon-typescript.svg";
import Postgresql from "../../../assets/icon-postgres.svg";

function Stack() {
  return (
    <section className="stack-section" id="stack-section">
      <div className="stack-section__container">
        <div className="stack-section__row">
          {[Nodejs, Javascript, Typescript, React, Postgresql, Aws, Docker].map(
            (icon, index) => (
              <div key={index} className="stack-section__column">
                <a href="#" className="stack-section__partner">
                  <img
                    src={icon}
                    className="stack-section__image"
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
