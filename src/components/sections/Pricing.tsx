import { Link } from "@tanstack/react-router";
import { Check, Info } from "lucide-react";
import { pricingTable } from "@/lib/data";

export function Pricing() {
  return (
    <section className="bg-gradient-soft py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Tarife</p>
          <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl">
            Prețuri transparente, fără surprize
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Produsele și echipamentele profesionale sunt incluse în prețuri.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {pricingTable.map((cat, i) => (
            <article
              key={cat.category}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 hover-lift"
            >
              <div className="absolute right-0 top-0 h-40 w-40 -translate-y-16 translate-x-16 rounded-full bg-primary-glow/15 blur-3xl" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  Categorie {i + 1}
                </span>
                <h3 className="mt-4 font-display text-2xl font-bold">{cat.category}</h3>
                <ul className="mt-6 space-y-4">
                  {cat.rows.map((r) => (
                    <li
                      key={r.label}
                      className="flex items-center justify-between gap-4 border-b border-dashed border-border pb-4 last:border-0 last:pb-0"
                    >
                      <span className="flex items-center gap-2 text-sm text-foreground/90 md:text-base">
                        <Check className="h-4 w-4 text-primary" />
                        {r.label}
                      </span>
                      <span className="font-display text-lg font-bold text-primary md:text-xl">
                        {r.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-primary/20 bg-primary/5 p-6 text-sm text-foreground/90">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <ul className="space-y-1.5">
              <li>· Pentru contracte lunare, trimestriale sau anuale, tarifele sunt negociabile.</li>
              <li>· Produsele și echipamentele profesionale sunt incluse în prețuri.</li>
              <li>· Prețurile afișate nu includ TVA.</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-smooth hover:-translate-y-0.5 hover:shadow-glow"
          >
            Solicită ofertă personalizată
          </Link>
        </div>
      </div>
    </section>
  );
}
