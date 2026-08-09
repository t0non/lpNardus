import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-[var(--color-brand-primary)] text-white overflow-hidden">
      <div className="container relative z-10">
        <div className="hero-inner">
          <div className="hero-content space-y-5 text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Refrigeração e ar-condicionado <span className="text-[var(--color-brand-accent)]">para sua empresa não parar.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Instalação, manutenção e assistência técnica em ar-condicionado, câmaras frias e sistemas de refrigeração em Belo Horizonte e região.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-start">
              <Button size="lg" className="w-full sm:w-auto bg-[var(--color-brand-accent)] text-[var(--color-brand-primary)] hover:bg-[var(--color-brand-accent-light)]" asChild>
                <Link href="https://wa.me/553185398804?text=Olá, vim pelo site da Nardus Soluções e preciso de atendimento." target="_blank" rel="noopener noreferrer" className="flex flex-row items-center justify-center gap-2 w-full">
                  <Image src="/Icon_WhatsApp.png" alt="WhatsApp" width={20} height={20} className="brightness-0 shrink-0" />
                  <span>Solicitar atendimento</span>
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-[var(--color-brand-primary)]" asChild>
                <Link href="#servicos" className="flex flex-row items-center justify-center gap-2 w-full">
                  <span>Ver serviços</span>
                  <ArrowRight size={20} className="shrink-0" />
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
