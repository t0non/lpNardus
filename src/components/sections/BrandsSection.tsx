import Image from "next/image";

export function BrandsSection() {
  const brands = [
    { name: "Elgin", logo: "/images/logo_elgin.png" },
    { name: "Midea", logo: "/images/logo_midea.svg" },
    { name: "LG", logo: "/images/logo_lg.svg" },
    { name: "Hitachi", logo: "/images/logo_hitachi.webp" },
    { name: "Fujitsu", logo: "/images/logo_Fujitsu.webp" },
    { name: "Daikin", logo: "/images/logo_Daikin.png" },
    { name: "Danfoss", logo: "/images/logo_Danfoss.png" },
    { name: "Bitzer", logo: "/images/logo_Bitzer.png" },
    { name: "Copeland", logo: "/images/logo_Copeland.png" },
    { name: "Emerson", logo: "/images/logo_Emerson.png" },
    { name: "Hisense", logo: "/images/logo_Hisense.png" },
    { name: "Carrier", logo: "/images/logo_Carrier.jpg" },
    { name: "Springer", logo: "/images/logo_Springer.png" }
  ];

  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container">
        <div className="text-center mb-8">
          <span className="text-[11px] font-bold tracking-widest text-gray-400 uppercase">
            Especialistas nas melhores marcas
          </span>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 max-w-5xl mx-auto">
          {brands.map((brand, i) => (
            <div key={i} className="h-10 flex items-center justify-center min-w-[100px] max-w-[120px] transition-transform duration-300 hover:scale-105">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="max-h-full max-w-full object-contain" 
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
