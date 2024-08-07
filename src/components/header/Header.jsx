"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config.js";
import { useState ,useEffect } from "react";
import Logo from "./logo/Logo";
import MobileMenu from "./mobileMenu/MobileMenu";
import DesktopMenu from "./desktopMenu/DesktopMenu";
import LangSwitcher from "@comp/header/langSwitcher/LangSwitcher";
import LoginButton from "@comp/user/LoginButton";
import UserButton from "@comp/user/UserButton";

export default function Header() {
  const [loginStatus, setLoginSatus] = useState(false);
  const user = useAuthState(auth);

  useEffect(() => {
    const fetchData = async () => {
      try {
        user[0].uid && setLoginSatus(true);
      } catch {
        setLoginSatus(false);
      }
    };
    fetchData();
  }, [user]);

  return (
    <header style={{background: "#ffffff12"}}>
      <div className="container">
        <div className="row aic py-8">
          <div className="box box-lap-2">
            <Logo />
          </div>
          <div className="dn lap-db box-lap-8">
            <DesktopMenu />
          </div>
          <div className="box-auto box-lap-2 df aic jce gap-14">
            {loginStatus ? <UserButton /> : <LoginButton />}
            <MobileMenu />
            <div className="dn lap-db">
              <LangSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
