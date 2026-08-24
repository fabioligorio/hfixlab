import Image from "next/image";

import { DeviceVisual } from "@/components/DeviceVisual";
import { PageChrome } from "@/components/PageChrome";

const repairServices = [
  ["phone", "Conserto de Smartphones", "Diagnóstico técnico completo e reparos especializados."],
  ["screen", "Troca de Tela", "Reparo no mesmo fluxo, com peças de alta qualidade."],
  ["battery", "Troca de Bateria", "Peças selecionadas para máxima durabilidade."],
  ["charge", "Conector de Carga", "Atendimento express com testes completos."],
  ["glass", "Vidro Frontal", "Acabamento preciso com máxima proteção."],
  ["back", "Vidro Traseiro", "Linha premium para manter seu aparelho como novo."],
  ["audio", "Alto-falante & Mic", "Reparo fino para som claro e sem falhas."],
  ["solder", "Microsolda", "Diagnóstico avançado em nível de placa."],
];

const brands = [
  ["apple", "Apple", "/images/brands/apple.svg"],
  ["samsung", "Samsung", "/images/brands/samsung.svg"],
  ["motorola", "Motorola", "/images/brands/motorola.svg"],
  ["xiaomi", "Xiaomi", "/images/brands/xiaomi.svg"],
  ["lenovo", "Lenovo", "/images/brands/lenovo.svg"],
  ["asus", "ASUS", "/images/brands/asus.svg"],
  ["more", "Outras marcas", "/images/brands/more.svg"],
];

const attendance = [
  [
    "Coleta programada",
    "Buscamos seu aparelho, registramos a entrada e levamos ao laboratório para diagnóstico.",
    "Solicitar coleta",
  ],
  [
    "Atendimento no local",
    "Quando o reparo permitir, o técnico vai até você e executa o procedimento com praticidade.",
    "Agendar visita",
  ],
  [
    "Laboratório HFix",
    "Para reparos complexos, microsolda, testes e garantia, o aparelho segue o processo completo.",
    "Conhecer processo",
  ],
];

export default function Home() {
  return (
    <PageChrome>
      <section className="hero express-hero">
        <div className="shell hero-grid hero-phone-layout">
          <div className="hero-copy">
            <p className="eyebrow">Atendimento express · coleta e laboratório</p>
            <h1>Seu aparelho nas mãos certas. Rápido, claro e com garantia.</h1>
            <p className="lead">
              Assistência técnica especializada para celulares, tablets,
              notebooks e eletrônicos.
            </p>
            <p>
              Atendemos por coleta, no local ou em laboratório. Você solicita,
              acompanha a OS, aprova o orçamento e recebe o aparelho testado.
            </p>
            <div className="actions">
              <a className="button button-primary" href="/solicitar-reparo">
                <span aria-hidden="true">+</span>
                Agendar reparo
              </a>
              <a className="button button-secondary" href="#servicos">
                <span aria-hidden="true">⌕</span>
                Conhecer serviços
              </a>
            </div>
            <div className="hero-badges" aria-label="Diferenciais">
              <span>Atendimento express</span>
              <span>Garantia no serviço</span>
              <span>Buscamos e entregamos</span>
            </div>
          </div>
          <DeviceVisual variant="hero" />
        </div>
      </section>

      <section className="section" id="servicos">
        <div className="shell">
          <div className="section-kicker">O que a gente conserta</div>
          <div className="service-showcase">
            <div className="service-intro">
              <div className="service-pill">
                <span aria-hidden="true" />
                Assistência técnica especializada
              </div>
              <h2>
                Reparo completo para o seu <strong>aparelho.</strong>
              </h2>
              <p>
                Trabalhamos com as principais marcas e defeitos, sempre com
                diagnóstico preciso, registro da OS e aprovação antes do reparo.
              </p>
              <div className="service-benefits" aria-label="Benefícios">
                <span><i>◇</i>Garantia<br />até 90 dias</span>
                <span><i>◷</i>Agilidade<br />e precisão</span>
                <span><i>▣</i>Segurança<br />de dados</span>
              </div>
            </div>
            <div className="repair-visual" aria-hidden="true">
              <div className="repair-phone">
                <span className="repair-battery" />
                <span className="repair-board top" />
                <span className="repair-board mid" />
                <span className="repair-board chip" />
                <span className="repair-rails" />
              </div>
              <div className="repair-stat">
                <span>⌁</span>
                <strong>+5.000</strong>
                reparos realizados
              </div>
            </div>
          </div>
          <div className="section-heading service-mobile-copy">
            <h2>Reparo completo para o seu aparelho.</h2>
            <p>
              Trabalhamos com as principais marcas e defeitos, sempre com
              diagnóstico, registro da OS e aprovação antes do reparo.
            </p>
          </div>
          <div className="express-service-grid">
            {repairServices.map(([icon, title, subtitle]) => (
              <a className="express-service" href="/solicitar-reparo" key={title}>
                <span className={`service-icon ${icon}`} aria-hidden="true" />
                <strong>{title}</strong>
                <small>{subtitle}</small>
                <em aria-hidden="true">→</em>
              </a>
            ))}
          </div>
          <div className="brand-strip">
            <span>{String.raw`// Trabalhamos com`}</span>
            {brands.map(([brandClass, brand, logo]) => (
              <strong className={`brand-logo ${brandClass}`} key={brand}>
                <Image src={logo} alt="" width={132} height={42} />
                <span>{brand}</span>
              </strong>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-band" id="atendimento">
        <div className="shell">
          <div className="section-kicker">Atendimento</div>
          <div className="section-heading split-heading">
            <h2>Escolha como prefere ser atendido.</h2>
            <p>
              Três modalidades para o seu jeito: coleta, atendimento no local
              ou entrada em laboratório para reparos mais complexos.
            </p>
          </div>
          <div className="attendance-grid">
            {attendance.map(([title, text, action]) => (
              <a className="attendance-card" href="/solicitar-reparo" key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
                <strong>{action}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contato">
        <div className="shell split">
          <div>
            <div className="section-kicker">Onde nos encontrar</div>
            <h2>Chame a HFix Lab e resolva sem complicação.</h2>
            <p>
              Passe as informações do aparelho, escolha a melhor modalidade de
              atendimento e acompanhe a OS até a entrega.
            </p>
          </div>
          <div className="contact-panel">
            <div>
              <span>Endereço</span>
              <strong>Atendimento sob agendamento</strong>
            </div>
            <div>
              <span>WhatsApp · Telefone</span>
              <strong>A definir</strong>
              <p>Resposta rápida no horário comercial.</p>
            </div>
            <div>
              <span>Horário de atendimento</span>
              <strong>Segunda a Sábado</strong>
              <p>Configure os horários reais antes da publicação final.</p>
            </div>
            <a className="button button-primary" href="/solicitar-reparo">
              <span aria-hidden="true">+</span>
              Solicitar reparo
            </a>
          </div>
        </div>
      </section>
    </PageChrome>
  );
}
