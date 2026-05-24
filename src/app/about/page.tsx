import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Section, SectionHeader } from "@/components/ui/section";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: `About | ${siteConfig.name}`,
  description: `Learn about ${siteConfig.name} — a technology consultancy focused on practical outcomes.`,
};

const values = [
  {
    title: "Clarity first",
    description:
      "We start with understanding — your constraints, goals, and team — before recommending solutions.",
  },
  {
    title: "Built to last",
    description:
      "We favor maintainable architectures and observable systems over quick fixes that create debt.",
  },
  {
    title: "Partnership",
    description:
      "We work alongside your team, transferring knowledge so you stay in control after we leave.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <Section className="pt-20 md:pt-28">
          <SectionHeader
            eyebrow="About"
            title={`About ${siteConfig.name}`}
            description="We are a technology consultancy helping organizations design and deliver modern digital platforms — with a focus on cloud, integration, and developer experience."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-2xl border border-zinc-200 p-8">
                <h3 className="text-xl font-semibold text-zinc-900">{value.title}</h3>
                <p className="mt-3 leading-relaxed text-zinc-600">{value.description}</p>
              </article>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
