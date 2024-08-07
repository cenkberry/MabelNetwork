"use client";
import "./panel.scss";
import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default function Panel() {
  const t = useTranslations("adminPanel");
  const db = getFirestore();
  const [totalUser, setTotalUser] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // "The code in this section of the project has been deleted because it contained backend information."
  }, []);

  return (
    <div className="panel pt-60 flex-1">
      <div className="container">
        <div className="mb-100">
          <div className="center fs-32 mb-20">{t("activeUsers")}</div>
          <div className="center fs-48">{totalUser}</div>
        </div>
        <div className="user-table">
        <div className="center fs-32 mb-40">{t("usersList")}</div>
          <div className="userlist">
            <div className="titles">
              <div>{t("userMail")}</div>
              <div>{t("userToken")}</div>
              <div>{t("userBinance")}</div>
              <div>{t("userRef")}</div>
              <div>{t("userID")}</div>
            </div>
            {users.map((user) => (
              <div key={user.id}>
                <div>{user.email}</div>
                <div>{user.tokenAmount}</div>
                <div>{user.binance}</div>
                <div>{user.refMail ? user.refMail : "-"}</div>
                <div>{user.uid}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
