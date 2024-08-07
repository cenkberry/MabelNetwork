"use client";
import { useRouter, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import English from "@assets/header/lang/english.svg";
import Turkish from "@assets/header/lang/turkish.svg";

export default function LangSwitcher() {
  
  const router = useRouter();
  const path = usePathname().split('/')[1];
  const t = useTranslations("header.lang");
  
  const handleTurkish = () => {
    router.push("/tr");
  };

  const handleEnglish = () => {
    router.push("/en");
  };

  return (
    <div className="df aic gap-12 cur-point">
      {path === "en" ? (
        <div className="df aic gap-4" onClick={handleTurkish}>
          <Turkish />
          <span style={{fontSize: "16px"}}>{t("otherLang")}</span>
        </div>
      ) : (
        <div className="df aic gap-4" onClick={handleEnglish}>
          <English />
          <span style={{fontSize: "16px"}}>{t("otherLang")}</span>
        </div>
      )}
    </div>
  );
}
