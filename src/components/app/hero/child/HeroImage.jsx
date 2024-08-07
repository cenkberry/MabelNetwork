import "./heroImage.scss";
import HeroPhoto from "@assets/app/hero/hero.webp";
import BtcIcon from "@assets/app/hero/btc.svg";
import MblIcon from "@assets/app/hero/mbl.webp";
import EthIcon from "@assets/app/hero/eth.svg";
import BnbIcon from "@assets/app/hero/bnb.svg";

export default function HeroImage() {
  return (
    <div className="hero-image">
      <BtcIcon className="hero-image-icons btc" />
      <img className="hero-image-icons mbl" src={MblIcon.src} alt="Mabel icon" />
      <EthIcon className="hero-image-icons eth" />
      <BnbIcon className="hero-image-icons bnb" />
      <img src={HeroPhoto.src} alt="hero image" />
    </div>
  );
}