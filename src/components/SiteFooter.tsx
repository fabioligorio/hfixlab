import Link from "next/link";
import { BrandMark } from "./BrandMark";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <BrandMark />
          <p>
            Assistencia tecnica especializada. Buscamos, reparamos e
            entregamos.
          </p>
        </div>
        <div>
          <h2>Atendimento</h2>
          <a href="/solicitar-reparo">Solicitar reparo</a>
          <a href="/acompanhar">Acompanhar OS</a>
          <a href="/contato">Falar com a HFix</a>
        </div>
        <div>
          <h2>Links</h2>
          <Link href="/#servicos">Servicos</Link>
          <Link href="/#atendimento">Delivery</Link>
          <Link href="/#confianca">Garantia</Link>
        </div>
      </div>
    </footer>
  );
}
