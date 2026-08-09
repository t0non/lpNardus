import { ShieldCheck } from "lucide-react";

export function CredibilityBar() {
  return (
    <section className="bg-[#070e2c] border-b border-white/5 py-8 text-white relative z-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-12">
          
          {/* Big Stat */}
          <div className="flex items-center gap-4 shrink-0 text-center lg:text-left">
            <div className="w-12 h-12 rounded-full bg-[var(--color-brand-accent)]/10 flex items-center justify-center text-[var(--color-brand-accent)] shrink-0 mx-auto lg:mx-0">
              <ShieldCheck size={28} />
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-extrabold text-[var(--color-brand-accent)]">
                +500 atendimentos
              </div>
              <div className="text-sm text-gray-400 font-medium">
                realizados em BH e Região Metropolitana
              </div>
            </div>
          </div>

          {/* Supportive Text */}
          <div className="text-gray-300 text-center lg:text-left max-w-4xl text-sm md:text-base leading-relaxed font-light">
            Técnicos especializados em refrigeração comercial e climatização para <span className="font-semibold text-white">empresas, restaurantes, supermercados, açougues, indústrias e comércios</span>.
          </div>

        </div>
      </div>
    </section>
  );
}
