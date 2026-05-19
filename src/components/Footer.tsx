import { Link } from "@tanstack/react-router";
import { Droplets, Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { SITE, telLink, waLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-gradient-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_20%,white,transparent_50%)]" />
      <div className="container relative mx-auto grid gap-12 px-4 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15 backdrop-blur">
              <Droplets className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-bold">{SITE.name}</span>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/80">
            Servicii profesionale de curățenie pentru persoane fizice și companii din {SITE.area}.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/90">
            Navigare
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-white transition-smooth">Acasă</Link></li>
            <li><Link to="/servicii" className="hover:text-white transition-smooth">Servicii</Link></li>
            <li><Link to="/galerie" className="hover:text-white transition-smooth">Galerie</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-smooth">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/90">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <a href={telLink} className="hover:text-white">{SITE.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <a href={waLink()} target="_blank" rel="noopener" className="hover:text-white">
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {SITE.area}
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-primary-foreground/90">
            Program
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            {SITE.schedule.map((s) => (
              <li key={s.day} className="flex justify-between gap-4">
                <span>{s.day}</span>
                <span className="font-medium text-white">{s.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-primary-foreground/70 md:flex-row">
          <p>© {new Date().getFullYear()} {SITE.name}. Toate drepturile rezervate.</p>
          <p>Curățenie premium în {SITE.area}</p>
        </div>
      </div>
    </footer>
  );
}
