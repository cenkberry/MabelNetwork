import "./defiImage.scss";
import DefiPhoto from "@assets/app/defi/defi.webp";

export default function DefiImage() {
    return (
      <div className="defiImage">
        <img src={DefiPhoto.src} alt="defi image" />
      </div>
    );
}