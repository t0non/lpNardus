import Link from "next/link";
import Image from "next/image";
import { Camera, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[var(--color-brand-primary)] text-white pt-16 pb-8 border-t-[4px] border-[var(--color-brand-accent)]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand & Desc */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image 
                src="/logo_nardus.png" 
                alt="Logo Nardus Soluções" 
                width={260} 
                height={80} 
                className="w-auto h-16 md:h-20 object-contain brightness-0 invert" 
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Refrigeração e climatização para operações comerciais e industriais. Soluções técnicas focadas em continuidade e segurança.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="https://www.instagram.com/nardus.solucoes/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[var(--color-brand-accent)] transition-colors" aria-label="Instagram">
                <Camera size={20} />
              </a>
              {/* Add more socials if needed */}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navegação</h3>
            <ul className="space-y-3">
              <li><Link href="/servicos" className="text-gray-300 hover:text-[var(--color-brand-accent)] text-sm transition-colors">Serviços</Link></li>
              <li><Link href="/sobre" className="text-gray-300 hover:text-[var(--color-brand-accent)] text-sm transition-colors">Sobre a Nardus</Link></li>
              <li><Link href="/projetos" className="text-gray-300 hover:text-[var(--color-brand-accent)] text-sm transition-colors">Projetos Realizados</Link></li>
              <li><Link href="/regioes-atendidas" className="text-gray-300 hover:text-[var(--color-brand-accent)] text-sm transition-colors">Regiões Atendidas</Link></li>
              <li><Link href="/conteudos" className="text-gray-300 hover:text-[var(--color-brand-accent)] text-sm transition-colors">Conteúdos úteis</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Especialidades</h3>
            <ul className="space-y-3">
              <li><Link href="/servicos/ar-condicionado" className="text-gray-300 hover:text-[var(--color-brand-accent)] text-sm transition-colors">Ar-condicionado Comercial</Link></li>
              <li><Link href="/servicos/camaras-frias" className="text-gray-300 hover:text-[var(--color-brand-accent)] text-sm transition-colors">Câmaras Frias</Link></li>
              <li><Link href="/servicos/refrigeracao-comercial" className="text-gray-300 hover:text-[var(--color-brand-accent)] text-sm transition-colors">Refrigeração Comercial</Link></li>
              <li><Link href="/servicos/refrigeradores" className="text-gray-300 hover:text-[var(--color-brand-accent)] text-sm transition-colors">Manutenção de Refrigeradores</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-gray-300">
                <Phone size={18} className="text-[var(--color-brand-accent)] flex-shrink-0 mt-0.5" />
                <span>
                  <a href="tel:+553185398804" className="hover:text-white transition-colors block">+55 31 8539-8804</a>
                  <a href="https://wa.me/553185398804" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors block mt-1">WhatsApp: +55 (31) 8539-8804</a>
                </span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-300">
                <Mail size={18} className="text-[var(--color-brand-accent)] flex-shrink-0 mt-0.5" />
                <a href="mailto:nardus.solucoes@gmail.com" className="hover:text-white transition-colors">nardus.solucoes@gmail.com</a>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-300">
                <MapPin size={18} className="text-[var(--color-brand-accent)] flex-shrink-0 mt-0.5" />
                <span>Belo Horizonte e Região Metropolitana<br/><span className="text-gray-400 text-xs mt-1 block">Atendimento a domicílio e empresas</span></span>
              </li>
              <li className="flex items-start space-x-3 text-sm text-gray-300">
                <Clock size={18} className="text-[var(--color-brand-accent)] flex-shrink-0 mt-0.5" />
                <span>Atendimento 24h</span>
              </li>
            </ul>
          </div>
          
        </div>

        <div className="pt-8 border-t border-gray-700/50 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400">
          <p>&copy; {new Date().getFullYear()} Nardus Soluções. Todos os direitos reservados.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="/politica-de-cookies" className="hover:text-white transition-colors">Política de Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
