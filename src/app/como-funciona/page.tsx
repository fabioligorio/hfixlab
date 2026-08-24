import { PageChrome } from "@/components/PageChrome";
import { SectionHero } from "@/components/SectionHero";
import { steps } from "@/lib/content";

export default function HowItWorksPage() {
  return (
    <PageChrome>
      <SectionHero
        eyebrow="Como funciona"
        title="Um fluxo simples para o cliente e organizado para o laboratorio."
        text="A jornada cobre solicitacao, coleta, entrada, diagnostico, orcamento, aprovacao, reparo, testes, pagamento, entrega e garantia."
      />
      <section className="section">
        <div className="shell step-grid">
          {steps.map((step, index) => (
            <article className="step-card" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>
    </PageChrome>
  );
}

