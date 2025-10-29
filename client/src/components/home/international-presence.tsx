import { Badge } from "@/components/ui/badge";
import { MapPin, Globe2 } from "lucide-react";

export function InternationalPresence() {
  const countries = [
    { name: "Dubai", description: "Luxury antiques for high-end developments" },
    { name: "United States", description: "Museum partnerships and corporate collections" },
    { name: "Italy", description: "European heritage pieces and Renaissance art" },
    { name: "Germany", description: "Fine furniture and decorative arts" },
    { name: "France", description: "French period antiques and objets d'art" },
    { name: "Canada", description: "Gallery and retail partnerships" }
  ];

  return (
    <section id="international" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-international-title">
            International Presence
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-international-subtitle">
            Trusted partnerships across six countries, connecting exceptional antiques with distinguished clients worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {countries.map((country, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-lg border bg-card hover-elevate transition-all"
              data-testid={`card-country-${country.name.toLowerCase().replace(' ', '-')}`}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Globe2 className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                    {country.name}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    <MapPin className="h-3 w-3 mr-1" />
                    Active Market
                  </Badge>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {country.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground italic" data-testid="text-international-note">
            Serving clients across multiple continents with dedication to authenticity and excellence
          </p>
        </div>
      </div>
    </section>
  );
}
