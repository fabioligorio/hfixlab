const metrics = [
  ["Coletas hoje", "06"],
  ["Novas OS", "14"],
  ["Em diagnostico", "08"],
  ["Aguardando aprovacao", "05"],
  ["Em reparo", "11"],
  ["Prontos", "03"],
  ["Faturamento", "R$ 8,4k"],
  ["Ticket medio", "R$ 420"],
];

const columns = ["Entrada", "Diagnostico", "Orcamento", "Reparo", "Testes", "Entrega"];

export default function AdminDashboardPage() {
  return (
    <main className="admin-screen">
      <section>
        <p className="eyebrow">Painel interno</p>
        <h1>Operacao HFix Lab</h1>
      </section>
      <section className="metric-grid">
        {metrics.map(([label, value]) => (
          <article className="metric-card" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </section>
      <section className="kanban">
        {columns.map((column, index) => (
          <article key={column}>
            <h2>{column}</h2>
            <div className="os-card">
              <strong>HF-2026-0000{index + 1}</strong>
              <span>Cliente · iPhone 15 Pro</span>
              <small>Prioridade {index < 2 ? "alta" : "normal"}</small>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

