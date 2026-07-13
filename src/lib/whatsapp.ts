export const WHATSAPP_NUMBER = "18098545458";

export function formatPriceRD(price: number): string {
  return `RD$ ${price.toLocaleString("es-DO")}`;
}

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildProductMessage(productName: string, price: number): string {
  return `Hola Amauris, vi la lámpara "${productName}" (${formatPriceRD(
    price
  )}) en la página de Iluminarias Bambú y me interesa. ¿Me puedes dar más información?`;
}

export function buildGeneralMessage(): string {
  return "Hola Amauris, me gustaría más información sobre las lámparas de Iluminarias Bambú.";
}
