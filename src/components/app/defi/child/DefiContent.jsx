import "./defiContent.scss";
import { useTranslations } from "next-intl";
import CubeIcon from "@assets/app/defi/cube.svg";
import StarIcon from "@assets/app/defi/star.svg";
import CubeSideIcon from "@assets/app/defi/cubeside.svg";

export default function DefiContent() {
  const t = useTranslations("defi");

  return (
    <div className="defiContent">
      <div className="defiContent-title">{t("title")}</div>
      <div className="defiContent-subtitle">{t("subtitle")}</div>
      <div className="features">
        <div className="feature">
          <div className="title">
            <CubeIcon />
            <span>{t("items.first.title")}</span>
          </div>
          <div className="subtitle">
            <span>{t("items.first.subtitle")}</span>
          </div>
        </div>
        <div className="feature">
          <div className="title">
            <StarIcon />
            <span>{t("items.second.title")}</span>
          </div>
          <div className="subtitle">
            <span>{t("items.second.subtitle")}</span>
          </div>
        </div>
        <div className="feature">
          <div className="title">
            <CubeSideIcon />
            <span>{t("items.third.title")}</span>
          </div>
          <div className="subtitle">
            <span>{t("items.third.subtitle")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
