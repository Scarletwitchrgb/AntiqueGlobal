import baroqueMirror from "@assets/generated_images/Antique_baroque_mirror_bfe66958.png";
import marbleSculpture from "@assets/generated_images/Classical_marble_sculpture_d19d67e3.png";
import louisChairs from "@assets/generated_images/Antique_Louis_XVI_chairs_09452f81.png";
import grandfatherClock from "@assets/generated_images/Antique_grandfather_clock_1b6a3d69.png";
import oilPainting from "@assets/generated_images/Antique_oil_painting_7cdfec2a.png";
import porcelainSet from "@assets/generated_images/Antique_porcelain_tea_set_13b91836.png";
import writingDesk from "@assets/generated_images/Antique_writing_desk_5cf8e23d.png";
import chandelier from "@assets/generated_images/Antique_crystal_chandelier_fae29b60.png";
import persianRug from "@assets/generated_images/Antique_Persian_rug_8c9c5e15.png";

export function AntiquesGallery() {
  const antiques = [
    { image: baroqueMirror, title: "Baroque Mirror", category: "Decorative Arts", testId: "item-baroque-mirror" },
    { image: marbleSculpture, title: "Classical Sculpture", category: "Fine Art", testId: "item-sculpture" },
    { image: louisChairs, title: "Louis XVI Chairs", category: "Period Furniture", testId: "item-chairs" },
    { image: grandfatherClock, title: "Grandfather Clock", category: "Timepieces", testId: "item-clock" },
    { image: oilPainting, title: "Oil Painting", category: "Fine Art", testId: "item-painting" },
    { image: porcelainSet, title: "Porcelain Tea Service", category: "Decorative Arts", testId: "item-porcelain" },
    { image: writingDesk, title: "Writing Desk", category: "Period Furniture", testId: "item-desk" },
    { image: chandelier, title: "Crystal Chandelier", category: "Lighting", testId: "item-chandelier" },
    { image: persianRug, title: "Persian Rug", category: "Textiles", testId: "item-rug" }
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
                <h3 className="font-serif text-xl font-bold text-foreground">
                  {item.title}
                </h3>
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
