"use client";

import { buildGeneralMessage, buildWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={buildWhatsAppLink(buildGeneralMessage())}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 md:bottom-8 md:right-8"
    >
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-7 w-7"
        aria-hidden="true"
      >
        <path d="M16.004 3C9.377 3 4 8.373 4 15c0 2.386.7 4.61 1.912 6.48L4 29l7.72-1.87A11.9 11.9 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.75a9.7 9.7 0 0 1-4.95-1.36l-.355-.21-4.583 1.11 1.128-4.47-.232-.366A9.7 9.7 0 0 1 5.25 15c0-5.93 4.824-10.75 10.754-10.75S26.76 9.07 26.76 15s-4.824 9.75-10.756 9.75Zm5.61-7.31c-.307-.154-1.816-.897-2.098-1-.281-.103-.486-.154-.69.154-.205.307-.793 1-.973 1.205-.179.205-.358.23-.665.077-.307-.154-1.297-.478-2.47-1.523-.913-.814-1.53-1.82-1.709-2.128-.179-.307-.019-.473.135-.626.138-.138.307-.358.46-.538.154-.179.205-.307.307-.512.103-.205.051-.384-.026-.538-.077-.154-.69-1.664-.946-2.28-.249-.6-.503-.518-.69-.528l-.588-.01c-.205 0-.538.077-.82.384-.281.307-1.074 1.05-1.074 2.56s1.1 2.97 1.253 3.174c.154.205 2.164 3.303 5.243 4.632.733.316 1.304.505 1.75.647.735.234 1.404.2 1.933.121.59-.088 1.816-.742 2.072-1.46.256-.717.256-1.332.179-1.46-.077-.128-.281-.205-.588-.36Z" />
      </svg>
    </a>
  );
}
