import Image from "next/image";

const values = [
  {
    title: "Materiales naturales",
    text: "Bambú, cuerda de yute y maderas nobles seleccionadas a mano para cada pieza.",
  },
  {
    title: "Hecho a mano",
    text: "Cada lámpara se corta, lija, tiñe y ensambla artesanalmente, con atención al detalle.",
  },
  {
    title: "Diseño a medida",
    text: "Adaptamos tamaños, cantidad de luces y acabados según el espacio de cada cliente.",
  },
];

export default function About() {
  return (
    <section id="nosotros" className="bg-sand-100 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div className="order-2 flex flex-col gap-6 lg:order-1">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-600">
            Sobre nosotros
          </span>
          <h2 className="font-heading text-3xl font-semibold text-wood-900 sm:text-4xl">
            La pasión de Amauris Alcantara por el bambú
          </h2>
          <p className="text-wood-700">
            Iluminarias Bambú nació de la idea de transformar un material
            noble y sostenible en piezas de iluminación con carácter propio.
            Amauris Alcantara, fundador del emprendimiento, combina técnicas
            artesanales con un ojo moderno para el diseño, creando lámparas
            que le dan calidez a terrazas, gazebos, comedores y espacios
            comerciales en toda la República Dominicana.
          </p>
          <p className="text-wood-700">
            Cada lámpara se elabora de forma individual: se selecciona la
            caña de bambú, se cura, se tiñe y se ensambla con cuerda de
            cáñamo o yute tejida a mano, hasta lograr una pieza resistente,
            cálida y completamente única. No hay dos lámparas exactamente
            iguales, y eso es parte de su encanto.
          </p>

          <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-brand-200/70 bg-white/70 p-5"
              >
                <p className="font-heading text-lg font-semibold text-brand-700">
                  {value.title}
                </p>
                <p className="mt-1 text-sm text-wood-700">{value.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 grid grid-cols-2 gap-4 lg:order-2">
          <div className="relative col-span-2 aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/images/products/riel-gazebo-9luces-1.jpeg"
              alt="Instalación artesanal de riel de bambú en gazebo de madera"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/products/aplique-pared-1.jpeg"
              alt="Detalle de aplique de pared de bambú con borla de yute"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 20vw, 45vw"
            />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/products/farol-persiana-1.jpeg"
              alt="Detalle de farol colgante de listones de bambú"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 20vw, 45vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
