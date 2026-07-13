import Image from "next/image";
import { buildGeneralMessage, buildWhatsAppLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <Image
        src="/images/products/trio-yute-premium-1.jpeg"
        alt="Lámpara de bambú Trío Yute Premium encendida en un ambiente cálido de madera"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-wood-900/80 via-wood-900/60 to-wood-900/90" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 pt-24 pb-16 sm:px-8">
        <span className="animate-fade-up rounded-full border border-brand-300/60 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-100 backdrop-blur-sm">
          Hecho a mano · 100% bambú natural
        </span>

        <h1
          className="animate-fade-up max-w-2xl font-heading text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl"
          style={{ animationDelay: "0.1s" }}
        >
          Luz cálida, alma artesanal
        </h1>

        <p
          className="animate-fade-up max-w-xl text-lg text-sand-100/90"
          style={{ animationDelay: "0.2s" }}
        >
          En Iluminarias Bambú diseñamos y fabricamos lámparas artesanales de
          bambú y cuerda natural, pieza por pieza, para darle un toque único
          y acogedor a tu hogar, terraza o negocio.
        </p>

        <div
          className="animate-fade-up flex flex-wrap gap-4 pt-2"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#productos"
            className="rounded-full bg-brand-600 px-7 py-3 font-semibold text-white shadow-lg transition-colors hover:bg-brand-700"
          >
            Ver catálogo
          </a>
          <a
            href={buildWhatsAppLink(buildGeneralMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/70 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15"
          >
            Escríbenos por WhatsApp
          </a>
        </div>

        <div
          className="animate-fade-up mt-8 grid w-full grid-cols-3 gap-4 border-t border-white/20 pt-6 sm:max-w-lg"
          style={{ animationDelay: "0.4s" }}
        >
          <div>
            <p className="font-heading text-2xl font-semibold text-white sm:text-3xl">
              +11
            </p>
            <p className="text-xs text-sand-100/80 sm:text-sm">
              Modelos artesanales
            </p>
          </div>
          <div>
            <p className="font-heading text-2xl font-semibold text-white sm:text-3xl">
              100%
            </p>
            <p className="text-xs text-sand-100/80 sm:text-sm">
              Bambú y materiales naturales
            </p>
          </div>
          <div>
            <p className="font-heading text-2xl font-semibold text-white sm:text-3xl">
              A mano
            </p>
            <p className="text-xs text-sand-100/80 sm:text-sm">
              Cada pieza es única
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
