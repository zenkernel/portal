import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Section, SectionHeader } from "@/components/ui/section";
import { ServiceCard } from "@/features/services/components/service-card";
import { getServices } from "@/features/services/queries/get-services";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Services | ${siteConfig.name}`,
  description: "Consulting, design, and implementation services for modern technology platforms.",
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <Header />
      <main>
        <Section className="pt-20 md:pt-28">
          <SectionHeader
            eyebrow="Services"
            title="How we help"
            description="Whether you need direction, design, or delivery — we meet you where you are and move you forward."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                tagline={service.tagline}
                description={service.description}
                highlights={service.highlights}
              />
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
