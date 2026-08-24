import { BrandMark } from "./BrandMark";

const navItems = [
  ["Servicos", "/#servicos"],
  ["Delivery", "/#atendimento"],
  ["Contato", "/#contato"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <BrandMark />
        <nav className="desktop-nav" aria-label="Navegacao principal">
          {navItems.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <a className="button button-primary compact" href="/solicitar-reparo">
          <span aria-hidden="true">+</span>
          Agendar reparo
        </a>
      </div>
    </header>
  );
}
