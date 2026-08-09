import Image from "next/image";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/553185398804?text=Olá, vim pelo site da Nardus Soluções e preciso de atendimento."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating hover:scale-110 transition-transform duration-300 drop-shadow-2xl"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <Image
        src="/widget_whatsapp.png"
        alt="WhatsApp"
        width={72}
        height={72}
        className="w-14 h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
      />
    </a>
  );
}
