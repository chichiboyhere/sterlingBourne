//import OrganizationJsonLd from "@/components/OrganzationJsonLd";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonials";

export default function LandingPage() {
  /**
   44-745-740-9660
   mikeudi1@outlook.com
   mikeigbo@hotmail.com
   swantonmark06@gmail.com
   */
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
