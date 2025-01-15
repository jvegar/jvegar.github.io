import ServiceCard from "./ServiceCard";
import styles from "./Services.module.css";
import { servicesData } from "../../data/services";

function Services() {
  return (
    <section className={styles.servicesContainer} id="services-section">
      <h1>Services</h1>
      <p>I offer different services.</p>
      <div className={styles.servicesGrid}>
        {servicesData.map((service) => (
          <ServiceCard
            key={service.title}
            icon={service.iconUrl}
            title={service.title}
          />
        ))}
      </div>
    </section>
  );
}

export default Services;
