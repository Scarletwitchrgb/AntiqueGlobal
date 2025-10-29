import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Landmark, Store } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Building2,
      title: "Corporate Acquisitions",
      description: "Curating distinguished antique collections for executive offices, corporate headquarters, and luxury business environments. Each piece selected to reflect prestige and corporate heritage.",
      testId: "card-service-corporate"
    },
    {
      icon: Landmark,
      title: "Museum Partnerships",
      description: "Collaborating with museums worldwide to source, authenticate, and supply museum-quality antiques for permanent collections and special exhibitions. Expertise in provenance research and historical significance.",
      testId: "card-service-museum"
    },
    {
      icon: Store,
      title: "Retail Excellence",
      description: "Supplying premium antiques to upscale malls, galleries, and retail establishments. From statement pieces to curated collections that elevate commercial spaces and attract discerning clientele.",
      testId: "card-service-retail"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-services-title">
            Specialized Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-services-subtitle">
            Tailored antique solutions for museums, corporations, and prestigious retail establishments
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-elevate" data-testid={service.testId}>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl md:text-2xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
