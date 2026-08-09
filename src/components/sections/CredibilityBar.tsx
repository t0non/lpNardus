export function CredibilityBar() {
  return (
    <section className="bg-[#070e2c] border-b border-white/5 py-8 text-white relative z-10 overflow-hidden">
      {/* Bottom-up glow light effect */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 100% at 50% 100%, rgba(196,161,82,0.22) 0%, transparent 70%)',
        }}
      />

      <div className="container max-w-4xl relative z-10">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          
          {/* Big Stat */}
          <div className="space-y-1 relative">
            <div
              className="text-2xl md:text-3xl font-extrabold"
              style={{
                background: 'linear-gradient(to top, #ffffff 0%, #C4A152 50%, #a07830 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
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
