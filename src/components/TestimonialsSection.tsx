import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula Freski",
    text: "Peças lindíssimas e de qualidade excepcional! O atendimento é impecável e cada item que recebi superou minhas expectativas.",
    rating: 5,
    location: "São Paulo, SP"
  },
  {
    name: "Lilian Fernandes",
    text: "Encontrei tesouros únicos que transformaram completamente minha decoração. A história por trás de cada peça é fascinante!",
    rating: 5,
    location: "Rio de Janeiro, RJ"
  },
  {
    name: "Amanda Bessa",
    text: "A experiência de compra é maravilhosa. Desde a escolha até a entrega, tudo é feito com muito cuidado e profissionalismo.",
    rating: 5,
    location: "Belo Horizonte, MG"
  }
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-foreground">
            O que Nossos <span className="text-gradient">Clientes Dizem</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A satisfação de nossos clientes é nosso maior tesouro. Veja o que eles têm a dizer sobre suas experiências
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-8 card-gradient rounded-xl shadow-relic hover:shadow-gold transition-elegant"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg text-foreground mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </blockquote>
              
              <div className="border-t border-bronze/30 pt-4">
                <p className="font-serif font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};