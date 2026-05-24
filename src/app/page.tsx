import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Section, SectionHeader } from "@/components/ui/section";
import { ServiceCard } from "@/features/services/components/service-card";
import { getServices } from "@/features/services/queries/get-services";
import { siteConfig } from "@/lib/constants";

export default async function Home() {
  const services = await getServices();

  return (
  <>
    <Header />
    <main>
      <Section className="bg-gradient-to-b from-zinc-50 to-white pt-20 md:pt-28">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-zinc-500">
            Technology partner
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-6xl md:leading-tight">
            Consult. Design. Implement.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 md:text-xl">
            {siteConfig.name} helps teams build reliable digital platforms — from strategy
            and architecture through to production delivery.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700"
            >
              Start a conversation
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:border-zinc-900"
            >
              Explore services
            </Link>
          </div>
        </div>
      </Section>

      <Section id="services">
        <SectionHeader
          eyebrow="What we do"
          title="End-to-end technology services"
          description="Three complementary capabilities to take you from idea to production."
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

      <Section className="bg-zinc-900 text-white">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Ready to move your platform forward?
            </h2>
            <p className="mt-4 text-lg text-zinc-300">
              Tell us about your goals — we will respond with a clear next step, not a sales pitch.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-100"
          >
            Contact us
          </Link>
        </div>
      </Section>
    </main>
    <Footer />
  </>
  );
}
