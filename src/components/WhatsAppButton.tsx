import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const groupUrl = "https://chat.whatsapp.com/IkTJ4tvdOsFFOff84Mcf42";
    window.open(groupUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-4 shadow-lg hover:shadow-xl transition-all duration-300 group animate-pulse hover:animate-none flex items-center gap-3"
      aria-label="Fale Conosco no WhatsApp"
    >
      <MessageCircle size={24} className="group-hover:scale-110 transition-transform duration-300" />
      <span className="font-medium text-sm">Fale Conosco</span>
    </button>
  );
};