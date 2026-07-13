"use client";

import { useState } from "react";
import Image from "next/image";
import type { Product } from "@/data/products";
import { buildProductMessage, buildWhatsAppLink, formatPriceRD } from "@/lib/whatsapp";

export default function ProductCard({ product }: { product: Product }) {
  const [active, setActive] = useState(0);
  const hasMultiple = product.images.length > 1;

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-brand-100 bg-white shadow-sm transition-shadow hover:shadow-xl">
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-wood-900">
        <Image
          src={product.images[active].src}
          alt={product.images[active].alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-wood-900/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
          {product.tagline}
        </span>

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
        <p className="flex-1 text-sm text-wood-700">{product.description}</p>

        <div className="flex items-center justify-between pt-2">
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
