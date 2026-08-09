import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function AboutSection() {
  return (
    <section id="sobre" className="section bg-[var(--color-brand-primary)] text-white relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Precisão técnica para manter o seu negócio funcionando.
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-1/2 w-full space-y-6">
          <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
            <p>
              A Nardus Soluções surgiu para suprir uma necessidade clara: a falta de empresas de refrigeração que tratam a operação do cliente com a seriedade de um parceiro de negócios.
            </p>
            <p>
              Trabalhamos com manutenção, instalação e assistência técnica para equipamentos comerciais, atuando em Belo Horizonte e região. Nosso foco é realizar diagnósticos corretos, executar serviços definitivos e evitar que falhas técnicas causem perdas financeiras para sua empresa.
            </p>
          </div>
          <div className="pt-4">
            <Button asChild variant="secondary">
              <Link href="https://wa.me/[WHATSAPP]?text=Olá, vim pelo site da Nardus Soluções e gostaria de tirar dúvidas." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <img src="/Icon_WhatsApp.png" alt="WhatsApp" className="w-5 h-5 shrink-0" />
                <span>Falar com a Nardus</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="md:w-1/2 w-full flex justify-center">
           {/* Team Photo Placeholder */}
           <div className="w-full max-w-md aspect-square bg-[#121f57] rounded-2xl border border-[#1b2b73] flex items-center justify-center shadow-2xl relative">
              <div className="text-center px-6">
                 <span className="block font-medium text-white/70 mb-2">[FOTO DO RESPONSÁVEL / EQUIPE]</span>
                 <p className="text-sm text-white/50">Substituir por fotografia real</p>
              </div>
           </div>
        </div>
        </div>
      </div>
    </section>
  );
}
