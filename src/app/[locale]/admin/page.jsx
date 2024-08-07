"use client";
import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "@/firebase/firestore.js";
import { useRouter } from "next/navigation";
import { useTranslations , useLocale } from "next-intl";
import ModalLogo from "@assets/header/modalIcon.png";

export default function Admin() {
  const t = useTranslations("adminPanel");
  const router = useRouter();
   // "The code in this section of the project has been deleted because it contained backend information."
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [serverUser, setServerUser] = useState("");
  const [serverPassword, setserverPassword] = useState("");

  useEffect(() => {
    // "The code in this section of the project has been deleted because it contained backend information."
  }, []);

  const handleAdminLogin = () => {
   // "The code in this section of the project has been deleted because it contained backend information."
  };

  return (
    <div className="user">
      <div className="user-content">
        <div className="center mb-20">
          <img src={ModalLogo.src} alt="modal logo" />
        </div>
        <div className="mabel-form">
          <label htmlFor="username">{t("username")}</label>
          <input
            type="email"
            id="username"
            autoComplete="off"
            value={username}
            placeholder={t("username")}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            autoComplete="off"
            value={password}
            placeholder={t("password")}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="center">
            <button className="btn" onClick={handleAdminLogin}>
              {t("BtnText")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
