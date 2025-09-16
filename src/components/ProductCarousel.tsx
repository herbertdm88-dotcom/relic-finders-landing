import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import product1 from "@/assets/product-1.png";
import product2 from "@/assets/product-2.png";
import product3 from "@/assets/product-3.png";
import product4 from "@/assets/product-4.png";

const products = [
  {
    id: 1,
    image: product1,
    title: "Árvore Natalina Mágica",
    price: "R$ 55,00",
    description: "Árvore natalina mágica de resina. Ela abre e a magia acontece.",
    code: "g2251"
  },
  {
    id: 2,
    image: product2,
    title: "Petisqueiras Natalinas",
    price: "R$ 35,00",
    description: "Antigas petisqueiras natalinas com belo craquelado do tempo, acompanham as bulinhas.",
    code: "g2257"
  },
  {
    id: 3,
    image: product3,
    title: "Feira de Antiguidades",
    price: "",
    description: "Fim da feira, amigos! Muito obrigado pela participação de todos vocês.",
    code: ""
  },
  {
    id: 4,
    image: product4,
    title: "Porta Guardanapos de Porcelana",
    price: "R$ 5,00",
    description: "Antigos porta guardanapos de porcelana. 23 disponíveis.",
    code: "g1371"
  }
];

export const ProductCarousel = () => {
  return (
    <section className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-foreground">
            Nossos Tesouros em Destaque
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubra algumas das peças únicas que fazem parte do nosso acervo especial
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {products.map((product) => (
              <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif font-semibold text-lg mb-2 text-foreground">
                        {product.title}
                      </h3>
                      {product.price && (
                        <p className="text-xl font-bold text-gold mb-2">
                          {product.price}
                        </p>
                      )}
                      <p className="text-muted-foreground text-sm mb-3">
                        {product.description}
                      </p>
                      {product.code && (
                        <p className="text-xs text-muted-foreground">
                          Código: {product.code}
                        </p>
                      )}
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};