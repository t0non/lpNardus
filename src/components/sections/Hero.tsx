import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-[var(--color-brand-primary)] text-white overflow-hidden">
      <div className="container relative z-10 pb-8 md:pb-16">
        <div className="hero-inner">
          <div className="hero-content space-y-3 md:space-y-6 text-left">
            <h1 className="text-[26px] xs:text-3xl sm:text-4xl md:text-[40px] lg:text-[48px] font-extrabold tracking-tight leading-tight md:leading-[1.1]">
              Conserto e manutenção de câmaras frias, refrigeradores comerciais e ar-condicionado <span className="text-[var(--color-brand-accent)]">em Belo Horizonte</span>
            </h1>
            
            <p className="text-xs sm:text-sm md:text-lg lg:text-xl text-gray-300 leading-relaxed font-light">
              Atendimento no mesmo dia em BH e Região Metropolitana, sem taxa de visita em BH, orçamento imediato e garantia por escrito.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 justify-start pt-2">
              <Button size="lg" className="w-full sm:w-auto min-h-[48px] md:min-h-[56px] py-3 md:py-3.5 px-6 md:px-10 text-sm md:text-lg bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold border-0 shadow-md h-auto" asChild>
                <Link href="https://wa.me/553185398804?text=Olá, preciso falar com um técnico sobre meu equipamento de refrigeração." target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-center gap-2 w-full">
                  <Image src="/Icon_WhatsApp.png" alt="WhatsApp" width={20} height={20} className="brightness-0 invert shrink-0 md:w-6 md:h-6" />
                  <span>Falar com um técnico agora</span>
                </Link>
              </Button>
              
              <Button size="lg" variant="outline" className="w-full sm:w-auto min-h-[48px] md:min-h-[56px] py-3 md:py-3.5 px-6 md:px-10 text-sm md:text-lg text-white border-white hover:bg-white hover:text-[var(--color-brand-primary)] font-bold shadow-md h-auto" asChild>
                <Link href="https://wa.me/553185398804?text=Olá, gostaria de conversar sobre meu equipamento de refrigeração." target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-center gap-2 w-full">
                  <span>Conversar agora</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="hero-image-wrapper mt-6 md:mt-0">
            <Image 
              src="/professional_hero.png" 
              alt="Profissional Nardus Soluções" 
              width={560} 
              height={650} 
              className="hero-image drop-shadow-2xl max-w-[280px] sm:max-w-[340px] md:max-w-none"
              priority
              unoptimized={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
