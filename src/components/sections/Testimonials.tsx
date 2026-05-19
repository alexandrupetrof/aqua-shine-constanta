import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Recenzii</p>
          <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl">
            Ce spun clienții noștri
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Peste 500 de spații curățate impecabil în Constanța.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="group relative flex flex-col rounded-2xl border border-border bg-gradient-card p-6 hover-lift"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/15" />
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                "{t.text}"
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-primary font-display text-base font-bold text-primary-foreground shadow-soft">
                  {t.initial}
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
