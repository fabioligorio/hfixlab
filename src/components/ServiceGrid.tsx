import { services } from "@/lib/content";

export function ServiceGrid() {
  return (
    <div className="service-grid">
      {services.map((service) => (
        <article className="service-card" key={service}>
          <span aria-hidden="true">+</span>
          <h3>{service}</h3>
          <p>Diagnóstico técnico, registro da OS e aprovação antes do reparo.</p>
        </article>
      ))}
    </div>
  );
}
