import Link from "next/link";
import { useTranslations } from "next-intl";
import "./desktopMenu.scss";

export default function DesktopMenu() {

  const t = useTranslations("header.links");

  return (
    <div className="dn lap-db desktopMenu">
      <ul>
        <li>
          <Link href={t("media.link")}>{t("media.title")}</Link>
        </li>
        <li>
          <Link href={t("defi.link")}>{t("defi.title")}</Link>
        </li>
        <li>
          <Link href={t("roadmap.link")}>{t("roadmap.title")}</Link>
        </li>
        <li>
          <Link href={t("features.link")}>{t("features.title")}</Link>
        </li>
        <li>
          <Link href={t("team.link")}>{t("team.title")}</Link>
        </li>
        <li>
          <Link href={t("contact.link")}>{t("contact.title")}</Link>
        </li>
      </ul>
    </div>
  );
}
