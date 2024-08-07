"use client";
import "./page.scss";
import { auth } from "@/firebase/config";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { useTranslations } from "next-intl";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import db from "@/firebase/firestore.js";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ModalLogo from "@assets/header/modalIcon.png";
import RewardIcon from "@assets/buttons/rewardIcon.svg";
import Spinner from "@assets/elements/spinner.gif";

export default function UserPanel() {
  const t = useTranslations("header.userPanel");
  const router = useRouter();
  const { user, loading } = useAuth();
  const [result, setResult] = useState({
    // "The code in this section of the project has been deleted because it contained backend information."
  });
  useEffect(() => {
    const fetchData = async () => {
      // "The code in this section of the project has been deleted because it contained backend information."
    };
    fetchData();
  }, [user]);

  const handleRewardButton = async () => {
    // "The code in this section of the project has been deleted because it contained backend information."
  };

  const handleSignOut = async () => {
    // "The code in this section of the project has been deleted because it contained backend information."
  };

  return (
    <div className="user">
      {loading ? (
        <img className="spinner" src={Spinner.src} alt="loading spinner" />
      ) : (
        <div className="user-content">
          <div className="center mb-20">
            <img src={ModalLogo.src} alt="modal logo" />
          </div>
          <div className="panel">
            <div className="item">
              <p>{t("mail")}</p>
              <div>{result.mail}</div>
            </div>
            <div className="item">
              <p>{t("binance")}</p>
              <div>{result.binance}</div>
            </div>
            <div className="item">
              <p>{t("verify")}</p>
              <div>{result.isVerified ? t("verTrue") : t("verFalse")}</div>
            </div>
            <div className="item">
              <p>{t("token")}</p>
              {result.amount ? (
                <div>
                  <div>{result.amount}</div>
                  <div>$MBL</div>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
          <div className="panel-buttons">
            {result.rewardTime && result.isVerified ? (
              <button className="rewardButton" onClick={handleRewardButton}>
                <RewardIcon />
                <p>{t("reward")}</p>
              </button>
            ) : (
              <button className="rewardButton disabled">
                {t("rewardLeft")}
              </button>
            )}
            <button className="btn" onClick={handleSignOut}>
              {t("signout")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
