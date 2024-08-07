import "./footer.scss";
import Link from "next/link";
import Twitter from "@assets/footer/twitter.svg";
import Facebook from "@assets/footer/facebook.svg";
import Instagram from "@assets/footer/instagram.svg";
import { useTranslations } from "next-intl";

export default function Footer() {

  const t = useTranslations("footer");

  return (
    <footer className="py-24 bg-three">
      <div className="container">
        <div className="row aic">
          <div className="box-mob-6 order-2 order-mob-1">
            <div className="copyright">
              {t("title")}
            </div>
          </div>
          <div className="box-mob-6 order-1 order-mob-1">
            <div className="social-links">
              <Link href="https://x.com/mabelnetworkdev" aria-label="twitter link">
                <Twitter />
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=61561372406960" aria-label="facebook link">
                <Facebook />
              </Link>
              <Link href="https://www.instagram.com/mabel.network/" aria-label="instagram link">
                <Instagram />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
