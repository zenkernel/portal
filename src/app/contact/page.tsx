import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Section, SectionHeader } from "@/components/ui/section";
import { ContactForm } from "@/features/contact/components/contact-form";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact | ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.name} to discuss your technology project.`,
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <Section className="pt-20 md:pt-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <SectionHeader
              eyebrow="Contact"
              title="Let's talk"
              description="Share a bit about your project. We typically respond within one business day."
            />
            <ContactForm />
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
