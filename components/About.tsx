"use client";

import Image from "next/image";
import { useState } from "react";

const team = [
  {
    name: "Julian Sterling",
    role: "Senior Partner",
    bio: "A Fellow of the Institute of Chartered Accountants (FCA) with over two decades of distinguished service in forensic audit. Julian specializes in the intricate unraveling of fiscal discrepancies and high-stakes corporate investigations, providing expert testimony that stands up to the most rigorous judicial scrutiny.",
    image: "/managers/julianSterling.jpg",
    skills:
      "Forensic Reconstruction, Quantitative Analysis, Regulatory Liaison, Litigation Support",
  },
  {
    name: "Eleanor Bourne",
    role: "Managing Partner",
    bio: "Eleanor is a preeminent authority on UK tax legislation and strategic corporate structuring. With a career defined by navigating the complexities of the Finance Act, she serves as a trusted advisor to high-net-worth individuals and multi-national entities, ensuring fiscal efficiency through sophisticated tax mitigation strategies.",
    image: "/managers/eleanorBourne.jpg",
    skills:
      "Capital Gains Strategy, Inheritance Tax Planning, Statutory Compliance, Corporate Restructuring",
  },
  {
    name: "Marcus Thorne",
    role: "Head of Audit",
    bio: "Marcus commands our audit division with an uncompromising commitment to transparency and precision. His expertise lies in mitigating operational risk for SMEs and mid-market enterprises, transforming the audit process from a statutory requirement into a vehicle for institutional value and robust corporate governance.",
    image: "/managers/marcusThorne.jpg",
    skills:
      "Assurance Engagements, Internal Control Optimization, Risk Apprehension, GAAP/IFRS Reporting",
  },
  {
    name: "Sarah Jenkins",
    role: "Tax Advisory Lead",
    bio: "Formerly a pivotal figure within the Big Four’s international tax practices, Sarah brings a global perspective to domestic challenges. She excels in cross-border tax advisory, transfer pricing, and VAT optimization, delivering bespoke solutions that align with the nuanced demands of the modern global economy.",
    image: "/managers/sarahJenkins.jpg",
    skills:
      "International Tax Treaties, VAT/Indirect Tax, Transfer Pricing, Cross-border M&A Advisory",
  },
];
export default function About() {
  const [active, setActive] = useState<any>(null);
  return (
    <section
      id="about"
      className="py-24 bg-white"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 border-l-4 border-amber-500 pl-6">
          <h2 className="text-3xl font-serif font-bold">The Leadership</h2>
          <p className="text-slate-600">
            Decades of collective Big-Four experience, delivered with boutique
            focus.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group cursor-pointer border-b border-transparent hover:border-amber-500 transition-all pb-4"
              onClick={() => setActive(member)}
            >
              <div className="aspect-[4/5] bg-slate-200 mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Elegant Hover Overlay */}
                <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white text-xs font-semibold tracking-widest uppercase">
                    View Profile +
                  </span>
                </div>
              </div>
              <h3 className="font-serif text-2xl mb-1 text-slate-900">
                {member.name}
              </h3>
              <p className="text-amber-700 text-xs font-bold uppercase tracking-[0.2em]">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {active && (
          <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md flex justify-center items-start sm:items-center p-4 z-[100] overflow-y-auto">
            <div className="bg-white w-full max-w-4xl my-8 rounded-sm shadow-2xl relative flex flex-col md:flex-row">
              {/* Improved Close Button: Accessible on all screens */}
              <button
                onClick={() => setActive(null)}
                className="absolute -top-12 right-0 md:top-4 md:right-4 text-white md:text-slate-400 hover:text-amber-500 transition-colors z-50 flex items-center gap-2 uppercase text-[10px] tracking-widest"
              >
                Close <span className="text-2xl">×</span>
              </button>

              {/* Image Section: Square on mobile, portrait on desktop */}
              <div className="w-full md:w-2/5 h-[300px] md:h-auto relative">
                <Image
                  src={active.image}
                  alt={active.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-12 md:w-3/5">
                <h3 className="text-3xl md:text-4xl font-serif font-medium text-slate-900 mb-2">
                  {active.name}
                </h3>
                <p className="text-amber-700 font-bold tracking-[0.15em] uppercase text-xs mb-8">
                  {active.role}
                </p>

                <div className="space-y-6">
                  <p className="text-slate-700 leading-relaxed text-lg font-light italic border-l-2 border-slate-100 pl-6">
                    {active.bio}
                  </p>

                  <div className="pt-6 border-t border-slate-100">
                    <h4 className="text-[10px] font-bold uppercase text-slate-400 mb-4 tracking-widest">
                      Professional Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {active.skills.split(",").map((skill: string) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-slate-50 text-slate-600 text-[11px] border border-slate-200 tracking-wide uppercase"
                        >
                          {skill.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
