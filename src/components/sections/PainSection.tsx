import { AlertTriangle, TrendingDown, Clock, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";

export function PainSection() {
  const problems = [
    {
      icon: <AlertTriangle className="w-10 h-10 text-red-600" />,
      title: <>Perda de <span className="text-red-600">estoque</span></>,
      desc: "Oscilações de temperatura comprometem a qualidade e a segurança de insumos perecíveis sob sua custódia."
    },
    {
      icon: <Clock className="w-10 h-10 text-red-600" />,
      title: <>Parada de <span className="text-red-600">vendas</span></>,
      desc: "Expositores e geladeiras comerciais paradas forçam o encerramento do faturamento de linhas de produtos inteiras."
    },
    {
      icon: <ShieldAlert className="w-10 h-10 text-red-600" />,
      title: <>Vigilância <span className="text-red-600">Sanitária</span></>,
      desc: "Risco iminente de multas e interdições por equipamentos operando fora das temperaturas obrigatórias."
    },
    {
      icon: <TrendingDown className="w-10 h-10 text-red-600" />,
      title: <>Alto custo <span className="text-red-600">operacional</span></>,
      desc: "Sistemas sem manutenção preventiva consomem até 40% mais energia e quebram de surpresa."
    }
  ];

  return (
    <section className="relative section bg-gray-50 border-b border-gray-200">
      <div className="container">
        
        {/* Decorative AC image centered */}
        <div className="flex justify-center mb-8 relative z-20 pointer-events-none">
          <Image 
            src="/images/arcondicionado.png" 
            alt="Ar condicionado split" 
            width={380}
            height={200}
            className="w-[260px] md:w-[380px] h-auto drop-shadow-[0_10px_15px_rgba(0,0,0,0.15)]"
          />
        </div>

        {/* Header content optimized for Ads */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-brand-primary)] mb-6">
            Sua câmara fria ou refrigerador comercial parou?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Cada hora parado pode significar perda de estoque, cancelamento de vendas e aumento do custo operacional. A Nardus atende emergências em BH e Região Metropolitana para reduzir o tempo de parada da sua operação.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {problems.map((prob, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.01)] border border-gray-100 flex flex-col items-center text-center gap-4">
              <div className="flex items-center justify-center">
                {prob.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{prob.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{prob.desc}</p>
            </div>
          ))}
        </div>

        {/* Big emergency CTA button */}
        <div className="text-center">
          <Button size="lg" className="h-14 px-10 text-base md:text-lg bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold border-0 shadow-md" asChild>
            <Link href="https://wa.me/553185398804?text=Olá, minha câmara fria ou refrigerador comercial parou e preciso de um técnico urgente." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 mx-auto">
              <Image src="/Icon_WhatsApp.png" alt="WhatsApp" width={24} height={24} className="brightness-0 invert shrink-0" />
              <span>Falar com um técnico no WhatsApp</span>
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}
