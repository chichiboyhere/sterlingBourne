//import OrganizationJsonLd from "@/components/OrganzationJsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonials";

export default function LandingPage() {
  return (
    <main className=" bg-slate-50 text-slate-900">
      {/* <OrganizationJsonLd team={team} /> */}
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
