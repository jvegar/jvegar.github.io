interface ServiceCardProps {
  icon: string;
  title: string;
}

function ServiceCard({ icon, title }: ServiceCardProps) {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
    </div>
  );
}

export default ServiceCard;
