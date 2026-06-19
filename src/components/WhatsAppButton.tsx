import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/573003714694"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-white text-tierra text-sm font-medium rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
        Escríbenos
        <span className="absolute left-full top-1/2 -translate-y-1/2 -ml-1 w-2 h-2 bg-white rotate-45" />
      </span>

      {/* Button */}
      <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg animate-float hover:scale-110 transition-transform duration-300">
        <MessageCircle className="w-7 h-7 text-white fill-white" />
      </div>
    </a>
  );
}
