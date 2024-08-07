"use client";
import { useLocale } from "next-intl";
import Link from "next/link";
import UserIcon from "@assets/buttons/userIcon.svg";

export default function UserButton() {
  const panelAddress = "/" + useLocale() + "/userpanel";

  return (
    <Link href={panelAddress} className="df aic gap-4">
      <UserIcon />
    </Link>
  );
}
