import Image from "next/image";

export function DeviceVisual() {
  return (
    <div className="device-visual" aria-label="Animacao de tela de iPhone reparada">
      <div className="device-frame">
        <div className="device-speaker" />
        <div className="iphone-screen">
          <div className="screen-state screen-cracked" aria-hidden="true">
            <div className="screen-wallpaper" />
            <div className="crack crack-one" />
            <div className="crack crack-two" />
            <div className="crack crack-three" />
          </div>
          <div className="screen-state screen-repaired" aria-hidden="true">
            <div className="screen-wallpaper repaired" />
            <Image
              src="/images/hfix-logo-simple.png"
              alt=""
              width={252}
              height={128}
              priority
            />
          </div>
          <div className="screen-alert">Tela trincada</div>
          <div className="screen-alert fixed">Tela consertada</div>
          <div className="screen-scan-line" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
