import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Services } from "@/components/home/services";
import { InternationalPresence } from "@/components/home/international-presence";
import { AntiquesGallery } from "@/components/home/antiques-gallery";
import { Contact } from "@/components/home/contact";
import { Footer } from "@/components/home/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Services />
      <InternationalPresence />
      <AntiquesGallery />
      <Contact />
      <Footer />
    </div>
  );
}
