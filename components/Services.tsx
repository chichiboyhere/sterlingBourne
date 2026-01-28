import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section
      className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12"
      id="services"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <ServiceCard
        title="Statutory Audit"
        desc="Rigorous, transparent, and compliant reporting for UK stakeholders."
      />
      <ServiceCard
        title="Tax Strategy"
        desc="Efficient corporate and personal tax planning in a shifting landscape."
      />
      <ServiceCard
        title="M&A Advisory"
        desc="Due diligence and valuation services for seamless transitions."
      />
    </section>
  );
}
