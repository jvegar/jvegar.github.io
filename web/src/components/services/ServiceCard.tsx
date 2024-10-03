import styles from "./Services.module.css";

interface ServiceCardProps {
  icon: string;
  title: string;
}

function ServiceCard({ icon, title }: ServiceCardProps) {
  return (
    <div className={styles.serviceCard}>
      <div className={styles.serviceIcon}>{icon}</div>
      <h3>{title}</h3>
    </div>
  );
}

export default ServiceCard;
