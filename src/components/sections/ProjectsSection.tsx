import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function ProjectsSection() {
  return (
    <section className="section bg-gray-50 border-t border-gray-200">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-primary)] mb-6">
            Projetos Realizados
          </h2>
          <p className="text-lg text-gray-600">
            Alguns de nossos atendimentos reais para mostrar como resolvemos os desafios diários dos nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Placeholder Card 1 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group">
            <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center text-sm text-gray-500 font-medium">
              [FOTO DO PROJETO]
            </div>
            <div className="p-6">
              <div className="text-xs font-semibold text-[var(--color-brand-primary)] mb-2 uppercase tracking-wider">
                Restaurante • Belo Horizonte
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Manutenção em Câmara Fria</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong className="text-gray-800">Problema:</strong> [DESCREVER PROBLEMA REAL]</p>
                <p><strong className="text-gray-800">Solução:</strong> [DESCREVER SERVIÇO REAL]</p>
                <p><strong className="text-gray-800">Resultado:</strong> [DESCREVER RESULTADO REAL]</p>
              </div>
            </div>
          </div>
          
          {/* Placeholder Card 2 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group">
            <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center text-sm text-gray-500 font-medium">
              [FOTO DO PROJETO]
            </div>
            <div className="p-6">
              <div className="text-xs font-semibold text-[var(--color-brand-primary)] mb-2 uppercase tracking-wider">
                Supermercado • Contagem
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Revisão de Expositores</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong className="text-gray-800">Problema:</strong> [DESCREVER PROBLEMA REAL]</p>
                <p><strong className="text-gray-800">Solução:</strong> [DESCREVER SERVIÇO REAL]</p>
                <p><strong className="text-gray-800">Resultado:</strong> [DESCREVER RESULTADO REAL]</p>
              </div>
            </div>
          </div>

          {/* Placeholder Card 3 */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group">
            <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center text-sm text-gray-500 font-medium">
              [FOTO DO PROJETO]
            </div>
            <div className="p-6">
              <div className="text-xs font-semibold text-[var(--color-brand-primary)] mb-2 uppercase tracking-wider">
                Clínica • Nova Lima
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Instalação de Climatização</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong className="text-gray-800">Problema:</strong> [DESCREVER PROBLEMA REAL]</p>
                <p><strong className="text-gray-800">Solução:</strong> [DESCREVER SERVIÇO REAL]</p>
                <p><strong className="text-gray-800">Resultado:</strong> [DESCREVER RESULTADO REAL]</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-left">
          <Button variant="outline" asChild>
            <Link href="/projetos">Ver mais projetos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
