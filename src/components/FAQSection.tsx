import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "As peças são autênticas?",
    answer: "Sim, todas as nossas peças são cuidadosamente verificadas por especialistas em antiguidades. Cada item vem com certificado de autenticidade e história detalhada quando disponível."
  },
  {
    question: "Como funciona o envio e a entrega?",
    answer: "Utilizamos embalagem especializada para proteger suas relíquias durante o transporte. Oferecemos envio para todo o Brasil via transportadoras confiáveis, com rastreamento completo e seguro total."
  },
  {
    question: "Posso visitar a loja física?",
    answer: "Sim! Nossa loja física está localizada no Shopping Uptown, Loja 126 A - Bloco 11. Você pode visitar para ver nossas peças pessoalmente e receber consultoria especializada de nossa equipe."
  },
  {
    question: "Qual a política de troca e devolução?",
    answer: "Oferecemos garantia de satisfação de 7 dias. Se a peça não atender suas expectativas, você pode trocar ou devolver mediante algumas condições específicas para preservar a integridade dos itens históricos."
  },
  {
    question: "Vocês fazem avaliação de peças?",
    answer: "Sim, nossa equipe de especialistas oferece serviços de avaliação para colecionadores. Entre em contato conosco para agendar uma consulta e descobrir o valor histórico e monetário de suas peças."
  },
  {
    question: "Como posso saber mais sobre a história de uma peça?",
    answer: "Cada peça em nosso acervo vem com informações históricas detalhadas. Nossa equipe de curadores pesquisa a proveniência e contexto histórico de cada item para enriquecer sua experiência de colecionador."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-20 subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6 text-foreground">
            Perguntas <span className="text-gradient">Frequentes</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Esclarecemos suas dúvidas sobre nossos serviços, autenticidade e processos
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-gradient rounded-lg px-6 shadow-relic"
              >
                <AccordionTrigger className="text-left text-lg font-serif font-semibold text-foreground py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};