import { Instagram, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-bold">
              Pescadores de Relíquias
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Conectando apaixonados por história com tesouros únicos e autênticos desde sempre.
            </p>
          </div>
          
          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4" />
                <span className="text-primary-foreground/80">21 95950-6755</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4" />
                <span className="text-primary-foreground/80">contato@pescadoresdereliquias.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4" />
                <span className="text-primary-foreground/80">Shopping Uptown, Loja 126 A - Bloco 11</span>
              </div>
            </div>
          </div>
          
          
          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-lg font-serif font-semibold">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/pescadoresdereliquias/" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Siga-nos para descobrir novas peças e histórias fascinantes
            </p>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Pescadores de Relíquias. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};