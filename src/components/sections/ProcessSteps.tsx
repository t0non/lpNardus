

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function ProcessSteps() {
  const steps = [
    {
      title: "Chame no WhatsApp",
      desc: "Clique no botão verde e fale com um técnico agora mesmo.",
      icon: <img src="/Icon_WhatsApp.png" alt="WhatsApp" className="w-20 h-20 object-contain" style={{ filter: 'brightness(0) saturate(100%) invert(20%) sepia(96%) saturate(3477%) hue-rotate(218deg) brightness(88%) contrast(100%)' }} />
    },
    {
      title: "Receba o Técnico",
      desc: "Agendamos a visita no mesmo dia. Sem taxa de visita em BH!",
      icon: <img src="/receba o tecnico.png" alt="Receba o Técnico" className="w-20 h-20 object-contain" loading="lazy" decoding="async" />
    },
    {
      title: "Aparelho Consertado",
      desc: "Serviço rápido, com peças originais e garantia total.",
      icon: <img src="/aparelho consertado.png" alt="Aparelho Consertado" className="w-20 h-20 object-contain" loading="lazy" decoding="async" />
    }
  ];

  return (
    <section id="como-funciona" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-primary)] mb-6">
            Como funciona o conserto em BH?
          </h2>
          <p className="text-lg text-gray-600">
            É simples, rápido e seguro. Resolva os problemas do seu equipamento comercial em 3 passos:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="bg-gray-50/50 p-10 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-gray-200 transition-all duration-300 flex flex-col items-center text-center gap-6">
              <div className="h-28 flex items-center justify-center flex-shrink-0">
                {step.icon}
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild className="shadow-sm w-fit px-10 min-h-[56px] py-3.5 text-base md:text-lg bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold flex items-center justify-center border-0 h-auto">
            <Link href="https://wa.me/553185398804?text=Olá, gostaria de conversar sobre meu equipamento de refrigeração." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full">
              <img src="/Icon_WhatsApp.png" alt="WhatsApp" className="w-5 h-5 brightness-0 invert shrink-0" />
              <span>Conversar agora</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
