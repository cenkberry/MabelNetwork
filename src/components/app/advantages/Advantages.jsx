import "./advantages.scss";
import { useTranslations } from "next-intl";
import AdvantagesImage from "@assets/app/advantages/advantages.webp";
import WelcomeIcon from "@assets/app/advantages/welcome.svg";
import ReferralIcon from "@assets/app/advantages/ref.svg";
import DailyIcon from "@assets/app/advantages/daily.svg";
import FutureIcon from "@assets/app/advantages/future.svg";

export default function Advantages() {
  const t = useTranslations("advantages");

  return (
    <section id="advantages" className="advantages pt-20 mb-40">
      <div className="container">
        <div className="advantages-title frameScroll">{t("title")}</div>
        <div className="advantages-subtitle frameScroll">{t("subtitle")}</div>
        <div className="row aic">
          <div className="box-lap-6 frameScroll">
            <div className="center">
              <img src={AdvantagesImage.src} alt="advantages image" />
            </div>
          </div>
          <div className="box-lap-6 frameScroll">
            <div className="item">
              <p>{t("welcome")}</p>
              <div>
                <WelcomeIcon />
                {t("welcomeSub")}
              </div>
            </div>
            <div className="item">
              <p>{t("referral")}</p>
              <div>
                <ReferralIcon />
                {t("referralSub")}
              </div>
            </div>
            <div className="item">
              <p>
                
                {t("daily")}
              </p>
              <div>
              <DailyIcon />
                {t("dailySub")}
                </div>
            </div>
            <div className="item">
              <p>
               
                {t("future")}
              </p>
              <div>
              <FutureIcon />
                {t("futureSub")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
