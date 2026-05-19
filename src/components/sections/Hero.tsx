import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, ArrowRight, Sparkles, ShieldCheck, Clock } from "lucide-react";
import { SITE, telLink, waLink } from "@/lib/site";
import heroImg from "@/assets/hero-cleaning.jpg";

export function Hero() {
  return (
    <section className="relative isolate min-h-[88vh] overflow-hidden md:min-h-[92vh]">
      <img
        src={heroImg}
        alt="Echipă profesională de curățenie Speed Aqua Sea Constanța"
        width={1920}
        height={1080}
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute inset-0 -z-10 opacity-30 [background:radial-gradient(circle_at_70%_30%,white,transparent_60%)]" />

      {/* floating bubbles */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-24 w-24 rounded-full bg-white/15 backdrop-blur-sm animate-float" />
        <div className="absolute right-[15%] top-[40%] h-32 w-32 rounded-full bg-primary-glow/20 backdrop-blur-sm animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute left-[60%] bottom-[15%] h-20 w-20 rounded-full bg-white/10 backdrop-blur-sm animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto flex min-h-[88vh] flex-col justify-center px-4 py-24 text-primary-foreground md:min-h-[92vh]">
        <div className="max-w-3xl animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" /> Premium · {SITE.area}
          </span>
          <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.1] md:text-6xl lg:text-7xl">
            Servicii Profesionale de Curățenie în <span className="bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">Constanța</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/90 md:text-xl">
            Curățenie pentru garsoniere, apartamente, case, hale, birouri, depozite și spații comerciale.
          </p>
          <p className="mt-3 max-w-2xl text-sm text-white/80 md:text-base">
            Pentru persoane fizice și companii. Contracte de curățenie disponibile.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-primary shadow-elegant transition-smooth hover:-translate-y-0.5 hover:shadow-glow md:text-base"
            >
              Cere o ofertă
              <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
            </Link>
            <a
              href={telLink}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition-smooth hover:bg-white/20 md:text-base"
            >
              <Phone className="h-4 w-4" /> Sună acum
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--whatsapp)] px-7 py-4 text-sm font-semibold text-white shadow-elegant transition-smooth hover:-translate-y-0.5 md:text-base"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4 text-white/90">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary-glow" />
              <span className="text-xs md:text-sm">Echipă verificată</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary-glow" />
              <span className="text-xs md:text-sm">Răspuns în 1h</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary-glow" />
              <span className="text-xs md:text-sm">Produse incluse</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
