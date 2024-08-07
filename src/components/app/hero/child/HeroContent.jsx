import "./heroContent.scss";
import HeroArrow from "@assets/app/hero/hero-arrow.png";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HeroContent() {
  const t = useTranslations("hero");

  return (
    <div className="hero-content">
      <div className="hero-content-arrow">
        <img src={HeroArrow.src} alt="hero content arrow" />
      </div>
      <div className="hero-content-title">{t("title")}</div>
      <div className="hero-content-subtitle">{t("subtitle")}</div>
      <Link className="btn" href="#roadmap">{t("button")}</Link>
    </div>
  );
}
