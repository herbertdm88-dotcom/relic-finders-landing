import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-relics.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-primary-foreground">
            Pescadores de Relíquias
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-serif mb-4 text-primary-foreground/90">
            Onde o Passado Encontra Seu Novo Lar
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/80">
            Descubra Tesouros Únicos e Peças com História para Enriquecer Seu Espaço e Sua Vida
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg">
              Descubra Sua Próxima Relíquia
            </Button>
            <Button variant="elegant" size="lg" className="text-lg">
              Explore Nosso Acervo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};