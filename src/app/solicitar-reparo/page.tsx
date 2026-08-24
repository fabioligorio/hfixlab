import { PageChrome } from "@/components/PageChrome";
import { SectionHero } from "@/components/SectionHero";

const problems = ["Tela", "Bateria", "Não liga", "Não carrega", "Câmera", "Áudio", "Líquido", "Software"];

export default function RepairRequestPage() {
  return (
    <PageChrome>
      <SectionHero
        eyebrow="Solicitar reparo"
        title="Abra uma solicitação para coleta, diagnóstico e orçamento."
        text="O fluxo visual já está pronto para conectar WhatsApp, pagamentos e acompanhamento da OS na próxima etapa."
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
            Descrição do defeito
            <textarea placeholder="Conte o que aconteceu, quando começou e se já houve tentativa de reparo." />
          </label>
          <label>
            Tipo de atendimento
            <select defaultValue="Coleta">
              <option>Coleta</option>
              <option>Atendimento no local</option>
            </select>
          </label>
          <label>
            Melhor horário
            <select defaultValue="Manhã">
              <option>Manhã</option>
              <option>Tarde</option>
              <option>Noite</option>
            </select>
          </label>
          <button className="button button-primary wide" type="button">
            <span aria-hidden="true">✓</span>
            Confirmar solicitação
          </button>
        </form>
      </section>
    </PageChrome>
  );
}
