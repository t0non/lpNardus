import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Check } from "lucide-react";

export function DiagnosisOffer() {
  const benefits = [
    "Sem taxa de visita em BH",
    "Atendimento no mesmo dia (quando disponível)",
    "Peças originais de fábrica",
    "Garantia por escrito do serviço",
    "Orçamento imediato direto no local"
  ];

  return (
    <section className="section bg-[var(--color-brand-offwhite)] relative overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-gray-100 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          {/* Text & Content */}
          <div className="flex-1 space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-brand-primary)] leading-tight">
                Diagnóstico técnico sem custo de visita em BH
              </h2>
            </div>
            
            <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light">
              O técnico avalia o seu equipamento de forma detalhada, identifica a real causa da falha e entrega o orçamento na hora para sua aprovação.
            </p>

            <ul className="space-y-3 pt-2">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0 mt-0.5">
                    <Check size={14} className="stroke-[3]" />
                  </span>
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Box / Card */}
          <div className="w-full md:w-auto shrink-0 bg-[var(--color-brand-primary)] text-white p-8 rounded-2xl border border-white/5 text-center flex flex-col items-center justify-center gap-6 max-w-sm mx-auto shadow-xl">
            <div className="space-y-2">
              <div className="text-sm uppercase tracking-wider font-bold text-[var(--color-brand-accent)]">
                Agende Agora
              </div>
              <div className="text-2xl font-extrabold">
                Visita Gratuita
              </div>
              <p className="text-xs text-gray-400 max-w-[200px] mx-auto">
                Garanta o técnico hoje mesmo em Belo Horizonte.
              </p>
            </div>

            <Button asChild className="w-full h-14 px-8 text-base bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold border-0 shadow-lg">
              <Link href="https://wa.me/553185398804?text=Olá, gostaria de solicitar um diagnóstico técnico sem taxa de visita para minha empresa." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <Image src="/Icon_WhatsApp.png" alt="WhatsApp" width={22} height={22} className="brightness-0 invert shrink-0" />
                <span>Solicitar diagnóstico</span>
              </Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
