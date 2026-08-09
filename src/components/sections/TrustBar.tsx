import { CheckCircle } from "lucide-react";

export function TrustBar() {
  const points = [
    "Atendimento em Belo Horizonte e região",
    "Soluções para empresas e comércios",
    "Manutenção e instalação",
    "Contato direto pelo WhatsApp",
  ];

  return (
    <div className="bg-[var(--color-brand-secondary)] py-4">
      <div className="container">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          {points.map((point, i) => (
            <div key={i} className="flex items-center text-gray-200 text-sm font-medium">
              <CheckCircle className="w-4 h-4 mr-2 text-[var(--color-brand-accent)] flex-shrink-0" />
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
