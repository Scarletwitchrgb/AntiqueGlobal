import frenchMantelClock from "@assets/photo_2025-10-29_04-05-15_1761728880376.jpg";
import equestrianClock from "@assets/photo_2025-10-29_04-05-14_1761728880377.jpg";
import bronzeSculpture from "@assets/photo_2025-10-29_04-05-13_1761728880377.jpg";
import bronzeCollection from "@assets/photo_2025-10-29_04-05-12_1761728880377.jpg";
import grandShowroom from "@assets/photo_2025-10-29_04-05-10_1761728880378.jpg";

export function AntiquesGallery() {
  const antiques = [
    { 
      image: frenchMantelClock, 
      title: "French Mantel Clock Set", 
      category: "19th Century Timepiece",
      description: "Exquisite gilt bronze French mantel clock garniture featuring hand-painted Sèvres-style porcelain urns with romantic scenes. A masterpiece of French horology from the 1800s, showcasing exceptional craftsmanship in ormolu mounting and decorative artistry.",
      testId: "item-french-clock" 
    },
    { 
      image: equestrianClock, 
      title: "Equestrian Bronze Clock", 
      category: "Period Timepiece",
      description: "Magnificent gilt bronze mantel clock featuring an equestrian warrior sculpture in dynamic pose. This piece exemplifies 19th-century French decorative arts with its intricate Rococo-style case work, black enamel panels, and museum-quality bronze casting.",
      testId: "item-equestrian-clock" 
    },
    { 
      image: bronzeSculpture, 
      title: "Bronze Figural Candelabra", 
      category: "Fine Sculpture",
      description: "Stunning patinated bronze figural sculpture featuring classical maidens holding ornate candelabras. This piece represents the finest tradition of 19th-century French decorative arts, combining neoclassical aesthetics with functional elegance.",
      testId: "item-bronze-sculpture" 
    },
    { 
      image: bronzeCollection, 
      title: "Museum-Grade Bronze Collection", 
      category: "Decorative Arts",
      description: "An impressive assemblage of museum-quality bronze figural clocks and sculptures. This collection includes patinated and gilt bronze works from the 19th century, featuring neoclassical and romantic period designs with exceptional detail and craftsmanship.",
      testId: "item-bronze-collection" 
    },
    { 
      image: grandShowroom, 
      title: "Malachite Vases & Grand Antiques", 
      category: "Estate Collection",
      description: "Breathtaking display of monumental malachite vases with gilt bronze mounts, palatial marble fireplace with sculptural caryatids, and museum-caliber paintings. This collection represents the pinnacle of 19th-century European decorative arts suitable for prestigious institutions and grand estates.",
      testId: "item-grand-collection" 
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
              className="group rounded-lg overflow-hidden border bg-card hover-elevate transition-all"
              data-testid={item.testId}
            >
              <div className="aspect-[4/3] overflow-hidden bg-muted/20">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="text-xs text-primary font-semibold mb-2 uppercase tracking-wider">
                  {item.category}
                </div>
                <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-gallery-note">
            Each piece carefully authenticated and documented. Contact us to inquire about availability or discuss your specific requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
