"use client";
import { createUserWithEmailAndPassword , sendEmailVerification } from "firebase/auth";
import { auth } from "@/firebase/config";
import db from "@/firebase/firestore.js";
import {
  doc,
  collection,
  getDocs,
  setDoc,
  updateDoc,
  increment,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useTranslations } from "next-intl";
import ModalLogo from "@assets/header/modalIcon.png";
import Spinner from "@assets/elements/spinner.gif";

export default function Signup() {
  const t = useTranslations("header.login");
  const router = useRouter();
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [binanceError, setBinanceError] = useState(false);
  const [locationError, setLocationError] = useState(false);
  const [inUseError, setInUseError] = useState(false);
  const [spinner, setSpinner] = useState(false);

  const [userSignData, setUserSignData] = useState({
    // "The code in this section of the project has been deleted because it contained backend information."
  });

  const handleGeoLocation = (e) => {
    const checked = e.target.checked;
    if (checked) {
      handleTakeLocation();
    } else {
      setLocationError(true);
      setUserSignData({
        ...userSignData,
        userCoordinate: "",
      });
    }
  };

  const handleTakeLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocationError(false);
          const { latitude, longitude } = position.coords;
          setUserSignData({
            ...userSignData,
            userCoordinate: [longitude, latitude],
          });
        },
        (error) => {
          setLocationError(true);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    let emailValid = true;
    let passwordValid = true;
    let binanceValid = true;
    let geoValid = true;

    if (!/^.*@.*.{7,}$/.test(userSignData.email)) {
      setEmailError(true);
      emailValid = false;
    }

    if (!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(userSignData.password)) {
      setPasswordError(true);
      passwordValid = false;
    }

    if (!/(?=.*x).{8,}/.test(userSignData.binance)) {
      setBinanceError(true);
      binanceValid = false;
    }

    if (userSignData.userCoordinate.length < 1) {
      setLocationError(true);
      geoValid = false;
    }

    if (emailValid && passwordValid && binanceValid && geoValid) {
      setEmailError(false);
      setPasswordError(false);
      setBinanceError(false);
      setLocationError(false);
      const signUpUser = async () => {
        try {
          setSpinner(true);
          // "The code in this section of the project has been deleted because it contained backend information."
          router.push("/");
        } catch {
          setSpinner(false);
          setInUseError(true);
        }
      };
      signUpUser();
    }
  };

  return (
    <div className="user">
      <div className="user-content">
        {spinner ? (
          <div className="loader">
            <img className="spinner" src={Spinner.src} alt="loading spinner" />
          </div>
        ) : null}
        <div className="center mb-20">
          <img src={ModalLogo.src} alt="modal logo" />
        </div>
        <form className="mabel-form df jcc fdc">
          <label htmlFor="usermail">{t("emailLabel")}</label>
          <input
            type="email"
            id="usermail"
            autoComplete="off"
            value={userSignData.email}
            placeholder={t("emailPlaceholder")}
            onClick={() => setInUseError(false)}
            onFocus={() => setEmailError(false)}
            onChange={(e) =>
              setUserSignData({
                ...userSignData,
                email: e.target.value,
              })
            }
          />
          <label htmlFor="password">{t("passwordLabel")}</label>
          <input
            type="password"
            id="password"
            autoComplete="off"
            value={userSignData.password}
            placeholder={t("passwordPlaceholder")}
            onFocus={() => setPasswordError(false)}
            onChange={(e) =>
              setUserSignData({
                ...userSignData,
                password: e.target.value,
              })
            }
          />
          <label htmlFor="binance">{t("binanceLabel")}</label>
          <input
            type="text"
            id="binance"
            autoComplete="off"
            value={userSignData.binance}
            placeholder={t("binancePlaceholder")}
            onFocus={() => setBinanceError(false)}
            onChange={(e) =>
              setUserSignData({
                ...userSignData,
                binance: e.target.value,
              })
            }
          />
          <label htmlFor="reference">{t("referenceLabel")}</label>
          <input
            type="text"
            id="reference"
            autoComplete="off"
            value={userSignData.refMail}
            placeholder={t("referencePlaceholder")}
            onChange={(e) =>
              setUserSignData({
                ...userSignData,
                refMail: e.target.value,
              })
            }
          />
          <div className="user-geo-confirm">
            <input
              type="checkbox"
              className="mabel-check"
              onChange={handleGeoLocation}
            />
            <p>{t("geoText")}</p>
          </div>
          <div className="formErrors">
            {emailError && <div className="inputError">{t("emailError")}</div>}
            {passwordError && (
              <div className="inputError">{t("passwordError")}</div>
            )}
            {binanceError && (
              <div className="inputError">{t("binanceError")}</div>
            )}
            {locationError && (
              <div className="inputError">{t("locationError")}</div>
            )}
            {inUseError && <div className="inputError">{t("inUseError")}</div>}
          </div>
          <div className="center">
            <button>
              <div className="btn" onClick={handleSubmitForm}>
                {t("singupText")}
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
