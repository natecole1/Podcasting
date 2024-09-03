import BrowseSection from "@/src/components/ui/BrowseSection";
import CreateSection from "@/src/components/ui/CreateSection";
import CTASection from "@/src/components/ui/CTASection";
import DiscoverSection from "@/src/components/ui/DiscoverSection";
import Footer from "@/src/components/ui/Footer";
import Hero from "@/src/components/ui/Hero";
import Navbar from "@/src/components/ui/Navbar";

const Home = () => {
  return (
    <>
      <div className="bg-nav_hero_bg_image bg-no-repeat bg-cover bg-fixed bg-center">
        <Navbar />
        <Hero />
      </div>
      <CreateSection />
      <DiscoverSection />
      <BrowseSection />
      <CTASection />
      <Footer />
    </>
  );
};

export default Home;
