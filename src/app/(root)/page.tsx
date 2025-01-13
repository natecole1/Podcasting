import BrowseSection from "@/src/components/ui/BrowseSection";
import CreateSection from "@/src/components/ui/CreateSection";
import CTASection from "@/src/components/ui/CTASection";
import DiscoverSection from "@/src/components/ui/DiscoverSection";
import Footer from "@/src/components/ui/Footer";
import Hero from "@/src/components/ui/Hero";
import Navbar from "@/src/components/ui/Navbar";
import VideoBackground from "@/src/components/ui/VideoBackground";




const Home = () => {
  return (
    <>
      <div className="relative">
        <VideoBackground />
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
