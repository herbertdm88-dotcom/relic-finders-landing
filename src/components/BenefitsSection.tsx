import { Shield, Heart, Users, Truck } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Curadoria Especializada",
    description: "Cada peça é cuidadosamente selecionada por nossa equipe de especialistas, garantindo autenticidade e qualidade única."
  },
  {
    icon: Heart,
    title: "Histórias e Exclusividade",
    description: "Adquira itens únicos que carregam consigo séculos de história e arte, transformando seu ambiente com significado."
  },
  {
    icon: Users,
    title: "Comunidade de Apreciadores",
    description: "Faça parte de uma comunidade apaixonada por antiguidades, trocando experiências e descobertas históricas."
  },
  {
    icon: Truck,
    title: "Conveniência e Segurança",
    description: "Compre online com total segurança e receba suas relíquias em qualquer lugar do Brasil com embalagem especializada."
  }
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-foreground">
            Por que Escolher <span className="text-gradient">Pescadores de Relíquias</span>?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Somos especialistas em conectar colecionadores apaixonados com as mais belas peças históricas do mundo
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 card-gradient rounded-xl shadow-relic hover:shadow-gold transition-elegant"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gold/20 rounded-full flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-gold-dark" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};