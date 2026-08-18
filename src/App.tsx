import { CursorGlow } from "./components/ui/CursorGlow";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { About } from "./components/sections/About";
import { Testimonials } from "./components/sections/Testimonials";
import { Faq } from "./components/sections/Faq";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-aura-bg">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
