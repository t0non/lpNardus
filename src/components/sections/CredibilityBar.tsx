export function CredibilityBar() {
  return (
    <section className="bg-[#070e2c] border-b border-white/5 py-8 text-white relative z-10">
      <div className="container max-w-4xl">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          
          {/* Big Stat */}
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-extrabold text-[var(--color-brand-accent)]">
              +500 atendimentos realizados em Belo Horizonte e Região Metropolitana
            </div>
          </div>

          {/* Supportive Text */}
          <div className="text-gray-300 text-sm md:text-base leading-relaxed font-light max-w-2xl">
            Técnicos especializados em refrigeração comercial e climatização para <span className="font-semibold text-white">empresas, restaurantes, supermercados, açougues, indústrias e comércios</span>.
          </div>

        </div>
      </div>
    </section>
  );
}
