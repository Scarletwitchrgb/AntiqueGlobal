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
import victorianDesk from "@assets/generated_images/Victorian_secretary_desk_antique_f4f58ab2.png";
import frenchCandelabra from "@assets/generated_images/French_gilt_bronze_candelabra_b2e6e136.png";
import chineseVase from "@assets/generated_images/Chinese_porcelain_vase_antique_53bdba87.png";
import silverTeaService from "@assets/generated_images/Georgian_silver_tea_service_75b7fade.png";
import ivoryReligious from "@assets/generated_images/Italian_carved_ivory_sculpture_584a9bbf.png";
import imariCharger from "@assets/generated_images/Japanese_Imari_porcelain_charger_9457fa78.png";
import meissenFigurines from "@assets/generated_images/Meissen_porcelain_figurines_collection_048d41f4.png";
import tiffanyLamp from "@assets/generated_images/Tiffany-style_stained_glass_lamp_beb5f491.png";
import baroqueGiltMirror from "@assets/generated_images/Baroque_carved_gilt_mirror_fafbf88f.png";
import pocketWatches from "@assets/generated_images/Antique_pocket_watch_collection_10862d6d.png";
import baccaratChandelier from "@assets/generated_images/Baccarat_crystal_chandelier_antique_562b9d0b.png";
import cloisonneVases from "@assets/generated_images/Chinese_cloisonné_vases_pair_ea37b0a8.png";

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
    },
    { 
      image: victorianDesk, 
      title: "Victorian Secretary Desk", 
      category: "Period Furniture", 
      description: "Exquisite Victorian mahogany secretary desk with brass handles, intricate inlay work, and leather writing surface. Features multiple drawers and compartments with original hardware. This museum-quality piece exemplifies 19th-century English craftsmanship and is perfect for executive offices or private libraries.",
      testId: "item-victorian-desk" 
    },
    { 
      image: frenchCandelabra, 
      title: "French Gilt Bronze Candelabra Pair", 
      category: "Decorative Arts", 
      description: "Magnificent pair of French Rococo-style gilt bronze candelabras with elaborate scrollwork and floral motifs. These museum-quality pieces feature multiple candle holders and exceptional patina, representing the finest tradition of French bronze casting from the 18th century.",
      testId: "item-french-candelabra" 
    },
    { 
      image: chineseVase, 
      title: "Chinese Blue and White Porcelain Vase", 
      category: "Asian Collectibles", 
      description: "Magnificent Chinese porcelain vase with intricate hand-painted cobalt blue floral designs. Qing Dynasty style with museum-grade quality, featuring traditional patterns and exceptional craftsmanship. A prized piece for serious collectors of Asian antiques.",
      testId: "item-chinese-vase" 
    },
    { 
      image: silverTeaService, 
      title: "Georgian Sterling Silver Tea Service", 
      category: "Silver Collectibles", 
      description: "Complete Georgian sterling silver tea service including teapot, sugar bowl, and creamer with elaborate engravings and hallmarks. This museum-quality set showcases exceptional English silversmith craftsmanship from the 18th century with ornate detailing and authenticated hallmarks.",
      testId: "item-silver-service" 
    },
    { 
      image: ivoryReligious, 
      title: "Italian Carved Ivory Religious Sculpture", 
      category: "Fine Art", 
      description: "Rare Italian carved ivory sculpture of Madonna and Child, displaying extraordinary detail and craftsmanship. This museum-grade devotional piece features aged patina and is presented on a wooden stand. A significant example of European religious art from the Renaissance period.",
      testId: "item-ivory-sculpture" 
    },
    { 
      image: imariCharger, 
      title: "Japanese Imari Porcelain Charger", 
      category: "Asian Collectibles", 
      description: "Large decorative Japanese Imari porcelain charger plate with vibrant colors and gold leaf accents. Features traditional phoenix and floral patterns characteristic of 19th-century Imari ware. This museum-quality piece is highly sought after by collectors of Japanese decorative arts.",
      testId: "item-imari-charger" 
    },
    { 
      image: meissenFigurines, 
      title: "Meissen Porcelain Figurine Collection", 
      category: "Collectibles", 
      description: "Exceptional collection of hand-painted Meissen porcelain figurines in elaborate 18th-century period costumes. These museum-quality German porcelain sculptures showcase the finest European ceramic artistry with intricate detailing and vibrant hand-painted decorations.",
      testId: "item-meissen-figurines" 
    },
    { 
      image: tiffanyLamp, 
      title: "Tiffany-Style Stained Glass Lamp", 
      category: "Art Nouveau", 
      description: "Stunning Art Nouveau stained glass lamp with intricate dragonfly pattern in colorful glass. Features a bronze base with original patina. This museum-quality piece exemplifies the finest American decorative arts from the early 20th century.",
      testId: "item-tiffany-lamp" 
    },
    { 
      image: baroqueGiltMirror, 
      title: "Ornate Baroque Gilt Mirror", 
      category: "Decorative Arts", 
      description: "Spectacular hand-carved Baroque mirror with ornate gilt wood frame featuring cherubs, scrollwork, and elaborate floral motifs. The aged gold leaf finish and museum-quality craftsmanship make this a centerpiece worthy of the finest estates.",
      testId: "item-baroque-gilt-mirror" 
    },
    { 
      image: pocketWatches, 
      title: "Antique Pocket Watch Collection", 
      category: "Horology", 
      description: "Museum-grade collection of antique gold pocket watches with ornate engravings and exposed mechanical movements. These exceptional timepieces showcase the finest Swiss and English watchmaking from the 18th and 19th centuries, perfect for serious horological collectors.",
      testId: "item-pocket-watches" 
    },
    { 
      image: baccaratChandelier, 
      title: "Baccarat Crystal Chandelier", 
      category: "Lighting", 
      description: "Magnificent French Baccarat crystal chandelier with multiple tiers of hand-cut crystal prisms and drops. The gilt bronze frame and exceptional sparkle represent the pinnacle of 19th-century French decorative lighting. A museum-quality piece suitable for grand estates.",
      testId: "item-baccarat-chandelier" 
    },
    { 
      image: cloisonneVases, 
      title: "Chinese Cloisonné Vases Pair", 
      category: "Asian Collectibles", 
      description: "Spectacular pair of Chinese cloisonné vases with intricate enamel work featuring dragon and floral motifs in vibrant colors. Ming Dynasty style with exceptional craftsmanship on bronze. These museum-quality pieces represent the finest tradition of Chinese decorative metalwork.",
      testId: "item-cloisonne-vases" 
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
