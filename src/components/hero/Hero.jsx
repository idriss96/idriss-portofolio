import "./hero.scss";
import HeroContent from "./heroContent/HeroContent";

const Hero = () => {
  return (
    <div className="hero">
      {/* <video autoPlay muted loop className="hero-background">
        <source src="/blackhole.webm" type="video/webm" />
      </video> */}
      <HeroContent />
    </div>
  );
};

export default Hero;
