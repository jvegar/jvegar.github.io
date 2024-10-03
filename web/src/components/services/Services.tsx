import ServiceCard from "./ServiceCard";
import "./Services.css";

const services = [
  { icon: "🔍", title: "WEB DESIGN" },
  { icon: "🧪", title: "WEB DEVELOPMENT" },
  { icon: "💡", title: "FINANCIAL ADVISORY" },
  { icon: "🌐", title: "APP DEVELOPING" },
  { icon: "🎨", title: "BRANDING" },
  { icon: "⚙️", title: "PROCESSES AUTOMATION" },
];

function Services() {
  return (
    <div className="services-container" id="services-section">
      <h1>Services</h1>
      <p>I offer different services.</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} />
        ))}
      </div>
    </div>
  );
}

export default Services;
