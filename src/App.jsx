import { useState } from "react";
import useLenisScroll from "./hooks/useLenisScroll";
import LoadingScreen from "./components/ui/LoadingScreen";
import Navbar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Services from "./components/sections/Services";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import CredentialsSection from "./components/sections/CredentialsSection";
import Achievements from "./components/sections/Achievements";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useLenisScroll();

  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-amber focus:text-void focus:px-4 focus:py-2 focus:rounded-full focus:font-mono focus:text-xs focus:uppercase"
      >
        Skip to content
      </a>

      <LoadingScreen onComplete={() => setLoaded(true)} />

      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.6s ease",
        }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Services />
          <Experience />
          <Projects />
          <CredentialsSection />
          <Achievements />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
