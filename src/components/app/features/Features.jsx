import "./features.scss";
import { useTranslations } from "next-intl";
import FeaturesContent from "./child/FeaturesContent";
import FeaturesChart from "./child/FeaturesChart";

export default function Features() {

  const t = useTranslations("features");

  return (
    <section id="features" className="features pt-20 mb-60">
      <div className="container">
        <div className="features-title frameScroll">{t("title")}</div>
        <div className="features-subtitle frameScroll">{t("subtitle")}</div>
        <div className="row aic">
          <div className="box-tab-6 box-lap-7">
            <FeaturesChart />
          </div>
          <div className="box-tab-6 box-lap-5">
            <FeaturesContent />
          </div>
        </div>
      </div>
    </section>
  );
}
