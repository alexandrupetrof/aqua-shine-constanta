import { benefits } from "@/lib/data";
import { CheckCircle2 } from "lucide-react";

export function Benefits() {
  return (
    <section className="bg-gradient-soft py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            De ce noi
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold text-foreground md:text-5xl">
            Curățenie premium, fără compromisuri
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Tot ce ai nevoie pentru un spațiu impecabil — într-un singur apel.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <article
              key={b.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-7 hover-lift"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-12 translate-x-12 rounded-full bg-primary-glow/10 blur-2xl transition-smooth group-hover:bg-primary-glow/20" />
              <div className="relative">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
