import { useEffect, useState } from "react";
import "./App.css";
import AnimatedCursor from "react-animated-cursor";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Qualification from "./components/qualification/Qualification";
import Work from "./components/work/Work";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  useEffect(() => {
    // You can use a class on the body or another top-level element
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="000, 000, 000"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        showSystemCursor={true}
      />
      <Header setIsDarkMode={setIsDarkMode} />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
