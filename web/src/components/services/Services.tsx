import ServiceCard from "./ServiceCard";
import styles from "./Services.module.css";
import { useQuery } from "@tanstack/react-query";

interface ServiceItem {
  id: number;
  title: string;
  iconPath: string;
}

function Services() {
  const fetchServicesData = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_MY_PLATFORM_API_URL}/api/services`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  };

  const {
    data: servicesData = [],
    error,
    isLoading,
  } = useQuery<ServiceItem[]>({
    queryKey: ["services"],
    queryFn: fetchServicesData,
  });

  const renderContent = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{`Failed to fetch services data: ${error.message}`}</p>;
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
