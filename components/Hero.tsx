export default function Hero() {
  return (
    <section className=" relative h-[100vh] flex items-center bg-slate-900 text-white px-6">
      <div
        className="max-w-7xl mx-auto w-full  "
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <h1 className="text-5xl md:text-7xl font-serif mb-6">
          Precision in Audit. <br />
          <span className="text-amber-400">Clarity in Strategy.</span>
        </h1>
        <p className="max-w-xl text-lg text-slate-300 mb-8">
          Sterling & Bourne provides boutique accounting and strategic advisory
          for London’s most ambitious enterprises.
        </p>
        <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 font-bold rounded-sm transition-all">
          <a href="#contact">Schedule a Consultation</a>
        </button>
      </div>
    </section>
  );
}
