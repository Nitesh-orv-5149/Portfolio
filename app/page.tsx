import AboutMe from "@/components/ui/AboutMe";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/ui/HeroSection";
import Navbar from "@/components/ui/Navbar";
import Skills from "@/components/ui/Skills";
import Works from "@/components/ui/Works";

export default function Home() {
  return (
    <>
    <main className="flex flex-col gap-20 justify-start items-center bg-gradient-to-br from-cyan-400/20 to-cyan-800/30">
      <div className="mt-6 fixed">
        <Navbar/>
      </div>
      <HeroSection/>
      <AboutMe/>
      <Skills/>
      <Works/>
      <Footer/>
    </main>
    </>
  );
}
