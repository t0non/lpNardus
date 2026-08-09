"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Serviços", href: "#servicos" },
    { name: "Como funciona", href: "#como-funciona" },
    { name: "Sobre nós", href: "#sobre" },
    { name: "Perguntas Frequentes", href: "#faq" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <>
      {/* Sticky Local SEO Bar */}
      <div className="fixed top-0 left-0 w-full h-10 bg-red-600 border-b border-white/5 text-white text-[10px] sm:text-xs font-light flex items-center justify-center z-50 px-4 shadow-sm uppercase tracking-widest">
        <span>Manutenção e conserto de refrigeração e ar-condicionado comercial em BH</span>
      </div>
      
      {/* Sticky Main Header */}
      <header className="header fixed top-10 left-0 w-full z-45 bg-[#0B1643]/90 backdrop-blur-md border-b border-white/5 py-1">
        <div className="container header-inner">
        <Link href="/" className="header-logo">
          <Image 
            src="/logo_nardus.png" 
            alt="Logo Nardus Soluções" 
            width={115} 
            height={35} 
            className="w-full h-auto" 
          />
        </Link>

        {/* Middle Column: Desktop Nav Links */}
        <nav className="hidden lg:flex items-center justify-center w-full">
          <ul className="flex items-center space-x-8 text-sm font-medium text-white/90">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-[var(--color-brand-accent)] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-nav">
          
          
          <button
            className="lg:hidden ml-auto p-2 text-white hover:text-[var(--color-brand-accent)] focus:outline-none rounded-md flex items-center justify-end"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Abrir menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-200 shadow-lg px-4 py-6 z-40 flex flex-col space-y-4">
          <ul className="flex flex-col space-y-4 text-base font-medium text-gray-800">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block w-full"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
    </>
  );
}
