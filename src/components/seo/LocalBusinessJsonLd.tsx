import Script from "next/script";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "name": "Nardus Soluções",
    "image": "https://nardussolucoes.com.br/logo.png",
    "@id": "https://nardussolucoes.com.br",
    "url": "https://nardussolucoes.com.br",
    "telephone": "+55-31-8539-8804",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Belo Horizonte e Região Metropolitana",
      "addressLocality": "Belo Horizonte",
      "addressRegion": "MG",
      "postalCode": "30000-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -19.916681, // Placeholder
      "longitude": -43.934493 // Placeholder
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.instagram.com/nardus.solucoes/",
      "https://share.google/7D6u1Oms6nJR36Gtk"
    ]
  };

  return (
    <Script
      id="local-business-jsonld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
