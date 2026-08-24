import Image from "next/image";

const apps = [
  ["Telefone", "phone"],
  ["Mensagens", "message"],
  ["Safari", "safari"],
  ["Camera", "camera"],
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
  ["Camera", "camera"],
];

function IPhoneHomeScreen({ fixed = false }: { fixed?: boolean }) {
  return (
    <div className={fixed ? "iphone-home fixed-home" : "iphone-home"}>
      <div className="iphone-status">
        <span>9:41</span>
        <span>5G ▮▮▮</span>
      </div>
      <div className="iphone-widget">
        <Image
          src="/images/hfix-logo-simple.png"
          alt=""
          width={252}
          height={128}
          priority
        />
      </div>
      <div className="app-grid">
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

export function DeviceVisual() {
  return (
    <div className="device-visual" aria-label="Animacao de tela de iPhone reparada">
      <div className="device-frame">
        <div className="device-speaker" />
        <div className="iphone-screen">
          <div className="screen-state screen-cracked" aria-hidden="true">
            <IPhoneHomeScreen />
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
            <IPhoneHomeScreen fixed />
          </div>
          <div className="screen-scan-line" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
