import ServiceCard from "./ServiceCard";
import styles from "./Services.module.css";
import webDesignIcon from "../../assets/icon-web-design.svg";
import webDevelopmentIcon from "../../assets/icon-web-development.svg";
import financialAdvisoryIcon from "../../assets/icon-financial-advisory.svg";
import appDevelopmentIcon from "../../assets/icon-app-development.svg";
import brandingIcon from "../../assets/icon-branding.svg";
import processAutomationIcon from "../../assets/icon-process-automation.svg";

const services = [
  { icon: webDesignIcon, title: "WEB DESIGN" },
  { icon: webDevelopmentIcon, title: "WEB DEVELOPMENT" },
  { icon: financialAdvisoryIcon, title: "FINANCIAL ADVISORY" },
  { icon: appDevelopmentIcon, title: "APP DEVELOPMENT" },
  { icon: brandingIcon, title: "BRANDING" },
  { icon: processAutomationIcon, title: "PROCESS AUTOMATION" },
];

function Services() {
  return (
    <div className={styles.servicesContainer} id="services-section">
      <h1>Services</h1>
      <p>I offer different services.</p>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} />
        ))}
      </div>
    </div>
  );
}

export default Services;
