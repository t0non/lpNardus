import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function ContactCTA() {
  return (
    <section id="contato" className="section bg-[var(--color-brand-offwhite)] relative">
      <div className="container relative z-10">
        <div className="w-full bg-white rounded-3xl p-8 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 text-center flex flex-col items-center justify-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[var(--color-brand-primary)] mb-6 max-w-4xl mx-auto">
            Seu equipamento apresentou problema?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Explique o que está acontecendo e informe sua localização. A equipe da Nardus analisará a solicitação e orientará os próximos passos de forma rápida.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Button size="lg" className="w-full sm:w-auto min-h-[56px] py-3.5 px-6 md:px-10 text-sm md:text-lg bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold border-0 shadow-md h-auto !whitespace-normal" asChild>
              <Link href="https://wa.me/553185398804?text=Olá, vim pelo site da Nardus Soluções e preciso de atendimento para meu equipamento." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full text-center">
                <img src="/Icon_WhatsApp.png" alt="WhatsApp" className="w-5 h-5 md:w-6 md:h-6 brightness-0 invert shrink-0" />
                <span className="leading-tight">Falar com um técnico no WhatsApp</span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto min-h-[56px] py-3.5 px-10 text-base md:text-lg text-[var(--color-brand-primary)] border-[var(--color-brand-primary)] hover:bg-gray-50 font-bold shadow-md h-auto" asChild>
              <Link href="https://wa.me/553185398804?text=Olá, gostaria de conversar sobre meu equipamento de refrigeração." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full">
                <span>Conversar agora</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
