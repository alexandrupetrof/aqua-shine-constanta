import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/Layout";
import { SITE, telLink, waLink } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Speed Aqua Sea Constanța" },
      { name: "description", content: "Contactează-ne pentru o ofertă personalizată de curățenie în Constanța. Telefon 0738 877 347, WhatsApp și formular online." },
      { property: "og:title", content: "Contact Speed Aqua Sea" },
      { property: "og:description", content: "Cere o ofertă rapidă pentru servicii de curățenie." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const serviceOptions = [
  "Curățenie garsonieră",
  "Curățenie apartament",
  "Curățenie casă",
  "Curățenie după constructor",
  "Curățenie birouri",
  "Curățenie hale / depozite",
  "Curățenie spațiu comercial",
  "Contract recurent",
  "Altceva",
];

function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name");
    const phone = fd.get("phone");
    const service = fd.get("service");
    const message = fd.get("message");
    const text = `Bună ziua, sunt ${name} (tel: ${phone}). Doresc ofertă pentru: ${service}. ${message}`;
    window.open(waLink(String(text)), "_blank");
    setSent(true);
  }

  return (
    <Layout>
      <section className="relative overflow-hidden bg-gradient-primary py-20 text-primary-foreground md:py-28">
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(circle_at_30%_30%,white,transparent_60%)]" />
        <div className="container relative mx-auto px-4 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/80">Contact</p>
          <h1 className="mt-3 text-balance text-4xl font-bold md:text-6xl">Hai să vorbim</h1>
          <p className="mx-auto mt-5 max-w-2xl text-white/85 md:text-lg">
            Răspundem la solicitări în maxim o oră. Ofertă personalizată în 24h.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-elegant md:p-10">
              <h2 className="font-display text-2xl font-bold md:text-3xl">Cere ofertă personalizată</h2>
              <p className="mt-2 text-muted-foreground">
                Completează formularul și te contactăm rapid pe WhatsApp.
              </p>

              {sent ? (
                <div className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-primary/30 bg-primary/5 p-8 text-center">
                  <CheckCircle2 className="h-10 w-10 text-primary" />
                  <p className="font-semibold">Mulțumim!</p>
                  <p className="text-sm text-muted-foreground">
                    Ai fost redirecționat către WhatsApp. Te contactăm cât mai curând.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="mt-8 grid gap-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Nume" name="name" required placeholder="Numele tău" />
                    <Field label="Telefon" name="phone" required type="tel" placeholder="07xx xxx xxx" />
                  </div>
                  <Field label="Email" name="email" type="email" placeholder="email@exemplu.ro" />

                  <div>
                    <label className="text-sm font-medium">Tip serviciu</label>
                    <select
                      name="service"
                      required
                      className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                    >
                      {serviceOptions.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Mesaj</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Detalii suprafață, locație, frecvență..."
                      className="mt-1.5 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-soft transition-smooth hover:-translate-y-0.5 hover:shadow-glow"
                  >
                    <Send className="h-4 w-4" /> Trimite cererea
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Info */}
          <aside className="space-y-4 lg:col-span-2">
            <a
              href={telLink}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-gradient-card p-6 transition-smooth hover-lift"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-soft">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Telefon</p>
                <p className="font-display text-xl font-bold">{SITE.phoneDisplay}</p>
                <p className="text-sm text-primary">Sună direct →</p>
              </div>
            </a>

            <a
              href={waLink()}
              target="_blank"
              rel="noopener"
              className="group flex items-start gap-4 rounded-2xl border border-border bg-gradient-card p-6 transition-smooth hover-lift"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[color:var(--whatsapp)] text-white shadow-soft">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">WhatsApp</p>
                <p className="font-display text-xl font-bold">Trimite mesaj</p>
                <p className="text-sm text-primary">Răspuns în maxim 1h →</p>
              </div>
            </a>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Zonă</p>
                <p className="font-semibold">{SITE.area}</p>
                <p className="text-sm text-muted-foreground">Constanța, Mamaia, Năvodari, Mangalia</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-secondary text-primary">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</p>
                <a href={`mailto:${SITE.email}`} className="font-semibold text-foreground hover:text-primary">
                  {SITE.email}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Clock className="h-4 w-4 text-primary" /> Program
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {SITE.schedule.map((s) => (
                  <li key={s.day} className="flex justify-between border-b border-dashed border-border pb-2 last:border-0">
                    <span className="text-muted-foreground">{s.day}</span>
                    <span className="font-semibold">{s.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="container mx-auto mt-16 px-4">
          <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
            <iframe
              title="Hartă Constanța"
              src="https://www.google.com/maps?q=Constanta&output=embed"
              className="block h-[360px] w-full md:h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-sm font-medium">{label}{required && <span className="text-primary"> *</span>}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm transition-smooth focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/20"
      />
    </div>
  );
}
