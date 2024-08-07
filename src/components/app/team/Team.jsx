import "./team.scss";
import Ceo from "@assets/app/team/ceo.webp";
import Dev from "@assets/app/team/dev.webp";
import Social from "@assets/app/team/social.webp";
import Hr from "@assets/app/team/hr.webp";
import Accountant from "@assets/app/team/accountant.webp";
import Marketing from "@assets/app/team/marketing.webp";
import { useTranslations } from "next-intl";

export default function Team() {

  const t = useTranslations("team");

  return (
    <section id="team" className="team pt-20 mb-50">
      <div className="container">
        <div className="team-title frameScroll">{t("title")}</div>
        <div className="team-subtitle frameScroll">{t("subtitle")}</div>
        <div className="items frameScroll">
          <div className="item">
            <div className="item-image">
              <img src={Ceo.src} alt="ceo image" />
            </div>
            <div className="item-title">{t("titles.ceo")}</div>
            <div className="item-subtitle">Mustafa S.</div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src={Dev.src} alt="developer image" />
            </div>
            <div className="item-title">{t("titles.dev")}</div>
            <div className="item-subtitle">Cenk B.</div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src={Social.src} alt="social media image" />
            </div>
            <div className="item-title">{t("titles.socialmedia")}</div>
            <div className="item-subtitle">Melinda S.</div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src={Marketing.src} alt="marketing image" />
            </div>
            <div className="item-title">{t("titles.marketing")}</div>
            <div className="item-subtitle">Jennifer R.</div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src={Accountant.src} alt="accountant image" />
            </div>
            <div className="item-title">{t("titles.accountant")}</div>
            <div className="item-subtitle">Anna T.</div>
          </div>
          <div className="item">
            <div className="item-image">
              <img src={Hr.src} alt="human resources image" />
            </div>
            <div className="item-title">{t("titles.hr")}</div>
            <div className="item-subtitle">Eleni P.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
