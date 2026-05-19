import { Phone, MessageCircle } from "lucide-react";
import { SITE, telLink, waLink } from "@/lib/site";

export function StickyContact() {
  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 md:bottom-8 md:right-6">
      <a
        href={waLink()}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-[color:var(--whatsapp)] text-white shadow-elegant transition-smooth hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[color:var(--whatsapp)] opacity-30" />
      </a>
      <a
        href={telLink}
        aria-label={`Sună ${SITE.phoneDisplay}`}
        className="grid h-14 w-14 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow transition-smooth hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
