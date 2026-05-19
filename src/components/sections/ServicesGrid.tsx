import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/data";

export function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? services.slice(0, limit) : services;
  return (
    <section id="servicii" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Serviciile noastre
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl">
              Acoperim orice tip de spațiu
            </h2>
          </div>
          <Link
            to="/servicii"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary"
          >
            Vezi toate serviciile
            <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {items.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.slug}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-smooth hover:border-primary/40 hover:shadow-elegant"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-smooth group-hover:opacity-100" />
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-secondary text-primary transition-smooth group-hover:bg-gradient-primary group-hover:text-primary-foreground group-hover:shadow-glow">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.short}</p>
                <Link
                  to="/servicii"
                  hash={s.slug}
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary"
                >
                  Vezi detalii
                  <ArrowRight className="h-3.5 w-3.5 transition-smooth group-hover:translate-x-1" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
