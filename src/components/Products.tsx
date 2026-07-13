"use client";

import { useMemo, useState } from "react";
import { categoryLabels, products, type ProductCategory } from "@/data/products";
import ProductCard from "./ProductCard";

const filters: { key: ProductCategory | "todas"; label: string }[] = [
  { key: "todas", label: "Todas" },
  { key: "colgantes", label: categoryLabels.colgantes },
  { key: "rieles", label: categoryLabels.rieles },
  { key: "apliques", label: categoryLabels.apliques },
];

export default function Products() {
  const [filter, setFilter] = useState<ProductCategory | "todas">("todas");

  const filtered = useMemo(
    () =>
      filter === "todas" ? products : products.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="productos" className="bg-sand-50 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Catálogo
          </span>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-wood-900 sm:text-4xl">
            Nuestras lámparas artesanales
          </h2>
          <p className="mt-3 text-wood-700">
            Cada modelo está disponible con bombillos incluidos. Escríbenos
            por WhatsApp indicando el modelo que te interesa y coordinamos
            cantidad, tamaño y entrega.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              className={`rounded-full border px-5 py-2 text-sm font-medium transition-colors ${
                filter === f.key
                  ? "border-brand-600 bg-brand-600 text-white"
                  : "border-brand-200 bg-white text-wood-700 hover:border-brand-400"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
