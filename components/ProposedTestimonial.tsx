const testimonials = [
  {
    quote:
      "In the volatile landscape of financial technology, we required an audit partner who possessed both the rigorous scrutiny of a global institution and the agility of a boutique consultancy.",
    author: "Julian Vane",
    position: "CEO of Aetheris FinTech",
    sector: "Technology & Innovation",
  },
  {
    quote:
      "Managing a legacy estate requires a delicate balance between tradition and modern fiscal efficiency. Their mastery of UK tax legislation has been indispensable to our family's heritage.",
    author: "The Rt. Hon. Alistair Thorne",
    position: "Director, Thorne & Co. Holdings",
    sector: "Private Wealth",
  },
  {
    quote:
      "The firm delivers a high-calibre, 'white-glove' service that is increasingly rare. They are not just our auditors; they are our most trusted strategic interlocutors in the United Kingdom.",
    author: "Dr. Aris Volkov",
    position: "CFO, Magna Global Logistics",
    sector: "International Trade",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col">
              {/* Decorative Quote Mark */}
              <span className="text-6xl font-serif text-amber-500/30 mb-[-1.5rem]">
                “
              </span>

              <blockquote className="flex-grow">
                <p className="text-slate-700 text-lg leading-relaxed font-light italic mb-8 relative">
                  {t.quote}
                </p>
              </blockquote>

              <div className="mt-auto pt-6 border-t border-slate-200">
                <p className="font-serif text-xl text-slate-900">{t.author}</p>
                <p className="text-amber-700 text-[10px] font-bold uppercase tracking-widest mt-1">
                  {t.position}
                </p>
                <span className="inline-block mt-3 px-2 py-0.5 bg-slate-200 text-slate-500 text-[9px] uppercase tracking-tighter">
                  Sector: {t.sector}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
