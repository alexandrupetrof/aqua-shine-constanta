import { Link } from "@tanstack/react-router";
import { ArrowRight, Handshake, Repeat, Zap } from "lucide-react";
import { businessSegments } from "@/lib/data";
import officeImg from "@/assets/service-office.jpg";

export function BusinessContracts() {
  return (
    <section className="bg-gradient-soft py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-elegant">
              <img
                src={officeImg}
                alt="Curățenie birouri Constanța"
                width={1024}
                height={768}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-deep/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-border bg-card p-5 shadow-elegant md:block">
              <p className="font-display text-3xl font-bold text-primary">500+</p>
              <p className="text-xs text-muted-foreground">spații curățate lunar</p>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Pentru companii
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl">
              Contracte de curățenie pentru firme
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              Soluții personalizate pentru birouri, hale, depozite, spații comerciale, asociații
              de proprietari și apartamente în regim hotelier.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                { icon: Handshake, title: "Colaborări pe termen lung", desc: "Stabilim relații solide bazate pe încredere și seriozitate." },
                { icon: Repeat, title: "Flexibilitate totală", desc: "Programare adaptată activității tale — zilnic, săptămânal sau lunar." },
                { icon: Zap, title: "Intervenții rapide", desc: "Răspuns prompt pentru situații neprevăzute, 7 zile din 7." },
              ].map(({ icon: Icon, title, desc }) => (
                <li key={title} className="flex gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-2">
              {businessSegments.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-foreground/80"
                >
                  <Icon className="h-3.5 w-3.5 text-primary" /> {label}
                </span>
              ))}
            </div>

            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-elegant transition-smooth hover:-translate-y-0.5 hover:shadow-glow"
            >
              Solicită ofertă personalizată
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
