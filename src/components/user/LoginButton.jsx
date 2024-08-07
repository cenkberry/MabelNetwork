import { useTranslations , useLocale } from "next-intl";
import Link from "next/link";

export default function LoginButton() {
  const t = useTranslations("header.login");
  const loginAddress = "/" + useLocale() + "/login";

  return (
    <Link href={loginAddress} className="btn">{t("loginButton")}</Link>
  );
}
