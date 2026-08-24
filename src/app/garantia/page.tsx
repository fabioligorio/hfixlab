import { PageChrome } from "@/components/PageChrome";
import { SectionHero } from "@/components/SectionHero";

export default function WarrantyPage() {
  return (
    <PageChrome>
      <SectionHero
        eyebrow="Garantias"
        title="Garantia vinculada a OS, servico, peca e prazo."
        text="O cliente visualiza garantias ativas, expiradas ou em analise com historico de atendimento."
      />
      <section className="section">
        <div className="shell warranty-panel">
          <span className="status-badge">Garantia ativa</span>
          <h2>HF-2026-00001 · iPhone 15 Pro</h2>
          <p>Troca de tela com testes de display, touch, camera, audio e carregamento aprovados.</p>
          <dl>
            <div><dt>Inicio</dt><dd>24/08/2026</dd></div>
            <div><dt>Final</dt><dd>22/11/2026</dd></div>
            <div><dt>Status</dt><dd>Ativa</dd></div>
          </dl>
        </div>
      </section>
    </PageChrome>
  );
}

