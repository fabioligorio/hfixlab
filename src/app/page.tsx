import { DeviceVisual } from "@/components/DeviceVisual";
import { PageChrome } from "@/components/PageChrome";
import { ServiceGrid } from "@/components/ServiceGrid";
import { Timeline } from "@/components/Timeline";
import { steps, trustItems } from "@/lib/content";

export default function Home() {
  return (
    <PageChrome>
      <section className="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Assistencia tecnica com coleta e rastreio</p>
            <h1>HFix Lab</h1>
            <p className="lead">
              Seu aparelho funcionando novamente. Sem complicacao.
            </p>
            <p>
              Buscamos, diagnosticamos, reparamos, testamos e entregamos seu
              dispositivo com processo profissional e visibilidade em cada
              etapa.
            </p>
            <div className="actions">
              <a className="button button-primary" href="/solicitar-reparo">
                <span aria-hidden="true">+</span>
                Solicitar reparo
              </a>
              <a className="button button-secondary" href="/acompanhar">
                <span aria-hidden="true">⌕</span>
                Acompanhar OS
              </a>
            </div>
          </div>
          <DeviceVisual />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Como funciona</p>
            <h2>Da coleta a garantia, tudo fica rastreavel.</h2>
          </div>
          <div className="step-grid">
            {steps.map((step, index) => (
              <article className="step-card" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-band">
        <div className="shell split">
          <div>
            <p className="eyebrow">Servicos</p>
            <h2>Diagnostico e reparo para os principais defeitos.</h2>
            <p>
              Smartphones, tablets, notebooks e smartwatches recebem entrada
              com fotos, checklist, tecnico responsavel e status de OS.
            </p>
          </div>
          <ServiceGrid />
        </div>
      </section>

      <section className="section">
        <div className="shell split">
          <div>
            <p className="eyebrow">Acompanhamento</p>
            <h2>O cliente sabe exatamente onde o aparelho esta.</h2>
            <p>
              O rastreio da ordem de servico reduz mensagens manuais e aumenta
              a confianca durante diagnostico, orcamento, reparo e entrega.
            </p>
            <div className="actions">
              <a className="button button-primary" href="/acompanhar">
                <span aria-hidden="true">⌕</span>
                Consultar status
              </a>
            </div>
          </div>
          <Timeline />
        </div>
      </section>

      <section className="section surface-band">
        <div className="shell">
          <div className="section-heading">
            <p className="eyebrow">Confianca</p>
            <h2>Processo tecnico, claro e auditavel.</h2>
          </div>
          <div className="trust-grid">
            {trustItems.map((item) => (
              <div className="trust-item" key={item}>
                <span aria-hidden="true">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageChrome>
  );
}

