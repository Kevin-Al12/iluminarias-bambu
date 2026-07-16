"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Product } from "@/data/products";
import { buildProductMessage, buildWhatsAppLink, formatPriceRD } from "@/lib/whatsapp";

export default function ProductCard({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const hasMultiple = product.images.length > 1;
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    const count = product.images.length;
    setActive(((index % count) + count) % count);
  };

  useEffect(() => {
    if (!isHovering || !hasMultiple) return;

    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % product.images.length);
    }, 1600);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovering, hasMultiple, product.images.length]);

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm transition-shadow hover:shadow-xl">
      <div
        className="relative aspect-[4/3] w-full overflow-hidden bg-wood-900"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {product.images.map((img, i) => (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            fill
            priority={i === 0}
            className={`object-cover transition-opacity duration-700 ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          />
        ))}
        <span className="absolute left-3 top-3 z-10 rounded-full bg-wood-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {product.tagline}
        </span>

        {hasMultiple && (
          <>
            <button
              type="button"
              aria-label={`Foto anterior de ${product.name}`}
              onClick={() => goTo(active - 1)}
              className="absolute left-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-wood-900/60 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-wood-900/80"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              aria-label={`Foto siguiente de ${product.name}`}
              onClick={() => goTo(active + 1)}
              className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-wood-900/60 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100 hover:bg-wood-900/80"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {hasMultiple && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {product.images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                aria-label={`Ver foto ${i + 1} de ${product.name}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  i === active ? "w-5 bg-white" : "w-2 bg-white/50"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="font-heading text-xl font-semibold text-wood-900">
          {product.name}
        </h3>
        <p className="text-sm text-wood-700">{product.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {product.environments.map((env) => (
            <span
              key={env}
              className="rounded-full bg-sand-200 px-2.5 py-1 text-xs font-medium text-wood-700"
            >
              {env}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <span className="font-heading text-lg font-semibold text-brand-700">
            {formatPriceRD(product.price)}
          </span>
        </div>

        <a
          href={buildWhatsAppLink(buildProductMessage(product.name, product.price))}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 flex items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
        >
          Comprar por WhatsApp
        </a>
      </div>
    </div>
  );
}
