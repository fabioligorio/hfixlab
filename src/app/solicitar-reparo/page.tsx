import { PageChrome } from "@/components/PageChrome";
import { SectionHero } from "@/components/SectionHero";

const problems = ["Tela", "Bateria", "Nao liga", "Nao carrega", "Camera", "Audio", "Liquido", "Software"];

export default function RepairRequestPage() {
  return (
    <PageChrome>
      <SectionHero
        eyebrow="Solicitar reparo"
        title="Abra uma solicitacao para coleta, diagnostico e orcamento."
        text="Este MVP deixa o fluxo visual pronto para conectar com Supabase, WhatsApp e pagamentos na proxima etapa."
      />
      <section className="section">
        <form className="shell request-form">
          <label>
            Nome
            <input placeholder="Seu nome completo" />
          </label>
          <label>
            Telefone
            <input placeholder="(00) 00000-0000" />
          </label>
          <label>
            Categoria
            <select defaultValue="">
              <option value="" disabled>
                Escolha o aparelho
              </option>
              <option>Smartphone</option>
              <option>Tablet</option>
              <option>Notebook</option>
              <option>Smartwatch</option>
              <option>Outro</option>
            </select>
          </label>
          <label>
            Marca e modelo
            <input placeholder="Ex: iPhone 15 Pro" />
          </label>
          <fieldset>
            <legend>Problema informado</legend>
            <div className="chip-grid">
              {problems.map((problem) => (
                <label className="check-chip" key={problem}>
                  <input type="checkbox" />
                  <span>{problem}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <label className="wide">
            Descricao do defeito
            <textarea placeholder="Conte o que aconteceu, quando comecou e se ja houve tentativa de reparo." />
          </label>
          <label>
            Tipo de atendimento
            <select defaultValue="Coleta">
              <option>Coleta</option>
              <option>Atendimento no local</option>
            </select>
          </label>
          <label>
            Melhor horario
            <select defaultValue="Manha">
              <option>Manha</option>
              <option>Tarde</option>
              <option>Noite</option>
            </select>
          </label>
          <button className="button button-primary wide" type="button">
            <span aria-hidden="true">✓</span>
            Confirmar solicitacao
          </button>
        </form>
      </section>
    </PageChrome>
  );
}

