"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "accepted");
    // TODO: Trigger GTM event for consent granted
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
       (window as any).dataLayer.push({
         event: "consent_update",
         consent: {
            ad_storage: "granted",
            analytics_storage: "granted",
            ad_user_data: "granted",
            ad_personalization: "granted"
         }
       });
    }
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem("cookie_consent", "rejected");
    // TODO: Trigger GTM event for consent denied
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "consent_update",
          consent: {
             ad_storage: "denied",
             analytics_storage: "denied",
             ad_user_data: "denied",
             ad_personalization: "denied"
          }
        });
     }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-20 md:pb-4 md:p-6 sm:max-w-md ml-auto">
      <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-2xl">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Sua privacidade importa</h3>
        <p className="text-sm text-gray-600 mb-4">
          Utilizamos cookies para melhorar sua experiência em nosso site, analisar o tráfego e personalizar conteúdo. 
          Ao continuar, você concorda com a nossa <Link href="/politica-de-cookies" className="text-[var(--color-brand-primary)] underline">Política de Cookies</Link>.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button onClick={acceptCookies} className="w-full sm:w-auto">
            Aceitar Todos
          </Button>
          <Button onClick={rejectCookies} variant="outline" className="w-full sm:w-auto">
            Recusar
          </Button>
        </div>
      </div>
    </div>
  );
}
