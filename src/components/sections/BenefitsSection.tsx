
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function BenefitsSection() {
  const benefits = [
    {
      title: "Garantia Total",
      desc: "Todos os nossos serviços têm garantia por escrito. Segurança e tranquilidade para sua família.",
      icon: <img src="/garantia total.png" alt="Garantia Total" className="w-20 h-20 object-contain" />
    },
    {
      title: "Atendimento Rápido",
      desc: "Técnicos distribuídos em toda BH e região. Chegamos no mesmo dia para resolver seu problema.",
      icon: <img src="/atendimento rapido.png" alt="Atendimento Rápido" className="w-20 h-20 object-contain" />
    },
    {
      title: "Preço Justo",
      desc: "Sem taxa de visita em BH. O técnico vai até você, avalia o aparelho e passa o orçamento com 10% de desconto real.",
      icon: <img src="/preçojusto.png" alt="Preço Justo" className="w-20 h-20 object-contain" />
    }
  ];

  return (
    <section className="section bg-white pb-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-gray-300 transition-all duration-300 flex flex-col items-start gap-5">
              <div className="flex items-center justify-center text-[var(--color-brand-primary)] flex-shrink-0">
                {benefit.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {benefit.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild className="shadow-sm w-fit px-8 h-12 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold flex items-center justify-center border-0">
            <Link href="https://wa.me/553185398804?text=Olá, vi os diferenciais no site e gostaria de agendar uma visita técnica." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <img src="/Icon_WhatsApp.png" alt="WhatsApp" className="w-5 h-5 brightness-0 invert shrink-0" />
              <span>Chamar no WhatsApp</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
