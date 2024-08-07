import "./featuresContent.scss";
import ItemIcon from "@assets/app/features/item.svg";
import { useTranslations } from "next-intl";

export default function FeaturesContent() {
  
  const t = useTranslations("features");

  return (
    <div className="featuresContent frameScroll">
      <div className="item">
        <ItemIcon />
        <div>{t("items.ticker.title")}</div>
        <p>{t("items.ticker.subtitle")}</p>
      </div>
      <div className="item">
        <ItemIcon />
        <div>{t("items.type.title")}</div>
        <p>{t("items.type.subtitle")}</p>
      </div>
      <div className="item">
        <ItemIcon />
        <div>{t("items.mine.title")}</div>
        <p>{t("items.mine.subtitle")}</p>
      </div>
      <div className="item">
        <ItemIcon />
        <div>{t("items.price.title")}</div>
        <p>{t("items.price.subtitle")}</p>
      </div>
      <div className="item">
        <ItemIcon />
        <div>{t("items.supply.title")}</div>
        <p>{t("items.supply.subtitle")}</p>
      </div>
      <div className="item">
        <ItemIcon />
        <div>{t("items.maxsupply.title")}</div>
        <p>{t("items.maxsupply.subtitle")}</p>
      </div>
    </div>
  );
}
