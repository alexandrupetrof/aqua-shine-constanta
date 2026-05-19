import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { BusinessContracts } from "@/components/sections/BusinessContracts";
import { MapSection } from "@/components/sections/MapSection";
import { CTABand } from "@/components/CTABand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Speed Aqua Sea — Firmă de Curățenie Constanța" },
      {
        name: "description",
        content:
          "Servicii profesionale de curățenie în Constanța: apartamente, case, birouri, hale, depozite. Echipamente și produse incluse. Sună 0738 877 347.",
      },
      { property: "og:title", content: "Speed Aqua Sea — Curățenie Profesională Constanța" },
      { property: "og:description", content: "Curățenie pentru persoane fizice și firme. Contracte disponibile." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <Hero />
      <Benefits />
      <ServicesGrid />
      <Pricing />
      <Testimonials />
      <BusinessContracts />
      <MapSection />
      <CTABand />
    </Layout>
  );
}
