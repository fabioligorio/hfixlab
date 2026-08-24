export function DeviceVisual() {
  return (
    <div className="device-visual" aria-label="Painel visual de diagnostico tecnico">
      <div className="device-frame">
        <div className="device-speaker" />
        <div className="diagnostic-card primary">
          <span>OS HF-2026-00001</span>
          <strong>Em diagnostico</strong>
        </div>
        <div className="scan-line" />
        <div className="diagnostic-grid">
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className="floating-panel top">
        <small>Teste aprovado</small>
        <strong>Display + touch</strong>
      </div>
      <div className="floating-panel bottom">
        <small>Prazo estimado</small>
        <strong>24h</strong>
      </div>
    </div>
  );
}

