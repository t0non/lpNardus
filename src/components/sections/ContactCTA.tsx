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
            <Button size="lg" asChild className="w-full sm:w-auto text-lg px-8 py-6 h-auto">
              <Link href="https://wa.me/553185398804?text=Olá, vim pelo site da Nardus Soluções e preciso de atendimento para meu equipamento." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <img src="/Icon_WhatsApp.png" alt="WhatsApp" className="w-6 h-6 brightness-0 invert shrink-0" />
                <span>Solicitar atendimento</span>
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="w-full sm:w-auto text-lg px-8 py-6 h-auto border-gray-300 text-gray-700 hover:bg-gray-50">
              <Link href="https://wa.me/553185398804?text=Olá, vim pelo site da Nardus Soluções e preciso de atendimento." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <img src="/Icon_WhatsApp.png" alt="WhatsApp" className="w-5 h-5 shrink-0" />
                <span>Chamar no WhatsApp</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
