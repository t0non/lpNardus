import { Building2, Utensils, ShoppingCart, Stethoscope, Factory, Store } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function TargetAudience() {
  const industries = [
    { name: "Restaurantes", icon: <Utensils className="w-7 h-7" strokeWidth={1.5} /> },
    { name: "Supermercados", icon: <ShoppingCart className="w-7 h-7" strokeWidth={1.5} /> },
    { name: "Padarias e Açougues", icon: <Store className="w-7 h-7" strokeWidth={1.5} /> },
    { name: "Cozinhas Industriais", icon: <Factory className="w-7 h-7" strokeWidth={1.5} /> },
    { name: "Clínicas", icon: <Stethoscope className="w-7 h-7" strokeWidth={1.5} /> },
    { name: "Comércios em geral", icon: <Building2 className="w-7 h-7" strokeWidth={1.5} /> },
  ];

  return (
    <section className="section bg-[var(--color-brand-primary)] text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Soluções para operações que dependem de <span className="text-[var(--color-brand-accent)]">temperatura controlada.</span>
          </h2>
          <p className="text-lg text-gray-300">
            Atendemos os mais variados setores comerciais com agilidade e compromisso, entendendo a urgência que o seu negócio exige.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <div key={i} className="group bg-[#101C48] border border-[#1b2b73]/60 p-6 rounded-2xl text-center hover:bg-[#15255e] hover:border-[var(--color-brand-accent)]/45 transition-all duration-300 flex flex-col items-center justify-center gap-4 hover:shadow-[0_8px_30px_rgb(238,220,172,0.05)]">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 text-[var(--color-brand-accent)] flex items-center justify-center transition-all duration-300 group-hover:bg-[var(--color-brand-accent)]/15 group-hover:border-[var(--color-brand-accent)]/40 group-hover:scale-110 shadow-inner">
                {ind.icon}
              </div>
              <span className="font-semibold text-sm lg:text-base text-gray-200 transition-colors group-hover:text-white">{ind.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild className="shadow-sm w-fit px-8 h-12 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold flex items-center justify-center border-0">
            <Link href="https://wa.me/[WHATSAPP]?text=Olá, preciso de atendimento de refrigeração para minha empresa." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <img src="/Icon_WhatsApp.png" alt="WhatsApp" className="w-5 h-5 brightness-0 invert shrink-0" />
              <span>Solicitar Orçamento B2B</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
