/* =========================
components/Contact.tsx
========================= */
export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-900 text-white"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: Contact Information */}
          <div>
            <h2 className="text-4xl font-serif mb-6 text-amber-400">
              Get in Touch
            </h2>
            <p className="text-slate-300 mb-10 text-lg">
              Our partners are available for a confidential consultation
              regarding your firm’s audit, tax, or advisory requirements.
            </p>

            <div className="space-y-8">
              <div>
                <h4 className="text-amber-500 uppercase tracking-widest text-sm font-bold mb-2">
                  London Office
                </h4>
                <address className="not-italic text-slate-300 leading-relaxed">
                  12th Floor, The Shard
                  <br />
                  32 London Bridge St
                  <br />
                  London SE1 9SG
                </address>
              </div>

              <div>
                <h4 className="text-amber-500 uppercase tracking-widest text-sm font-bold mb-2">
                  Direct Lines
                </h4>
                <p className="text-slate-300">Enquiries: +44-745-740-9660</p>
                <p className="text-slate-300">
                  Email: info@sterlingandbourne.com
                </p>
              </div>
            </div>
          </div>

          {/* Right: Lead Form */}
          <div className="bg-white p-8 rounded-sm shadow-2xl">
            <form
              className="space-y-6 text-slate-900"
              action="https://formspree.io/f/xqednvan"
              method="POST"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    className="w-full border-b-2 border-slate-200 p-2 focus:border-amber-500 outline-none transition-colors"
                    placeholder="Julian Sterling"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    className="w-full border-b-2 border-slate-200 p-2 focus:border-amber-500 outline-none transition-colors"
                    placeholder="Enter Company"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full border-b-2 border-slate-200 p-2 focus:border-amber-500 outline-none transition-colors"
                  placeholder="email@company.co.uk"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase mb-2">
                  Service Required
                </label>
                <select
                  className="w-full border-b-2 border-slate-200 p-2 focus:border-amber-500 outline-none bg-transparent"
                  name="service"
                >
                  <option>Statutory Audit</option>
                  <option>Tax Strategy</option>
                  <option>M&A Advisory</option>
                  <option>Forensic Accounting</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  className="w-full border-b-2 border-slate-200 p-2 focus:border-amber-500 outline-none transition-colors resize-none"
                  placeholder="Briefly describe your requirements..."
                ></textarea>
              </div>

              <button
                className="w-full bg-slate-900 text-amber-400 font-bold py-4 uppercase tracking-widest hover:bg-slate-800 transition-all"
                type="submit"
              >
                Request Callback
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
