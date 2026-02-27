import OrganizationJsonLd from "@/components/OrganzationJsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonials";
import { Metadata } from "next";
import { team } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sterling & Bourne | Boutique Audit & Strategic Advisory",
  description:
    "Specializing in forensic audit, tax strategy, and corporate governance for prestigious global clients.",
  openGraph: {
    title: "Sterling & Bourne | Audit & Advisory",
    description: "Expert forensic accounting and tax mitigation strategies.",
    url: "https://sterlingandbourne.com",
    siteName: "Sterling & Bourne",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "en_GB",
    type: "website",
  },
};

export default function LandingPage() {
  return (
    <main className=" bg-slate-50 text-slate-900">
      <OrganizationJsonLd team={team} />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
}
