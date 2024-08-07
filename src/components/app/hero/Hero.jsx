import HeroContent from "./child/HeroContent";
import HeroImage from "./child/HeroImage";

export default function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row aic pt-58">
          <div className="box-lap-6 box-desk-6 order-2 order-desk-1">
            <HeroContent />
          </div>
          <div className="box-lap-6 box-desk-6 order-1 order-desk-2">
            <HeroImage />
          </div>
        </div>
      </div>
    </div>
  );
}
