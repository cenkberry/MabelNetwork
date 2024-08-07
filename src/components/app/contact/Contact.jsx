"use client";
import "./contact.scss";
import React, { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";
import ContactPhoto from "@assets/app/contact/contact.webp";
import MailSentIcon from "@assets/app/contact//mailsent.svg";

export default function Contact() {
  const t = useTranslations("contact");
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    const { name, email, message } = userData;

    if (
      name.length > 5 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      message.length > 10
    ) {
      emailjs
        .sendForm("mabelnetworkdev", "template_3e9feuq", form.current, {
          // "The code in this section of the project has been deleted because it contained backend information."
        })
        .then(() => {
          setIsSent(true);
        });
    } else {
      setMessageError(true);
    }
  };

  return (
    <section id="contact" className="contact mb-70">
      <div className="container">
        <div className="contact-title frameScroll">{t("title")}</div>
        <div className="contact-subtitle frameScroll">{t("subtitle")}</div>
        <div className="row aic">
          <div className="box-tab-7 box-lap-6 frameScroll">
            <div className="contact-photo center">
              <img loading="lazy" src={ContactPhoto.src} alt="contact us photo"/>
            </div>
          </div>
          <div className="box-tab-5 box-lap-6 frameScroll">
            {isSent ? (
              <div className="contact-message-sent">
                <MailSentIcon />
                <p className="title">{t("sentTitle")}</p>
                <p>{t("sentSubtitle")}</p>
              </div>
            ) : (
              <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                  <label>{t("nameTitle")}</label>
                  <input
                    type="text"
                    name="user_name"
                    placeholder={t("nameHolder")}
                    onFocus={() => setMessageError(false)}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        name: e.target.value,
                      })
                    }
                  />
                  <label>{t("emailTitle")}</label>
                  <input
                    type="email"
                    name="user_email"
                    placeholder={t("emailHolder")}
                    onFocus={() => setMessageError(false)}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        email: e.target.value,
                      })
                    }
                  />
                  <label>{t("messageTitle")}</label>
                  <textarea
                    name="message"
                    placeholder={t("messageHolder")}
                    onFocus={() => setMessageError(false)}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        message: e.target.value,
                      })
                    }
                  />
                  {messageError && (
                    <div className="contact-message-error">
                      <p>{t("warnName")}</p>
                      <p>{t("warnMail")}</p>
                      <p>{t("warnMessage")}</p>
                    </div>
                  )}
                  <input
                    className="contact-send-button"
                    type="submit"
                    value={t("sendText")}
                  />
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
