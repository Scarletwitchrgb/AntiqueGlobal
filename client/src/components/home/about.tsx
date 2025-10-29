import { Card } from "@/components/ui/card";
import { Globe, Award, Users } from "lucide-react";
import profileImage from "@assets/photo_2025-10-29_04-05-23_1761728832408.jpg";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6" data-testid="text-about-title">
              Meet Michelle Tianna
            </h2>
            
            <p className="text-base md:text-lg text-foreground leading-relaxed mb-6" data-testid="text-about-intro">
              With over two decades of expertise in the international antiques market, I specialize in sourcing, authenticating, and supplying exceptional antique pieces to discerning clients worldwide. My passion for preserving history through fine antiques has led to successful partnerships with renowned museums, prestigious corporations, and exclusive retail establishments.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4" data-testid="text-about-description">
              Based in Redbank Plains, Queensland, Australia, I have built a reputation for integrity, expertise, and exceptional service across 10 countries on 4 continents. Each piece I handle tells a story, and I take pride in connecting these treasures with those who will cherish them for generations to come.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4">
              My career highlights include sourcing museum-grade pieces for <span className="font-semibold text-foreground">The Metropolitan Museum of Art</span> in New York, providing period furniture for Fortune 500 corporate headquarters, and establishing long-term partnerships with luxury hotels in Dubai and Europe. I have also worked extensively with <span className="font-semibold text-foreground">Christie's</span> and <span className="font-semibold text-foreground">Sotheby's</span> specialists to authenticate and value significant acquisitions.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Since establishing Michelle Tianna Antiques in 2004, I have personally handled over 2,000 pieces ranging from 18th-century French ormolu to Italian Renaissance bronzes. My expertise in authentication, coupled with an extensive network of auction houses, private collectors, and estate sales across Europe and North America, ensures my clients receive genuine, documented pieces with verifiable provenance. Whether you're a museum curator, corporate art consultant, or private collector, I provide white-glove service from initial consultation through secure international delivery.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <Card className="p-6 text-center hover-elevate" data-testid="card-stat-countries">
                <Globe className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="font-serif text-2xl font-bold text-foreground mb-1">10</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </Card>
              
              <Card className="p-6 text-center hover-elevate" data-testid="card-stat-partnerships">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="font-serif text-2xl font-bold text-foreground mb-1">100+</div>
                <div className="text-sm text-muted-foreground">Client Partnerships</div>
              </Card>
              
              <Card className="p-6 text-center hover-elevate" data-testid="card-stat-excellence">
                <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="font-serif text-2xl font-bold text-foreground mb-1">20+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
            </div>
            
            <div className="space-y-2" data-testid="section-credentials">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Established:</span> 2004
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Location:</span> Redbank Plains, Queensland, Australia
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Specialization:</span> Museum-Quality Antiques, Period Furniture, Decorative Arts, Malls, Collectibles
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Notable Clients:</span> The Metropolitan Museum of Art (NYC), Fortune 500 Corporations, Luxury Hotels
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Professional Network:</span> Christie's, Sotheby's, Major European Auction Houses
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img 
                  src={profileImage} 
                  alt="Michelle Tianna - Professional Portrait" 
                  className="w-full h-full object-cover"
                  data-testid="img-profile"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg max-w-[280px]" data-testid="card-profile-badge">
                <p className="font-serif text-xl font-bold mb-1">Michelle Tianna</p>
                <p className="text-sm text-primary-foreground/90">Founder & Principal Dealer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
