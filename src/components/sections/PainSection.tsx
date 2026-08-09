import { AlertTriangle, TrendingDown, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function PainSection() {
  const problems = [
    {
      icon: <AlertTriangle className="w-10 h-10 text-red-600" />,
      title: <>Mercadorias em <span className="text-red-600">risco</span></>,
      desc: "Oscilações de temperatura comprometem a qualidade e segurança dos produtos estocados."
    },
    {
      icon: <Clock className="w-10 h-10 text-red-600" />,
      title: <>Operação <span className="text-red-600">interrompida</span></>,
      desc: "Equipamentos parados significam perda de vendas, clientes insatisfeitos e equipe ociosa."
    },
    {
      icon: <Zap className="w-10 h-10 text-red-600" />,
      title: <>Consumo <span className="text-red-600">elevado</span></>,
      desc: "Sistemas sem manutenção forçam o compressor e aumentam drasticamente a conta de energia."
    },
    {
      icon: <TrendingDown className="w-10 h-10 text-red-600" />,
      title: <><span className="text-red-600">Prejuízos</span> evitáveis</>,
      desc: "Reparos emergenciais constantes custam muito mais do que um acompanhamento preventivo."
    }
  ];

  return (
    <section className="relative section bg-gray-50 border-b border-gray-200">
      <div className="container">
        <div className="flex justify-center mb-8 relative z-20 pointer-events-none">
          <img 
            src="/images/arcondicionado.png" 
            alt="Ar condicionado split" 
            className="w-[260px] md:w-[380px] h-auto drop-shadow-[0_10px_15px_rgba(0,0,0,0.15)]"
          />
        </div>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-primary)] mb-6">
            Uma <span className="text-red-600">falha</span> na refrigeração pode parar toda a sua operação.
          </h2>
          <p className="text-lg text-gray-600">
            Problemas em <strong className="font-semibold text-gray-900">câmaras frias, refrigeradores comerciais e sistemas de climatização</strong> vão muito além de um simples incômodo. Eles afetam diretamente o faturamento e a credibilidade do seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {problems.map((prob, i) => (
            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-6 flex items-center justify-start text-[var(--color-brand-primary)]">
                {prob.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{prob.title}</h3>
              <p className="text-gray-600 leading-relaxed">{prob.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <Link href="https://wa.me/553185398804?text=Olá, vim pelo site da Nardus Soluções e preciso de atendimento." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 mx-auto">
              <img src="/Icon_WhatsApp.png" alt="WhatsApp" className="w-5 h-5 brightness-0 invert shrink-0" />
              <span>Falar com a Nardus</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
