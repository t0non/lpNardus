import { Check } from "lucide-react";

export function Differentials() {
  const differentials = [
    "[DIFERENCIAL 1]",
    "[DIFERENCIAL 2]",
    "[DIFERENCIAL 3]",
    "[DIFERENCIAL 4]",
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-primary)] mb-6">
            Por que escolher a Nardus Soluções?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Trabalhamos com foco na segurança e continuidade do seu negócio, garantindo que o seu sistema de refrigeração opere nas condições ideais exigidas pelo seu setor.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 w-full">
          {/* Placeholder for real team/service photo */}
          <div className="aspect-[4/3] rounded-2xl bg-gray-100 border border-gray-200 overflow-hidden relative shadow-lg">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-400 font-medium">
               <span className="mb-2">[FOTOGRAFIA REAL DA EQUIPE]</span>
               <span className="text-sm px-8 text-center">Substituir por imagem real dos técnicos trabalhando.</span>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full flex justify-center">

          <ul className="space-y-4">
            {differentials.map((diff, i) => (
              <li key={i} className="flex items-start bg-gray-50 p-4 rounded-lg border border-gray-100">
                <div className="bg-[var(--color-brand-accent)] text-[var(--color-brand-primary)] p-1 rounded-full mr-4 flex-shrink-0 mt-0.5">
                  <Check size={16} strokeWidth={3} />
                </div>
                <span className="font-medium text-gray-800">{diff}</span>
              </li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    </section>
  );
}
