import ServiceCard from "./ServiceCard";
import styles from "./Services.module.css";
import { useEffect, useState } from "react";

interface ServiceItem {
  id: number;
  title: string;
  iconPath: string;
}

function Services() {
  const [servicesData, setServicesData] = useState<ServiceItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (servicesData.length > 0) return;
    const fetchServicesData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_MY_PLATFORM_API_URL}/api/services`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setServicesData(data);
      } catch (error) {
        setError(`Failed to fetch education data: ${(error as Error).message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchServicesData();
  }, [servicesData]);

  const renderContent = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }
    return (
      <>
        <h1>Services</h1>
        <p>I offer different services.</p>
        <div className={styles.servicesGrid}>
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.iconPath}
              title={service.title}
            />
          ))}
        </div>
      </>
    );
  };

  return (
    <section className={styles.servicesContainer} id="services-section">
      {renderContent()}
    </section>
  );
}

export default Services;
