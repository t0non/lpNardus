import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

export function Hero() {
  const badges = [
    "Sem taxa de visita em BH",
    "Atendimento no mesmo dia",
    "Garantia por escrito"
  ];

  return (
    <section className="relative bg-[var(--color-brand-primary)] text-white overflow-hidden pt-28 md:pt-36">
      <div className="container relative z-10 pb-12 md:pb-16">
        <div className="hero-inner">
          <div className="hero-content space-y-6 text-left">
            <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-tight">
              Conserto e manutenção de câmaras frias, refrigeradores comerciais e ar-condicionado <span className="text-[var(--color-brand-accent)]">em Belo Horizonte</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              Atendimento no mesmo dia em BH e Região Metropolitana, sem taxa de visita em BH, orçamento imediato e garantia por escrito.
            </p>

            {/* Badges Row */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
              {badges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-sm md:text-base font-semibold text-[var(--color-brand-accent)]">
                  <CheckCircle size={18} className="shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-start pt-4">
              <Button size="lg" className="w-full sm:w-auto h-14 px-10 text-base md:text-lg bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold border-0 shadow-md" asChild>
                <Link href="https://wa.me/553185398804?text=Olá, preciso falar com um técnico sobre meu equipamento de refrigeração." target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-center gap-2 w-full">
                  <Image src="/Icon_WhatsApp.png" alt="WhatsApp" width={24} height={24} className="brightness-0 invert shrink-0" />
                  <span>Falar com um técnico agora</span>
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-10 text-base md:text-lg text-white border-white hover:bg-white hover:text-[var(--color-brand-primary)] font-bold shadow-md" asChild>
                <Link href="https://wa.me/553185398804?text=Olá, gostaria de solicitar um diagnóstico técnico para meu equipamento." target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-center gap-2 w-full">
                  <span>Solicitar diagnóstico</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <Image 
              src="/professional_hero.png" 
              alt="Profissional Nardus Soluções" 
              width={560} 
              height={650} 
              className="hero-image drop-shadow-2xl"
              priority
              unoptimized={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
