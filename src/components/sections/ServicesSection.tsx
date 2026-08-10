import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ThermometerSnowflake, Wind, Refrigerator, Settings } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function ServicesSection() {
  const services = [
    {
      title: "Ar-condicionado",
      desc: "Climatização perfeita para escritórios e lojas. Uma instalação moderna e manutenção rigorosa garantem conforto térmico sem pesar na conta de luz. Trabalhamos com sistemas Split, Cassete e Piso Teto.",
      problem: "Evite ambientes desconfortáveis que afastam clientes e prejudicam a produtividade da equipe.",
      href: "/servicos/ar-condicionado",
      image: "/images/arcondicionado.png",
      icon: <Wind className="w-6 h-6" />
    },
    {
      title: "Câmaras Frias",
      desc: "Proteção máxima para o seu estoque. Projetamos e realizamos manutenção de alto nível em câmaras de resfriamento e congelamento industriais, essenciais para frigoríficos e distribuidores.",
      problem: "Evite oscilações térmicas que causam perda de produtos de alto valor agregado e multas sanitárias.",
      href: "/servicos/camaras-frias",
      image: "/camara_fria.png",
      icon: <ThermometerSnowflake className="w-6 h-6" />
    },
    {
      title: "Refrigeradores",
      desc: "Exposição com conservação ideal. Assistência técnica rápida e eficiente para expositores verticais e geladeiras comerciais. Mantenha suas bebidas e laticínios sempre na temperatura certa para venda.",
      problem: "Não deixe seu produto estragar ou sua operação parar por equipamentos com portas desreguladas ou compressores com defeito.",
      href: "/servicos/refrigeradores",
      image: "/refrigeradores.png",
      icon: <Refrigerator className="w-6 h-6" />
    },
    {
      title: "Refrigeração Comercial",
      desc: "Engenharia de frio aplicada ao seu negócio. Soluções completas e contínuas para supermercados, padarias, açougues e restaurantes que dependem criticamente do frio 24 horas por dia.",
      problem: "Mantenha ilhas e balcões trabalhando com máxima eficiência, evitando prejuízos com quebras repentinas e alto consumo.",
      href: "/servicos/refrigeracao-comercial",
      image: "/refrigeradores_comerciais.png",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Sistemas de Refrigeração Central (Racks)",
      desc: "Alta potência e controle preciso para grandes indústrias e supermercados. Instalação, manutenção preventiva e corretiva de centrais de frio (racks de compressores), garantindo alta eficiência energética e redundância operacional.",
      problem: "Evite paradas críticas em todo o sistema de frio alimentar que podem comprometer toneladas de produtos de uma só vez.",
      href: "/servicos/refrigeracao-central",
      image: "/images/racks.png",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "Chillers",
      desc: "Manutenção corretiva, preventiva e instalação de Chillers de condensação a ar ou água. Soluções focadas em manter o controle térmico de processos industriais, hospitais e grandes edifícios comerciais.",
      problem: "Previna falhas no resfriamento de processos industriais e de climatização central que podem paralisar sua produção ou comprometer a operação.",
      href: "/servicos/chillers",
      image: "/images/chillers.jpg",
      icon: <Settings className="w-6 h-6" />
    }
  ];

  return (
    <section id="servicos" className="section bg-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-brand-primary)] mb-4">
            Nossas Especialidades
          </h2>
          <p className="text-lg text-gray-600">
            Soluções técnicas desenhadas para manter o seu negócio funcionando sem interrupções e com máxima eficiência energética. Aliamos tecnologia visual e mão de obra qualificada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group flex flex-col bg-transparent">
              <div className="relative w-full h-52 flex items-center justify-center mb-6 bg-transparent">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  width={240}
                  height={180}
                  className="max-h-[180px] max-w-[240px] object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-[var(--color-brand-primary)] mb-4">{service.title}</h3>
                
                <div className="space-y-4 mb-6 flex-1">
                  <p className="text-gray-600 leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="p-4 bg-red-50/70 border-l-4 border-red-300 text-red-900 text-sm rounded-r-lg shadow-sm">
                    <strong>O que resolvemos para você:</strong> {service.problem}
                  </div>
                </div>

                <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-center">
                  <Button asChild className="shadow-sm w-fit px-6 min-h-[48px] py-2.5 text-sm md:text-base bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold flex items-center justify-center border-0 h-auto">
                    <Link href={`https://wa.me/553185398804?text=Olá, preciso de atendimento para ${service.title.toLowerCase()}.`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full">
                      <Image src="/Icon_WhatsApp.png" alt="WhatsApp" width={20} height={20} className="brightness-0 invert shrink-0" />
                      <span>Falar com um técnico</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
