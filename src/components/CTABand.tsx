import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { SITE, telLink, waLink } from "@/lib/site";

export function CTABand() {
  return (
    <section className="relative overflow-hidden bg-gradient-primary py-16 md:py-24">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-white/30 blur-3xl animate-float" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-primary-glow/40 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative mx-auto px-4 text-center text-primary-foreground">
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-primary-foreground/80">
          Hai să discutăm
        </p>
        <h2 className="mx-auto max-w-3xl text-balance text-3xl font-bold md:text-5xl">
          Ai nevoie de servicii profesionale de curățenie?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/85 md:text-lg">
          Suntem la un telefon distanță. Ofertă personalizată în maxim 24 de ore.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href={telLink}
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-primary shadow-lg transition-smooth hover:-translate-y-0.5 hover:shadow-glow"
          >
            <Phone className="h-4 w-4" /> Sună acum
          </a>
          <a
            href={waLink()}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-smooth hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-smooth hover:bg-white/20"
          >
            <FileText className="h-4 w-4" /> Cere ofertă
          </Link>
        </div>
        <p className="mt-6 text-sm text-primary-foreground/80">
          {SITE.phoneDisplay} · {SITE.area}
        </p>
      </div>
    </section>
  );
}
