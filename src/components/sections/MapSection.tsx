import { MapPin } from "lucide-react";
import { SITE } from "@/lib/site";

export function MapSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Acoperire</p>
          <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl">
            Lucrăm în {SITE.area}
          </h2>
          <p className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4 text-primary" /> Constanța · Mamaia · Năvodari · Mangalia · Eforie
          </p>
        </div>

        <div className="mt-10 overflow-hidden rounded-3xl border border-border shadow-elegant">
          <iframe
            title="Hartă Constanța"
            src="https://www.google.com/maps?q=Constanta&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block h-[360px] w-full md:h-[480px]"
          />
        </div>
      </div>
    </section>
  );
}
