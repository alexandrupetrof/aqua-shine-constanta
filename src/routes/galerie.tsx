import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/Layout";
import { CTABand } from "@/components/CTABand";
import apartmentImg from "@/assets/service-apartment.jpg";
import houseImg from "@/assets/service-house.jpg";
import warehouseImg from "@/assets/service-warehouse.jpg";
import officeImg from "@/assets/service-office.jpg";
import heroImg from "@/assets/hero-cleaning.jpg";
import { X } from "lucide-react";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie — Lucrările noastre | Speed Aqua Sea" },
      { name: "description", content: "Galerie foto cu lucrările de curățenie efectuate în apartamente, case, birouri, hale și spații comerciale din Constanța." },
      { property: "og:title", content: "Galerie Speed Aqua Sea" },
      { property: "og:description", content: "Lucrările noastre de curățenie în Constanța." },
      { property: "og:url", content: "/galerie" },
    ],
    links: [{ rel: "canonical", href: "/galerie" }],
  }),
  component: GaleriePage,
});

const categories = ["Toate", "Apartamente", "Case", "Birouri", "Hale", "Spații comerciale"] as const;

const items = [
  { src: heroImg, cat: "Apartamente", alt: "Curățenie apartament Constanța" },
  { src: apartmentImg, cat: "Apartamente", alt: "Living curățat" },
  { src: officeImg, cat: "Birouri", alt: "Birou curățat" },
  { src: houseImg, cat: "Case", alt: "Casă curățată" },
  { src: warehouseImg, cat: "Hale", alt: "Hală curățată" },
  { src: apartmentImg, cat: "Apartamente", alt: "Apartament impecabil" },
  { src: officeImg, cat: "Spații comerciale", alt: "Spațiu comercial curățat" },
  { src: houseImg, cat: "Case", alt: "Interior casă" },
  { src: warehouseImg, cat: "Hale", alt: "Depozit curățat" },
  { src: heroImg, cat: "Apartamente", alt: "Echipă în acțiune" },
  { src: officeImg, cat: "Birouri", alt: "Sală conferință" },
  { src: apartmentImg, cat: "Apartamente", alt: "Living premium" },
];

function GaleriePage() {
  const [active, setActive] = useState<(typeof categories)[number]>("Toate");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "Toate" ? items : items.filter((i) => i.cat === active);

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-primary py-20 text-primary-foreground md:py-28">
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_70%_30%,white,transparent_60%)]" />
        <div className="container relative mx-auto px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Galerie</p>
          <h1 className="mt-3 text-balance text-4xl font-bold md:text-6xl">
            Lucrările noastre vorbesc
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/85 md:text-lg">
            O selecție din proiectele realizate pentru clienții din Constanța.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-smooth ${
                  active === c
                    ? "bg-gradient-primary text-primary-foreground shadow-soft"
                    : "border border-border bg-card text-foreground/80 hover:border-primary/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {filtered.map((it, i) => (
              <button
                key={i}
                onClick={() => setLightbox(it.src)}
                className="group block w-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-smooth hover:shadow-elegant"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={it.src}
                    alt={it.alt}
                    loading="lazy"
                    className="w-full transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/60 via-transparent to-transparent opacity-0 transition-smooth group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary opacity-0 backdrop-blur transition-smooth group-hover:opacity-100">
                    {it.cat}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-fade-up"
        >
          <button
            aria-label="Închide"
            className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white/15 text-white backdrop-blur transition-smooth hover:bg-white/25"
          >
            <X className="h-5 w-5" />
          </button>
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-full rounded-2xl shadow-elegant" />
        </div>
      )}

      <CTABand />
    </Layout>
  );
}
