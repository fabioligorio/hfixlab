import { PageChrome } from "@/components/PageChrome";
import { SectionHero } from "@/components/SectionHero";
import { faqs } from "@/lib/content";

export default function FaqPage() {
  return (
    <PageChrome>
      <SectionHero
        eyebrow="FAQ"
        title="Perguntas frequentes sobre coleta, reparo e garantia."
        text="Respostas objetivas para reduzir atendimento manual e deixar o processo mais transparente."
      />
      <section className="section">
        <div className="shell faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </PageChrome>
  );
}

