import "./roadmap.scss";
import { useTranslations } from "next-intl";
import Testnet from "@assets/app/roadmap/testnet.svg";
import Angel from "@assets/app/roadmap/angel.svg";
import Sale from "@assets/app/roadmap/sale.svg";
import Mainnet from "@assets/app/roadmap/mainnet.svg";
import Exchange from "@assets/app/roadmap/exchange.svg";
import Shop from "@assets/app/roadmap/shop.svg";

export default function Roadmap() {

  const t = useTranslations("roadmap");

  return (
    <section id="roadmap" className="roadmap pt-20 mb-60">
      <div className="container">
        <div className="roadmap-title frameScroll">{t("title")}</div>
        <div className="roadmap-subtitle frameScroll">{t("subtitle")}</div>
        <div className="items frameScroll">
          <div className="item">
            <Testnet />
            <div className="item-title">{t("testnet.title")}</div>
            <div className="item-subtitle">{t("testnet.subtitle")}</div>
          </div>
          <div className="item">
            <Angel />
            <div className="item-title">{t("angelInvestor.title")}</div>
            <div className="item-subtitle">{t("angelInvestor.subtitle")}</div>
          </div>
          <div className="item">
            <Sale />
            <div className="item-title">{t("presale.title")}</div>
            <div className="item-subtitle">{t("presale.subtitle")}</div>
          </div>
          <div className="item">
            <Mainnet />
            <div className="item-title">{t("mainnet.title")}</div>
            <div className="item-subtitle">{t("mainnet.subtitle")}</div>
          </div>
          <div className="item">
            <Exchange />
            <div className="item-title">{t("exchange.title")}</div>
            <div className="item-subtitle">{t("exchange.subtitle")}</div>
          </div>
          <div className="item">
            <Shop />
            <div className="item-title">{t("mabelshop.title")}</div>
            <div className="item-subtitle">{t("mabelshop.subtitle")}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
