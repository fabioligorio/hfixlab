import { PageChrome } from "@/components/PageChrome";
import { SectionHero } from "@/components/SectionHero";
import { ServiceGrid } from "@/components/ServiceGrid";

export default function ServicesPage() {
  return (
    <PageChrome>
      <SectionHero
        eyebrow="Serviços"
        title="Reparos especializados com diagnóstico antes da aprovação."
        text="A HFix Lab atende aparelhos eletrônicos com rastreio de entrada, fotos, orçamento digital e testes de qualidade."
      />
      <section className="section">
        <div className="shell">
          <ServiceGrid />
        </div>
      </section>
    </PageChrome>
  );
}
