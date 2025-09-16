import { Button } from "@/components/ui/button";
import antiqueCollection from "@/assets/antique-collection.jpg";

export const CTASection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground">
              Pronto para Descobrir Sua <span className="text-gradient">Próxima Relíquia</span>?
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Junte-se a centenas de colecionadores que já encontraram tesouros únicos em nosso acervo. 
              Cada peça tem uma história para contar e está esperando para fazer parte da sua.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-foreground">Acervo exclusivo e selecionado</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-foreground">Certificado de autenticidade</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-foreground">Entrega segura em todo Brasil</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="text-lg">
                Explorar Acervo Completo
              </Button>
              <Button variant="elegant" size="lg" className="text-lg">
                Falar com Especialista
              </Button>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-relic">
              <img 
                src={antiqueCollection} 
                alt="Coleção de antiguidades e relíquias exclusivas"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 hero-gradient rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-bronze/20 rounded-full"></div>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 hero-gradient rounded-full opacity-5 -translate-y-48 translate-x-48"></div>
    </section>
  );
};