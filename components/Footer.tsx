/* =========================
components/Footer.tsx
========================= */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="text-white font-serif text-2xl tracking-tight">
              Sterling <span className="text-amber-500">&</span> Bourne
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] mt-1">
              Audit • Tax • Advisory
            </p>
          </div>

          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-amber-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors">
              Terms of Business
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>

        <hr className="border-slate-800 mb-8" />

        <div className="grid md:grid-cols-2 gap-8 text-[11px] leading-relaxed uppercase tracking-wider">
          <div>
            <p>
              © {currentYear} Sterling & Bourne Professional Services Ltd. All
              rights reserved.
            </p>
            <p className="mt-2">
              Registered in England and Wales. Company Number: 01234567. VAT
              Registration Number: GB 987 6543 21.
            </p>
          </div>

          <div className="md:text-right">
            <p>
              Registered to carry out audit work in the UK by the Institute of
              Chartered Accountants in England and Wales (ICAEW).
            </p>
            <p className="mt-2">
              Registered Office: 12th Floor, The Shard, 32 London Bridge St,
              London SE1 9SG.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
