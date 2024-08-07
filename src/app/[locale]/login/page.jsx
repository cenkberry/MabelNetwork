"use client";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useTranslations , useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import ModalLogo from "@assets/header/modalIcon.png";
import Spinner from "@assets/elements/spinner.gif";

export default function Login() {
  const router = useRouter();
  const t = useTranslations("header.login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [spinner, setSpinner] = useState(false);
  const signupAddress = "/" + useLocale() + "/signup";

  const handleLogin = (e) => {
    e.preventDefault();
    let emailValid = true;
    let passwordValid = true;

    if (!/^.*@.*.{7,}$/.test(email)) {
      setEmailError(true);
      emailValid = false;
    }

    if (!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password)) {
      setPasswordError(true);
      passwordValid = false;
    }

    if (emailValid && passwordValid) {
      setEmailError(false);
      setPasswordError(false);
      // "The code in this section of the project has been deleted because it contained backend information."
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
        <div className="center mb-30">
          <img src={ModalLogo.src} alt="modal logo" />
        </div>
        <form className="mabel-form df jcc fdc">
          <label htmlFor="usermail">{t("emailLabel")}</label>
          <input
            type="email"
            id="usermail"
            autoComplete="off"
            value={email}
            placeholder={t("emailPlaceholder")}
            onFocus={() => setEmailError(false)}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">{t("passwordLabel")}</label>
          <input
            type="password"
            id="password"
            autoComplete="off"
            value={password}
            placeholder={t("passwordPlaceholder")}
            onFocus={() => setPasswordError(false)}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="formErrors">
            {emailError && <div className="inputError">{t("emailError")}</div>}
            {passwordError && <div className="inputError">{t("passwordError")}</div>}
            {loginError && <div className="inputError">{t("loginError")}</div>}
          </div>
          <div className="center mt-20 mb-40">
            <button onClick={handleLogin}>
              <div className="btn">{t("loginButton")}</div>
            </button>
          </div>
        </form>
        <div className="notSigned df aic jcc fdc gap-8">
          <p>{t("notSigned")}</p>
          <Link href={signupAddress} className="signNowButton">
            {t("click")}
          </Link>
        </div>
      </div>
    </div>
  );
}
