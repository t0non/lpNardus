"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function FAQ() {
  const faqs = [
    {
      q: "Quais equipamentos a Nardus atende?",
      a: "Trabalhamos com manutenção e instalação de ar-condicionado comercial, câmaras frias, refrigeradores industriais e expositores comerciais."
    },
    {
      q: "A Nardus atende empresas e residências?",
      a: "Nosso foco principal é B2B (empresas, comércios, indústrias, restaurantes, supermercados, clínicas, etc.), onde a refrigeração é crítica para a continuidade do negócio."
    },
    {
      q: "Quais regiões são atendidas?",
      a: "Atendemos Belo Horizonte e Região Metropolitana. Para localidades mais distantes, consulte-nos para verificarmos a viabilidade técnica e logística."
    },
    {
      q: "Como solicitar atendimento?",
      a: "Você pode nos chamar diretamente no WhatsApp ou preencher o formulário na página de contato. Retornaremos o mais rápido possível para agendar uma avaliação."
    },
    {
      q: "Vocês fazem manutenção preventiva?",
      a: "Sim. A manutenção preventiva é altamente recomendada para evitar paradas não programadas e reduzir o consumo de energia dos equipamentos."
    },
    {
      q: "Quanto custa a manutenção?",
      a: "O valor depende do equipamento e da falha identificada. Em BH, a visita técnica é gratuita e o orçamento é apresentado antes de qualquer serviço."
    },
    {
      q: "Vocês atendem urgência?",
      a: "Sim. Atendemos chamados emergenciais em Belo Horizonte e Região Metropolitana, conforme disponibilidade da equipe técnica."
    },
    {
      q: "O serviço tem garantia?",
      a: "Sim. Todos os serviços executados possuem garantia por escrito."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-primary)] mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Tire suas dúvidas sobre nossos serviços e atendimento.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={cn(
                "border rounded-lg overflow-hidden transition-colors",
                openIndex === i ? "border-[var(--color-brand-accent)] bg-gray-50" : "border-gray-200"
              )}
            >
              <button
                className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                onClick={() => toggle(i)}
              >
                <span className="font-semibold text-gray-900 pr-8">{faq.q}</span>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0",
                    openIndex === i && "transform rotate-180 text-[var(--color-brand-primary)]"
                  )} 
                />
              </button>
              <div 
                className={cn(
                  "px-5 md:px-6 pb-5 md:pb-6 text-gray-600",
                  openIndex === i ? "block" : "hidden"
                )}
              >
                <p className="pt-2 border-t border-gray-200/60 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
