"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Sobre Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#contacto", label: "Contáctanos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-sand-50/95 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="#inicio"
          className={`font-heading text-xl font-semibold tracking-wide transition-colors ${
            scrolled ? "text-brand-800" : "text-white drop-shadow-sm"
          }`}
        >
          Iluminarias <span className="text-brand-500">Bambú</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium tracking-wide transition-colors hover:text-brand-500 ${
                scrolled ? "text-wood-800" : "text-white drop-shadow-sm"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#productos"
            className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
          >
            Ver catálogo
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className={`flex flex-col gap-1.5 md:hidden ${
            scrolled ? "text-wood-800" : "text-white"
          }`}
        >
          <span
            className={`h-0.5 w-7 bg-current transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-7 bg-current transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-7 bg-current transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className="mx-4 mb-4 flex flex-col gap-1 rounded-2xl bg-sand-50 p-4 shadow-lg md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-wood-800 hover:bg-brand-50"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#productos"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-lg bg-brand-600 px-3 py-2 text-center font-semibold text-white"
          >
            Ver catálogo
          </a>
        </div>
      )}
    </header>
  );
}
