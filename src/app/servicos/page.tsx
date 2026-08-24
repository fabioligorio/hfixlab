import { PageChrome } from "@/components/PageChrome";
import { SectionHero } from "@/components/SectionHero";
import { ServiceGrid } from "@/components/ServiceGrid";

export default function ServicesPage() {
  return (
    <PageChrome>
      <SectionHero
        eyebrow="Servicos"
        title="Reparos especializados com diagnostico antes da aprovacao."
        text="A HFix Lab atende aparelhos eletronicos com rastreio de entrada, fotos, orcamento digital e testes de qualidade."
      />
      <section className="section">
        <div className="shell">
          <ServiceGrid />
        </div>
      </section>
    </PageChrome>
  );
}

