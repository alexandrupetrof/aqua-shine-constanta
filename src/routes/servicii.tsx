import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Tag, ArrowRight, Check } from "lucide-react";
import { Layout } from "@/components/Layout";
import { CTABand } from "@/components/CTABand";
import { services } from "@/lib/data";
import apartmentImg from "@/assets/service-apartment.jpg";
import houseImg from "@/assets/service-house.jpg";
import warehouseImg from "@/assets/service-warehouse.jpg";
import officeImg from "@/assets/service-office.jpg";

const imageMap: Record<string, string> = {
  garsoniere: apartmentImg,
  apartamente: apartmentImg,
  case: houseImg,
  "dupa-constructor": houseImg,
  generala: apartmentImg,
  intretinere: apartmentImg,
  birouri: officeImg,
  hale: warehouseImg,
  depozite: warehouseImg,
  "spatii-comerciale": officeImg,
};

export const Route = createFileRoute("/servicii")({
  head: () => ({
    meta: [
      { title: "Servicii de Curățenie Constanța — Speed Aqua Sea" },
      {
        name: "description",
        content:
          "Toate serviciile de curățenie disponibile: garsoniere, apartamente, case, după constructor, birouri, hale, depozite, spații comerciale.",
      },
      { property: "og:title", content: "Servicii de Curățenie — Speed Aqua Sea" },
      { property: "og:description", content: "Servicii de curățenie pentru orice tip de spațiu în Constanța." },
      { property: "og:url", content: "/servicii" },
    ],
    links: [{ rel: "canonical", href: "/servicii" }],
  }),
  component: ServiciiPage,
});

function ServiciiPage() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-primary py-20 text-primary-foreground md:py-28">
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />
        <div className="container relative mx-auto px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
            Serviciile noastre
          </p>
          <h1 className="mt-3 text-balance text-4xl font-bold md:text-6xl">
            Curățenie premium pentru fiecare spațiu
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/85 md:text-lg">
            De la garsoniere la hale industriale — avem echipa, echipamentele și experiența
            pentru orice tip de proiect.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto space-y-16 px-4">
          {services.map((s, idx) => {
            const Icon = s.icon;
            const reversed = idx % 2 === 1;
            return (
              <article
                key={s.slug}
                id={s.slug}
                className="scroll-mt-24 grid items-center gap-10 lg:grid-cols-2"
              >
                <div className={`overflow-hidden rounded-3xl border border-border shadow-elegant ${reversed ? "lg:order-2" : ""}`}>
                  <img
                    src={imageMap[s.slug]}
                    alt={s.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-smooth hover:scale-105"
                  />
                </div>
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                    <Icon className="h-3.5 w-3.5" /> {s.slug.replace("-", " ")}
                  </span>
                  <h2 className="mt-4 text-balance text-3xl font-bold md:text-4xl">{s.title}</h2>
                  <p className="mt-4 text-muted-foreground md:text-lg">{s.description}</p>

                  <ul className="mt-6 space-y-2">
                    {s.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-foreground/90">
                        <Check className="h-4 w-4 text-primary" /> {b}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
                      <Clock className="h-4 w-4 text-primary" /> {s.estimatedTime}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm">
                      <Tag className="h-4 w-4 text-primary" /> {s.pricing}
                    </span>
                  </div>

                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:-translate-y-0.5 hover:shadow-glow"
                  >
                    Cere ofertă <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <CTABand />
    </Layout>
  );
}
