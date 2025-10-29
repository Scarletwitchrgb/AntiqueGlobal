import { Mail, Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-xl font-bold text-foreground mb-4" data-testid="text-footer-brand">
              Michelle Tianna Antiques
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Premier multinational antiques dealer serving museums, corporations, and prestigious establishments worldwide.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Where Heritage Meets Excellence
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-about"
                >
                  About Michelle
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-services"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('gallery')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-gallery"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  data-testid="link-footer-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:michellescarlet455@gmail.com" className="hover:text-primary transition-colors">
                  michellescarlet455@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:0434654261" className="hover:text-primary transition-colors">
                  0434 654 261
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <SiWhatsapp className="h-4 w-4 text-primary" />
                <a href="https://wa.me/61489925104" className="hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  0489 925 104
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground" data-testid="text-copyright">
              © 2004 Michelle Tianna Antiques. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Redbank Plains, Queensland, Australia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
