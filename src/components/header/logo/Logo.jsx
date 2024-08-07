import Link from "next/link";
import LogoImage from "@assets/header/logo.png";
import LogoMobileImage from "@assets/header/logo-mobile.png";

export default function Logo() {
  return (
    <Link href="/">
      <div className="db lap-dn">
        <img src={LogoMobileImage.src} alt="mobile logo" />
      </div>
      <div className="dn lap-db">
        <img src={LogoImage.src} alt="desktop logo" />
      </div>
    </Link>
  );
}
