import { buildGeneralMessage, buildWhatsAppLink } from "@/lib/whatsapp";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#nosotros", label: "Sobre Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#contacto", label: "Contáctanos" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-wood-800 py-10 text-sand-100/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center sm:px-8 md:flex-row md:justify-between md:text-left">
        <div>
          <p className="font-heading text-lg font-semibold text-white">
            Iluminarias <span className="text-brand-400">Bambú</span>
          </p>
          <p className="mt-1 text-sm">
            Lámparas artesanales de bambú por Amauris Alcantara.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-5 text-sm">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={buildWhatsAppLink(buildGeneralMessage())}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-brand-600 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Escríbenos
        </a>
      </div>

      <p className="mt-8 text-center text-xs text-sand-100/50">
        © {year} Iluminarias Bambú. Todos los derechos reservados.
      </p>
    </footer>
  );
}
