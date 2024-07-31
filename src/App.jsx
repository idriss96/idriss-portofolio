import Test from "./Test";
import "./app.scss";
import StarsCanvas from "./components/starBackground/StarBackground";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div>
      {/* <Cursor /> */}
      <StarsCanvas />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills">
        <Parallax type="Skills" />
      </section>
      <section>
        <Skills />
      </section>
      {/* <section id="Portfolio">
        <Parallax type="portfolio" />
      </section> */}
      {/* <Portfolio /> */}
      <section id="Contact">
        <Parallax type="Contact" />
      </section>
      <section>
        <Contact />
      </section>

      {/* <Test/>
    <Test/> */}
    </div>
  );
};

export default App;
