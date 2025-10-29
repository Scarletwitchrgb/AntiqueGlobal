import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@assets/generated_images/Luxury_antiques_showroom_hero_05b0c65e.png";
import logoImage from "@assets/generated_images/Michelle_Tianna_Antiques_logo_cca51a93.png";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="mb-8">
          <img 
            src={logoImage} 
            alt="Michelle Tianna Antiques" 
            className="h-24 w-24 md:h-32 md:w-32 mx-auto rounded-lg"
            data-testid="img-logo"
          />
        </div>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight" data-testid="text-hero-title">
          Michelle Tianna Antiques
        </h1>
        
        <p className="font-serif text-xl md:text-2xl lg:text-3xl text-white/90 mb-4 italic max-w-3xl" data-testid="text-motto">
          Where Heritage Meets Excellence
        </p>
        
        <p className="text-base md:text-lg text-white/80 mb-12 max-w-2xl leading-relaxed" data-testid="text-hero-subtitle">
          Premier multinational antiques dealer serving museums, corporations, and prestigious retail establishments worldwide
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button 
            size="lg"
            variant="outline"
            onClick={() => scrollToSection('gallery')}
            className="backdrop-blur-sm bg-white/20 border-white/40 text-white hover:bg-white/30 min-w-[180px]"
            data-testid="button-view-collection"
          >
            View Collection
          </Button>
          <Button 
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-primary text-primary-foreground border-primary-border min-w-[180px]"
            data-testid="button-contact"
          >
            Contact Us
          </Button>
        </div>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="absolute bottom-12 animate-bounce"
          aria-label="Scroll to next section"
          data-testid="button-scroll-down"
        >
          <ChevronDown className="h-8 w-8 text-white/70" />
        </button>
      </div>
    </section>
  );
}
