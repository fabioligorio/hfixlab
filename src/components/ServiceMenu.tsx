"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    id: "phone",
    title: "Conserto de Smartphones",
    summary: "Diagnóstico técnico completo e reparos especializados.",
    description:
      "Avaliação do aparelho, testes funcionais, registro da OS e indicação clara do melhor reparo antes de qualquer execução.",
    image: "/images/services/smartphone.svg",
  },
  {
    id: "screen",
    title: "Troca de Tela",
    summary: "Reparo no mesmo fluxo, com peças de alta qualidade.",
    description:
      "Substituição de display e touch com conferência de brilho, resposta ao toque, sensores e acabamento da moldura.",
    image: "/images/services/screen.svg",
  },
  {
    id: "battery",
    title: "Troca de Bateria",
    summary: "Peças selecionadas para máxima durabilidade.",
    description:
      "Teste de saúde da bateria, consumo, carregamento e calibração para entregar autonomia estável no uso diário.",
    image: "/images/services/battery.svg",
  },
  {
    id: "charge",
    title: "Conector de Carga",
    summary: "Atendimento express com testes completos.",
    description:
      "Limpeza técnica, análise do conector e reparo quando há falha de encaixe, carga intermitente ou ausência de energia.",
    image: "/images/services/charge.svg",
  },
  {
    id: "glass",
    title: "Vidro Frontal",
    summary: "Acabamento preciso com máxima proteção.",
    description:
      "Troca ou recuperação do vidro frontal com foco em encaixe, limpeza, proteção e acabamento visual do aparelho.",
    image: "/images/services/front-glass.svg",
  },
  {
    id: "back",
    title: "Vidro Traseiro",
    summary: "Linha premium para manter seu aparelho como novo.",
    description:
      "Remoção controlada do vidro danificado e aplicação da nova peça com alinhamento, vedação e acabamento premium.",
    image: "/images/services/back-glass.svg",
  },
  {
    id: "audio",
    title: "Alto-falante & Mic",
    summary: "Reparo fino para som claro e sem falhas.",
    description:
      "Teste de microfone, alto-falante, chamadas, gravação e limpeza de canais para recuperar áudio claro.",
    image: "/images/services/audio.svg",
  },
  {
    id: "solder",
    title: "Microsolda",
    summary: "Diagnóstico avançado em nível de placa.",
    description:
      "Análise de placa, trilhas, componentes e pontos críticos para defeitos que exigem reparo eletrônico de precisão.",
    image: "/images/services/microsolder.svg",
  },
];

export function ServiceMenu() {
  const [activeId, setActiveId] = useState(services[0].id);
  const active = services.find((service) => service.id === activeId) ?? services[0];

  return (
    <div className="service-menu">
      <div className="service-menu-list" aria-label="Menu de serviços">
        {services.map((service) => (
          <button
            className={`service-menu-item ${active.id === service.id ? "is-active" : ""}`}
            key={service.id}
            onClick={() => setActiveId(service.id)}
            type="button"
          >
            <span className={`service-icon ${service.id}`} aria-hidden="true" />
            <span>
              <strong>{service.title}</strong>
              <small>{service.summary}</small>
            </span>
          </button>
        ))}
      </div>
      <article className="service-detail">
        <div className="service-detail-image">
          <Image src={active.image} alt="" width={460} height={320} />
        </div>
        <div>
          <span>Serviço selecionado</span>
          <h3>{active.title}</h3>
          <p>{active.description}</p>
          <a className="button button-primary compact" href="/solicitar-reparo">
            <span aria-hidden="true">+</span>
            Agendar este serviço
          </a>
        </div>
      </article>
    </div>
  );
}
