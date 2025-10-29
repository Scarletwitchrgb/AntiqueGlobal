import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Download, X } from "lucide-react";
import baroqueMirror from "@assets/generated_images/Antique_baroque_mirror_bfe66958.png";
import marbleSculpture from "@assets/generated_images/Classical_marble_sculpture_d19d67e3.png";
import louisChairs from "@assets/generated_images/Antique_Louis_XVI_chairs_09452f81.png";
import grandfatherClock from "@assets/generated_images/Antique_grandfather_clock_1b6a3d69.png";
import oilPainting from "@assets/generated_images/Antique_oil_painting_7cdfec2a.png";
import porcelainSet from "@assets/generated_images/Antique_porcelain_tea_set_13b91836.png";
import writingDesk from "@assets/generated_images/Antique_writing_desk_5cf8e23d.png";
import chandelier from "@assets/generated_images/Antique_crystal_chandelier_fae29b60.png";
import persianRug from "@assets/generated_images/Antique_Persian_rug_8c9c5e15.png";
import frenchMantelClock from "@assets/photo_2025-10-29_04-05-15_1761728880376.jpg";
import lanciniEquestrianClock from "@assets/photo_2025-10-29_04-05-14_1761728880377.jpg";
import bronzeSculpture from "@assets/photo_2025-10-29_04-05-13_1761728880377.jpg";
import bronzeCollection from "@assets/photo_2025-10-29_04-05-12_1761728880377.jpg";
import grandShowroom from "@assets/photo_2025-10-29_04-05-10_1761728880378.jpg";

