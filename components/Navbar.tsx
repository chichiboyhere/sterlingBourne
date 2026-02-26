/* =========================
components/Navbar.tsx
========================= */
"use client";
import { useState } from "react";
import Image from "next/image";

const links = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-blue-950 text-white z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex gap-2 items-center justify-center">
          <Image
            src="/sterling&bourne.png"
            alt="site logo"
            width={300}
            height={300}
            className="w-12 h-auto"
          />
          <div className="font-bold text-xl">Sterling & Bourne</div>
        </div>

        <div className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-yellow-400">
              {l.label}
            </a>
          ))}
          <span className="font-bold text-yellow-400">+44-745-740-9660</span>
        </div>

        <div className="md:hidden flex items-center gap-3">
          {/* <span className="font-bold text-yellow-400">+44 20 7946 0912</span> */}
          <button onClick={() => setOpen(!open)} className="text-2xl">
            ☰
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden bg-navy px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 border-b border-white/20"
            >
              {l.label}
            </a>
          ))}
          <span className="font-bold text-yellow-400">+44-745-740-9660</span>
        </nav>
      )}
    </header>
  );
}
