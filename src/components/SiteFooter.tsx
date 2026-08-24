import { BrandMark } from "./BrandMark";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <BrandMark />
          <p>
            Tecnologia reparada com precisao. Buscamos, reparamos e entregamos.
          </p>
        </div>
        <div>
          <h2>Atendimento</h2>
          <a href="/solicitar-reparo">Solicitar reparo</a>
          <a href="/acompanhar">Acompanhar OS</a>
          <a href="/contato">Falar com a HFix</a>
        </div>
        <div>
          <h2>Sistema</h2>
          <a href="/app/dashboard">PWA do cliente</a>
          <a href="/admin/dashboard">Painel interno</a>
          <a href="/garantia">Garantias</a>
        </div>
      </div>
    </footer>
  );
}