export function AntiquesGallery() {
  const [selectedAntique, setSelectedAntique] = useState<any>(null);
  const antiques = [
    { 
      image: frenchMantelClock, 
      title: "French Porcelain & Ormolu Clock Garniture", 
      category: "19th Century French",
      description: "Magnificent French mantel clock garniture set featuring hand-painted Sèvres-style porcelain urns with romantic pastoral scenes. The clock and urns showcase exceptional gilt bronze (ormolu) mounts with intricate detailing, representing the finest French decorative arts of the 1800s.",
      testId: "item-french-clock" 
    },
    { 
      image: lanciniEquestrianClock, 
      title: "Lancini Style Bronze Equestrian Clock", 
      category: "Italian Bronze",
      description: "Spectacular gilt bronze mantel clock in the Lancini tradition, featuring a dramatic equestrian warrior sculpture. The Rococo-style case features black enamel panels with gilt bronze mounts, exemplifying Italian craftsmanship in decorative bronzes. This type of elaborate figural clock is highly sought after by collectors.",
      testId: "item-lancini-clock" 
    },
    { 
      image: bronzeSculpture, 
      title: "French Neoclassical Bronze Candelabra", 
      category: "Fine Sculpture",
      description: "Exquisite patinated and gilt bronze figural sculpture featuring classical maidens with elaborate candelabra arms. The sculptural quality and finishing demonstrate the finest tradition of 19th-century French decorative arts, combining neoclassical aesthetics with functional elegance on a turned wood base.",
      testId: "item-bronze-candelabra" 
    },
    { 
      image: bronzeCollection, 
      title: "Museum Collection of Bronze Clocks", 
      category: "Decorative Arts",
      description: "An extraordinary assemblage of museum-quality bronze figural clocks and sculptures. This collection showcases patinated and gilt bronze works from the 19th century, featuring neoclassical and romantic period designs with exceptional detail, including figural pendulum clocks and decorative timepieces.",
      testId: "item-bronze-collection" 
    },
    { 
      image: grandShowroom, 
      title: "Monumental Malachite Vases & Palace Antiques", 
      category: "Museum Grade",
      description: "Breathtaking display of monumental Russian malachite vases with elaborate gilt bronze mounts, palatial carved marble fireplace featuring sculptural caryatids, museum-quality oil paintings, and bronze deer sculptures. This collection represents the absolute pinnacle of 19th-century European decorative arts, suitable for palaces, museums, and grand estates.",
      testId: "item-malachite-collection" 
    },
    { 
      image: baroqueMirror, 
      title: "Baroque Carved Gilt Mirror", 
      category: "Decorative Arts", 
      description: "Ornate hand-carved baroque mirror with elaborate gilt frame featuring scrollwork and floral motifs, exemplifying period craftsmanship.",
      testId: "item-baroque-mirror" 
    },
    { 
      image: marbleSculpture, 
      title: "Classical Marble Sculpture", 
      category: "Fine Art", 
      description: "Museum-quality classical marble sculpture showcasing exceptional artistry and timeless elegance.",
      testId: "item-sculpture" 
    },
    { 
      image: louisChairs, 
      title: "Louis XVI Salon Chairs", 
      category: "Period Furniture", 
      description: "Pair of authentic Louis XVI chairs with original upholstery and gilt detailing, representing French aristocratic taste.",
      testId: "item-chairs" 
    },
    { 
      image: grandfatherClock, 
      title: "Regency Longcase Clock", 
      category: "Timepieces", 
      description: "Magnificent mahogany grandfather clock with original works and impressive presence for distinguished interiors.",
      testId: "item-grandfather-clock" 
    },
    { 
      image: oilPainting, 
      title: "European Oil Painting", 
      category: "Fine Art", 
      description: "Period oil painting in original frame, showcasing the artistic traditions of European masters.",
      testId: "item-painting" 
    },
    { 
      image: porcelainSet, 
      title: "Antique Porcelain Tea Service", 
      category: "Decorative Arts", 
      description: "Complete hand-painted porcelain tea service with gilt accents, perfect for collectors of fine ceramics.",
      testId: "item-porcelain" 
    },
    { 
      image: writingDesk, 
      title: "Victorian Writing Desk", 
      category: "Period Furniture", 
      description: "Elegant Victorian writing desk with inlay work and original hardware, ideal for executive offices.",
      testId: "item-desk" 
    },
    { 
      image: chandelier, 
      title: "Crystal Chandelier", 
      category: "Lighting", 
      description: "Spectacular period chandelier with hand-cut crystals, bringing elegance and grandeur to any space.",
      testId: "item-chandelier" 
    },
    { 
      image: persianRug, 
      title: "Antique Persian Carpet", 
      category: "Textiles", 
      description: "Hand-knotted Persian rug with intricate patterns and rich colors, a testament to centuries-old weaving traditions.",
      testId: "item-rug" 
    }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-gallery-title">
            Featured Collection
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-gallery-subtitle">
            A curated selection of museum-quality antiques from our extensive inventory
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {antiques.map((item, index) => (
            <div 
              key={index}
              onClick={() => setSelectedAntique(item)}
              className="group rounded-lg overflow-hidden border bg-card hover-elevate transition-all cursor-pointer"
              data-testid={item.testId}
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted/20 relative">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold text-sm">
                    Click for Details
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-xs text-primary font-semibold mb-2 uppercase tracking-wider">
                  {item.category}
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <Dialog open={!!selectedAntique} onOpenChange={() => setSelectedAntique(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedAntique && (
              <>
                <DialogHeader>
                  <DialogTitle className="font-serif text-2xl md:text-3xl">
                    {selectedAntique.title}
                  </DialogTitle>
                  <DialogDescription className="text-primary font-semibold uppercase tracking-wider">
                    {selectedAntique.category}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-6 mt-4">
                  <div className="relative rounded-lg overflow-hidden bg-muted/20">
                    <img 
                      src={selectedAntique.image} 
                      alt={selectedAntique.title}
                      className="w-full h-auto object-contain max-h-[60vh]"
                    />
                  </div>
                  
                  {selectedAntique.description && (
                    <div>
                      <h4 className="font-semibold text-lg mb-3">Description</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedAntique.description}
                      </p>
                    </div>
                  )}
                  
                  <div className="flex gap-3 pt-4 border-t">
                    <Button 
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = selectedAntique.image;
                        link.download = `${selectedAntique.title.replace(/\s+/g, '_')}.jpg`;
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="flex-1"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Save Image
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => setSelectedAntique(null)}
                    >
                      Close
                    </Button>
                  </div>
                  
                  <p className="text-xs text-muted-foreground italic">
                    For inquiries about this piece, please contact us using the form below.
                  </p>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-gallery-note">
            Each piece carefully authenticated and documented. Contact us to inquire about availability or discuss your specific requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
