import Image from "next/image";

const apps = [
  ["Telefone", "phone"],
  ["Mensagens", "message"],
  ["Safari", "safari"],
  ["Câmera", "camera"],
  ["Fotos", "photos"],
  ["Mail", "mail"],
  ["Notas", "notes"],
  ["Ajustes", "settings"],
  ["Maps", "maps"],
  ["Musica", "music"],
  ["Wallet", "wallet"],
  ["Saude", "health"],
];

const dockApps = [
  ["Telefone", "phone"],
  ["Safari", "safari"],
  ["Mensagens", "message"],
  ["Câmera", "camera"],
];

function PhoneHeroPanel() {
  return (
    <div className="phone-hero-panel">
      <p>Atendimento express, coleta e laboratório</p>
      <h2>Seu aparelho nas mãos certas.</h2>
      <span>
        Assistência técnica para celulares, tablets, notebooks e eletrônicos,
        com OS registrada, orçamento aprovado e aparelho testado.
      </span>
      <div className="phone-hero-actions">
        <a href="/solicitar-reparo">Agendar reparo</a>
        <a href="#servicos">Ver serviços</a>
      </div>
      <div className="phone-hero-badges">
        <small>Garantia</small>
        <small>Rastreio</small>
        <small>Entrega</small>
      </div>
    </div>
  );
}

function IPhoneHomeScreen({
  fixed = false,
  variant = "standard",
}: {
  fixed?: boolean;
  variant?: "standard" | "hero";
}) {
  return (
    <div className={fixed ? "iphone-home fixed-home" : "iphone-home"}>
      <div className="iphone-status">
        <span>9:41</span>
        <span>5G ▮▮▮</span>
      </div>
      {variant === "hero" ? (
        <PhoneHeroPanel />
      ) : (
        <div className="iphone-widget">
          <Image
            src="/images/hfix-logo-simple.png"
            alt=""
            width={252}
            height={128}
            priority
          />
        </div>
      )}
      <div className={variant === "hero" ? "app-grid hero-app-grid" : "app-grid"}>
        {apps.map(([label, variant]) => (
          <div className="app-tile" key={label}>
            <span className={`app-icon ${variant}`} />
            <small>{label}</small>
          </div>
        ))}
      </div>
      <div className="iphone-dock">
        {dockApps.map(([label, variant]) => (
          <span className={`app-icon ${variant}`} aria-label={label} key={label} />
        ))}
      </div>
    </div>
  );
}

export function DeviceVisual({ variant = "standard" }: { variant?: "standard" | "hero" }) {
  return (
    <div className={`device-visual ${variant === "hero" ? "hero-device" : ""}`} aria-label="Animação de tela de iPhone reparada">
      <div className="device-frame">
        <div className="device-speaker" />
        <div className="iphone-screen">
          <div className="screen-state screen-cracked" aria-hidden="true">
            <IPhoneHomeScreen variant={variant} />
            <Image
              className="cracked-screen-photo"
              src="/images/iphone-cracked-realistic.png"
              alt=""
              width={882}
              height={1792}
              priority
            />
          </div>
          <div className="screen-state screen-repaired" aria-hidden="true">
            <IPhoneHomeScreen fixed variant={variant} />
          </div>
          <div className="screen-scan-line" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
