"use client";
import "./mobileMenu.scss";
import { useState } from "react";
import { useTranslations } from "next-intl";
import HamburgerIcon from "@assets/header/hamburgerIcon.svg";
import CloseIcon from "@assets/header/closeIcon.svg";
import Link from "next/link";
import LangSwitcher from "@comp/header/langSwitcher/LangSwitcher";

export default function HamburgerMenu() {
  const [isActive, setisActive] = useState(false);
  const t = useTranslations("header.links");

  const toggleMenu = () => {
    setisActive((isActive) => !isActive);
    document.querySelector("body").classList.toggle("overlay-active");
  };

  return (
    <div className="lap-dn">
      <HamburgerIcon onClick={toggleMenu} />
      {isActive && (
        <div className="mobileMenu">
          <div className="close-button">
            <CloseIcon className="closeIcon" onClick={toggleMenu} />
          </div>
          <div className="lang-buttons">
            <LangSwitcher />
          </div>
          <ul>
            <li>
              <Link href={t("media.link")} onClick={toggleMenu}>
                {t("media.title")}
              </Link>
            </li>
            <li>
              <Link href={t("defi.link")} onClick={toggleMenu}>
                {t("defi.title")}
              </Link>
            </li>
            <li>
              <Link href={t("roadmap.link")} onClick={toggleMenu}>
                {t("roadmap.title")}
              </Link>
            </li>
            <li>
              <Link href={t("features.link")} onClick={toggleMenu}>
                {t("features.title")}
              </Link>
            </li>
            <li>
              <Link href={t("team.link")} onClick={toggleMenu}>
                {t("team.title")}
              </Link>
            </li>
            <li>
              <Link href={t("contact.link")} onClick={toggleMenu}>
                {t("contact.title")}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
