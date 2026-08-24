import { Timeline } from "@/components/Timeline";

export default function CustomerDashboardPage() {
  return (
    <main className="app-screen">
      <section className="app-panel">
        <p className="eyebrow">PWA do cliente</p>
        <h1>Olá, Fabio.</h1>
        <p>Acompanhe reparos, garantias e orçamentos em um único lugar.</p>
        <div className="actions">
          <a className="button button-primary" href="/solicitar-reparo">
            <span aria-hidden="true">+</span>
            Novo reparo
          </a>
          <a className="button button-secondary" href="/acompanhar">
            <span aria-hidden="true">⌕</span>
            Ver OS
          </a>
        </div>
      </section>
      <section className="app-panel">
        <h2>Última OS</h2>
        <Timeline />
      </section>
    </main>
  );
}
