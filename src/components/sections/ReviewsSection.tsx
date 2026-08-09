import { Star } from "lucide-react";

const GoogleIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.69c-.29 1.5-1.14 2.77-2.4 3.61v3h3.86c2.26-2.08 3.59-5.14 3.59-8.46z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.1A11.97 11.97 0 0 0 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.27 14.29a7.18 7.18 0 0 1 0-4.58V6.61H1.29a11.97 11.97 0 0 0 0 10.78l3.98-3.1z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42A11.92 11.92 0 0 0 12 0 11.97 11.97 0 0 0 1.29 6.61l3.98 3.1c.95-2.85 3.6-4.96 6.73-4.96z"
    />
  </svg>
);

export function ReviewsSection() {
  const row1 = [
    {
      name: "Carlos Eduardo Silva",
      role: "Gerente do Restaurante Sabor & Cia",
      text: "Nossa câmara fria parou às 6h da manhã. Às 9h o equipamento já estava funcionando novamente. Evitamos perder mais de R$18 mil em estoque.",
      initials: "CS",
      color: "bg-blue-600"
    },
    {
      name: "Mariana Ramos",
      role: "Diretora da Rede Panificadora Central",
      text: "Fechamos contrato de manutenção preventiva para as geladeiras expositoras de nossas 3 lojas. O serviço é impecável, os técnicos são super organizados e o consumo de energia dos equipamentos até diminuiu. Recomendo de olhos fechados!",
      initials: "MR",
      color: "bg-green-600"
    },
    {
      name: "Roberto Azevedo",
      role: "Proprietário do Supermercado Azevedo",
      text: "Equipe extremamente qualificada. Precisávamos consertar dois expositores verticais com urgência. Fizeram o diagnóstico, passaram o orçamento sem taxa de visita e realizaram o conserto no mesmo dia com garantia total por escrito.",
      initials: "RA",
      color: "bg-indigo-600"
    }
  ];

  const row2 = [
    {
      name: "Alessandra Souza",
      role: "Proprietária da Sorveteria Estrela de Ouro",
      text: "Excelente equipe! O sistema de refrigeração dos nossos freezers de sorvete estava oscilando muito e comprometendo as texturas. A equipe da Nardus resolveu rapidamente com peças originais e muita transparência.",
      initials: "AS",
      color: "bg-red-600"
    },
    {
      name: "Bruno Fonseca",
      role: "Gerente de Logística da Frigobras",
      text: "Prestam manutenção nas nossas câmaras frias industriais há mais de um ano. Atendimento técnico especializado e de altíssima confiança. Indispensável para manter o ritmo da nossa operação diária de frio.",
      initials: "BF",
      color: "bg-orange-600"
    },
    {
      name: "Letícia Albuquerque",
      role: "Administradora de Clínica Hospitalar",
      text: "Contratamos a empresa para instalação e manutenção preventiva dos sistemas de climatização e ar-condicionado central. Equipe extremamente limpa, silenciosa e cuidadosa. Nota 10 em tudo.",
      initials: "LA",
      color: "bg-teal-600"
    }
  ];

  return (
    <section className="section bg-gray-50 border-t border-b border-gray-100 overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-primary)] mb-4">
            O que dizem os nossos clientes
          </h2>
          <p className="text-lg text-gray-600">
            A opinião de quem confia na Nardus Soluções para manter o seu negócio funcionando sem interrupções.
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: marqueeLeft 45s linear infinite;
        }
        .animate-marquee-right {
          display: flex;
          gap: 1.5rem;
          width: max-content;
          animation: marqueeRight 45s linear infinite;
        }
        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Rows Container */}
      <div className="space-y-6 relative w-full flex flex-col overflow-hidden py-4 select-none [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        
        {/* ROW 1: Slides to the LEFT */}
        <div className="animate-marquee-left">
          {[...row1, ...row1].map((review, i) => (
            <div 
              key={i} 
              className="w-[280px] sm:w-[320px] md:w-[400px] bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:border-gray-200 transition-all duration-300 flex flex-col justify-between gap-4 md:gap-6 shrink-0"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400 shrink-0" />
                    ))}
                  </div>
                  <GoogleIcon />
                </div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base italic">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className={`w-12 h-12 rounded-full ${review.color} text-white flex items-center justify-center font-bold text-sm shrink-0`}>
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">{review.name}</h4>
                  <p className="text-xs text-gray-400">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ROW 2: Slides to the RIGHT */}
        <div className="animate-marquee-right">
          {[...row2, ...row2].map((review, i) => (
            <div 
              key={i} 
              className="w-[280px] sm:w-[320px] md:w-[400px] bg-white p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.03)] hover:border-gray-200 transition-all duration-300 flex flex-col justify-between gap-4 md:gap-6 shrink-0"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400 shrink-0" />
                    ))}
                  </div>
                  <GoogleIcon />
                </div>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base italic">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <div className={`w-12 h-12 rounded-full ${review.color} text-white flex items-center justify-center font-bold text-sm shrink-0`}>
                  {review.initials}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-sm md:text-base">{review.name}</h4>
                  <p className="text-xs text-gray-400">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
