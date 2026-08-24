import { PageChrome } from "@/components/PageChrome";
import { SectionHero } from "@/components/SectionHero";

export default function ContactPage() {
  return (
    <PageChrome>
      <SectionHero
        eyebrow="Contato"
        title="Fale com a HFix Lab para atendimento e orçamentos."
        text="Centralize as entradas pelo site e direcione cada solicitação para uma ordem de serviço."
      />
      <section className="section">
        <div className="shell contact-grid">
          <a className="contact-card" href="https://wa.me/" target="_blank" rel="noreferrer">
            <span aria-hidden="true">☎</span>
            <strong>WhatsApp</strong>
            <p>Atendimento rápido para novas solicitações.</p>
          </a>
          <a className="contact-card" href="mailto:contato@hfixlab.com">
            <span aria-hidden="true">@</span>
            <strong>E-mail</strong>
            <p>contato@hfixlab.com</p>
          </a>
          <div className="contact-card">
            <span aria-hidden="true">⌂</span>
            <strong>Coleta e entrega</strong>
            <p>Atendimento sob agendamento.</p>
          </div>
        </div>
      </section>
    </PageChrome>
  );
}
