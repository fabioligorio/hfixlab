import { PageChrome } from "@/components/PageChrome";
import { SectionHero } from "@/components/SectionHero";
import { Timeline } from "@/components/Timeline";

export default function TrackPage() {
  return (
    <PageChrome>
      <SectionHero
        eyebrow="Acompanhar reparo"
        title="Consulte a ordem de servico e veja o status atual."
        text="A linha do tempo abaixo representa a experiencia do cliente para rastrear diagnostico, orcamento, reparo e entrega."
      />
      <section className="section">
        <div className="shell split">
          <form className="tracking-box">
            <label>
              Codigo da OS
              <input defaultValue="HF-2026-00001" />
            </label>
            <button className="button button-primary" type="button">
              <span aria-hidden="true">⌕</span>
              Consultar
            </button>
          </form>
          <Timeline />
        </div>
      </section>
    </PageChrome>
  );
}

