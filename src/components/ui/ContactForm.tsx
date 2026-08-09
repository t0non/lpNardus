"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Checkbox } from "@/components/ui/Checkbox";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      
      // DataLayer push for tracking
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "generate_lead",
          form_name: "contato_site"
        });
      }
    }, 1000);
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 text-green-900 p-8 rounded-xl border border-green-200 text-center space-y-4">
        <h3 className="text-xl font-bold">Solicitação enviada com sucesso!</h3>
        <p>A equipe da Nardus Soluções recebeu seus dados e entrará em contato em breve.</p>
        <Button onClick={() => setStatus("idle")} variant="outline" className="mt-4">
          Enviar nova mensagem
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">Nome completo *</label>
        <Input id="name" required placeholder="Digite seu nome" disabled={status === "loading"} />
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium text-gray-700">Empresa / Estabelecimento *</label>
        <Input id="company" required placeholder="Nome do seu negócio" disabled={status === "loading"} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="whatsapp" className="text-sm font-medium text-gray-700">WhatsApp *</label>
          <Input id="whatsapp" required type="tel" placeholder="(00) 00000-0000" disabled={status === "loading"} />
        </div>
        <div className="space-y-2">
          <label htmlFor="city" className="text-sm font-medium text-gray-700">Cidade ou Bairro *</label>
          <Input id="city" required placeholder="Ex: Contagem" disabled={status === "loading"} />
        </div>
      </div>

      <div className="space-y-2">
         <label htmlFor="service" className="text-sm font-medium text-gray-700">Serviço desejado *</label>
         <select 
           id="service" 
           required 
           className="flex h-11 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-brand-primary)] disabled:cursor-not-allowed disabled:opacity-50"
           disabled={status === "loading"}
         >
            <option value="" disabled selected>Selecione um serviço</option>
            <option value="Ar-condicionado">Manutenção de Ar-condicionado</option>
            <option value="Câmaras Frias">Manutenção de Câmara Fria</option>
            <option value="Refrigeração Comercial">Refrigeração Comercial</option>
            <option value="Outro">Outro</option>
         </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">Descrição breve do problema</label>
        <Textarea id="message" placeholder="Conte-nos o que está acontecendo..." disabled={status === "loading"} />
      </div>

      <div className="pt-2">
         <Checkbox 
           id="consent" 
           required 
           disabled={status === "loading"}
           label="Concordo em fornecer meus dados para que a Nardus Soluções entre em contato sobre esta solicitação."
         />
      </div>

      <Button type="submit" size="lg" className="w-full h-12 text-lg mt-4" disabled={status === "loading"}>
        {status === "loading" ? "Enviando..." : "Solicitar atendimento"}
      </Button>

      {status === "error" && (
        <p className="text-red-500 text-sm text-center">Ocorreu um erro ao enviar. Tente novamente.</p>
      )}
    </form>
  );
}
