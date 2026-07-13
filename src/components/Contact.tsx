"use client";

import { useState, type FormEvent } from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { products } from "@/data/products";

const displayPhone = "+1 809-854-5458";

export default function Contact() {
  const [name, setName] = useState("");
  const [interest, setInterest] = useState("Consulta general");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const parts = [
      `Hola Amauris, soy ${name || "un cliente interesado"}.`,
      `Modelo de interés: ${interest}.`,
      message ? `Mensaje: ${message}` : null,
    ].filter(Boolean);

    window.open(buildWhatsAppLink(parts.join("\n")), "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contacto" className="bg-wood-900 py-24 text-sand-100">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            Contáctanos
          </span>
          <h2 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
            Hagamos brillar tu espacio
          </h2>
          <p className="max-w-md text-sand-100/80">
            Escríbenos para cotizar tu lámpara, consultar medidas
            personalizadas o coordinar la entrega. Respondemos directamente
            por WhatsApp.
          </p>

          <div className="mt-4 flex flex-col gap-4">
            <a
              href={buildWhatsAppLink("Hola Amauris, me gustaría más información sobre las lámparas de Iluminarias Bambú.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]/20 text-[#25D366]">
                ✆
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-sand-100/60">
                  WhatsApp
                </span>
                <span className="font-medium text-white">{displayPhone}</span>
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300">
                ⌂
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-sand-100/60">
                  Ubicación
                </span>
                <span className="font-medium text-white">
                  República Dominicana — entregas e instalación a coordinar
                </span>
              </span>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-500/20 text-brand-300">
                ⏱
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-sand-100/60">
                  Horario de atención
                </span>
                <span className="font-medium text-white">
                  Lunes a sábado, 9:00 am – 6:00 pm
                </span>
              </span>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-3xl bg-sand-50 p-7 text-wood-900 shadow-xl sm:p-8"
        >
          <h3 className="font-heading text-xl font-semibold">
            Solicita tu cotización
          </h3>

          <label className="flex flex-col gap-1.5 text-sm font-medium">
            Nombre
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Tu nombre"
              className="rounded-xl border border-brand-200 bg-white px-4 py-2.5 text-wood-900 outline-none focus:border-brand-500"
            />
          </label>

          <label className="flex flex-col gap-1.5 text-sm font-medium">
            Modelo de interés
            <select
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="rounded-xl border border-brand-200 bg-white px-4 py-2.5 text-wood-900 outline-none focus:border-brand-500"
            >
              <option>Consulta general</option>
              {products.map((p) => (
                <option key={p.slug} value={p.name}>
                  {p.name}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1.5 text-sm font-medium">
            Mensaje
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              placeholder="Cuéntanos sobre tu espacio, medidas o cantidad de luces que necesitas"
              className="resize-none rounded-xl border border-brand-200 bg-white px-4 py-2.5 text-wood-900 outline-none focus:border-brand-500"
            />
          </label>

          <button
            type="submit"
            className="mt-2 flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-700"
          >
            Enviar por WhatsApp
          </button>
          <p className="text-center text-xs text-wood-500">
            Al enviar, se abrirá WhatsApp ({displayPhone}) con tu mensaje
            listo para enviar.
          </p>
        </form>
      </div>
    </section>
  );
}
