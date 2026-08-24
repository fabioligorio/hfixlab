import { DeviceVisual } from "@/components/DeviceVisual";
import { PageChrome } from "@/components/PageChrome";

const repairServices = [
  ["Conserto de Smartphones", "Diagnostico tecnico"],
  ["Troca de Tela", "Reparo no mesmo fluxo"],
  ["Troca de Bateria", "Pecas selecionadas"],
  ["Conector de Carga", "Atendimento express"],
  ["Vidro Frontal", "Acabamento preciso"],
  ["Vidro Traseiro", "Linha premium"],
  ["Alto-falante & Mic", "Reparo fino"],
  ["Microsolda", "Diagnostico avancado"],
];

const brands = ["Apple", "Samsung", "Motorola", "Xiaomi", "Lenovo", "Asus", "e mais"];

const attendance = [
  [
    "01",
    "Coleta programada",
    "Buscamos seu aparelho, registramos a entrada e levamos ao laboratorio para diagnostico.",
    "Solicitar coleta",
  ],
  [
    "02",
    "Atendimento no local",
    "Quando o reparo permitir, o tecnico vai ate voce e executa o procedimento com praticidade.",
    "Agendar visita",
  ],
  [
    "03",
    "Laboratorio HFix",
    "Para reparos complexos, microsolda, testes e garantia, o aparelho segue o processo completo.",
    "Conhecer processo",
  ],
];

const accessories = [
  ["Capas & cases", "Protecao para as principais marcas"],
  ["Peliculas", "Vidro, privacidade e matte"],
  ["Carregadores", "Originais e homologados"],
  ["Cabos", "USB-C, Lightning e Micro USB"],
  ["Fones", "Com fio e Bluetooth"],
  ["Suportes", "Mesa, carro e bancada"],
];

const reasons = [
  ["24H", "Atendimento agil", "Triagem rapida e status claro desde a solicitacao."],
  ["90D", "Garantia no servico", "Historico da OS, testes e cobertura vinculada ao reparo."],
  ["OS", "Rastreio completo", "Coleta, diagnostico, orcamento, reparo, testes e entrega."],
  ["R$0", "Orcamento transparente", "Aprovacao digital antes de qualquer execucao."],
];

export default function Home() {
  return (
    <PageChrome>
      <section className="hero express-hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Atendimento express · coleta e laboratorio</p>
            <h1>Seu aparelho nas maos certas. Rapido, claro e com garantia.</h1>
            <p className="lead">
              Assistencia tecnica especializada para celulares, tablets,
              notebooks e eletronicos.
            </p>
            <p>
              Atendemos por coleta, no local ou em laboratorio. Voce solicita,
              acompanha a OS, aprova o orcamento e recebe o aparelho testado.
            </p>
            <div className="actions">
              <a className="button button-primary" href="/solicitar-reparo">
                <span aria-hidden="true">+</span>
                Agendar reparo
              </a>
              <a className="button button-secondary" href="#servicos">
                <span aria-hidden="true">⌕</span>
                Conhecer servicos
              </a>
            </div>
            <div className="hero-badges" aria-label="Diferenciais">
              <span>Atendimento express</span>
              <span>Garantia no servico</span>
              <span>Buscamos e entregamos</span>
            </div>
          </div>
          <DeviceVisual />
        </div>
      </section>

      <section className="section" id="servicos">
        <div className="shell">
          <div className="section-kicker">01 — O que a gente conserta</div>
          <div className="section-heading split-heading">
            <h2>Reparo completo para o seu aparelho.</h2>
            <p>
              Trabalhamos com as principais marcas e defeitos, sempre com
              diagnostico, registro da OS e aprovacao antes do reparo.
            </p>
          </div>
          <div className="express-service-grid">
            {repairServices.map(([title, subtitle]) => (
              <a className="express-service" href="/solicitar-reparo" key={title}>
                <strong>{title}</strong>
                <span>· {subtitle}</span>
              </a>
            ))}
          </div>
          <p className="service-note">
            A HFix Lab atende clientes com coleta, atendimento no local e
            laboratorio tecnico para reparos avancados.
          </p>
          <div className="brand-strip">
            <span>{String.raw`// Trabalhamos com`}</span>
            {brands.map((brand) => (
              <strong key={brand}>{brand}</strong>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-band" id="atendimento">
        <div className="shell">
          <div className="section-kicker">02 — Atendimento</div>
          <div className="section-heading split-heading">
            <h2>Escolha como prefere ser atendido.</h2>
            <p>
              Tres modalidades para o seu jeito: coleta, atendimento no local
              ou entrada em laboratorio para reparos mais complexos.
            </p>
          </div>
          <div className="attendance-grid">
            {attendance.map(([number, title, text, action]) => (
              <a className="attendance-card" href="/solicitar-reparo" key={title}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <strong>{action}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="acessorios">
        <div className="shell split">
          <div className="accessory-copy">
            <div className="section-kicker">03 — Acessorios</div>
            <h2>Tudo que seu aparelho precisa.</h2>
            <p>
              Alem dos reparos, a HFix Lab pode operar com acessorios para
              proteger, carregar e completar a experiencia do cliente.
            </p>
            <div className="actions">
              <a className="button button-secondary" href="/contato">
                <span aria-hidden="true">?</span>
                Consultar disponibilidade
              </a>
            </div>
          </div>
          <div className="accessory-grid">
            {accessories.map(([title, text]) => (
              <article key={title}>
                <strong>{title}</strong>
                <span>· {text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section surface-band" id="confianca">
        <div className="shell">
          <div className="section-kicker">04 — Por que a HFix Lab</div>
          <div className="section-heading split-heading">
            <h2>Quatro motivos para confiar no seu reparo.</h2>
            <p>
              Processo objetivo, comunicacao clara e registro de cada etapa
              importante da ordem de servico.
            </p>
          </div>
          <div className="reason-grid">
            {reasons.map(([code, title, text]) => (
              <article key={title} className="reason-card">
                <span>/ {code}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contato">
        <div className="shell split">
          <div>
            <div className="section-kicker">05 — Onde nos encontrar</div>
            <h2>Chame a HFix Lab e resolva sem complicacao.</h2>
            <p>
              Passe as informacoes do aparelho, escolha a melhor modalidade de
              atendimento e acompanhe a OS ate a entrega.
            </p>
          </div>
          <div className="contact-panel">
            <div>
              <span>Endereco</span>
              <strong>Atendimento sob agendamento</strong>
            </div>
            <div>
              <span>WhatsApp · Telefone</span>
              <strong>A definir</strong>
              <p>Resposta rapida no horario comercial.</p>
            </div>
            <div>
              <span>Horario de atendimento</span>
              <strong>Segunda a Sabado</strong>
              <p>Configure os horarios reais antes da publicacao final.</p>
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
