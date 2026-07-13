# Iluminarias Bambú

Landing page de Iluminarias Bambú — lámparas artesanales de bambú hechas a
mano por Amauris Alcantara. Construida con Next.js, TypeScript y Tailwind CSS.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Cosas que debes revisar/editar antes de publicar

- **Precios**: en `src/data/products.ts`, cada producto tiene un campo
  `price` con un valor **estimado de referencia en RD$**. Ajusta cada uno a
  tu precio real.
- **Número de WhatsApp**: en `src/lib/whatsapp.ts`, la constante
  `WHATSAPP_NUMBER` (formato internacional sin `+` ni espacios, ej.
  `18098545458`).
- **Textos de "Sobre Nosotros" y contacto**: en `src/components/About.tsx` y
  `src/components/Contact.tsx` hay textos genéricos (historia, ubicación,
  horario) que puedes personalizar.
- **Productos e imágenes**: el catálogo completo vive en
  `src/data/products.ts`; las fotos están en `public/images/products/`.

## Estructura

- `src/app/page.tsx` — ensambla las secciones de la landing (Inicio, Sobre
  Nosotros, Productos, Contáctanos).
- `src/components/` — Navbar, Hero, About, Products, ProductCard, Contact,
  Footer, botón flotante de WhatsApp.
- `src/data/products.ts` — catálogo de lámparas (nombre, descripción,
  precio, categoría, imágenes).
- `src/lib/whatsapp.ts` — helpers para construir enlaces de WhatsApp con
  mensaje pre-armado.

## Despliegue en Vercel

1. Sube este proyecto a un repositorio de GitHub (o similar).
2. En [vercel.com/new](https://vercel.com/new), importa el repositorio.
3. Vercel detecta Next.js automáticamente — no requiere configuración
   adicional. Deploy.

También puedes desplegar directamente desde tu máquina con la
[Vercel CLI](https://vercel.com/docs/cli):

```bash
npm i -g vercel
vercel
```
