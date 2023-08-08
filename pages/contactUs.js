import React, { useState } from "react";
// import sideImg from "../pages/masab-imgs/image.png"; 👈 //  this photo importing is not working although it is the right path,
// I replace it with a URL photo from the Internet
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
    },
  };
}

export default function FeadbackPage() {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feadback, setFeadback] = useState(""); // textaera faild

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <main>
        <div className="fomrePage">
          <div className="sideImg">
            {/* the image looks shit becaouse of the header space at the top */}
            <img
              src="https://www.alsumaria.tv/uploadImages/DocumentImages/Doc-P-369435-637461378995257715.jpg"
              alt="img"
            />
          </div>

          <div className="formeSection">
            <form onSubmit={handleSubmit}>
              <h1>
              {t("Forme Header")} <br/>
              {t("Forme Header-br")}
              </h1>
              <p>
              {t("Forme p-tag")}
              
                <span className="SPAN"> support@iraqclean.com</span>
              </p>
              <div className="input-forForme">
                <label htmlFor="Name">{t("Forme Input-Name")}</label> <br />
                <input
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  type="text"
                  name="Name"
                  placeholder= {t("Forme PlaceHolder-Name")}
                />
              </div>
              <div className="input-forForme">
                <label htmlFor="Email">{t("Forme Input-Email")}</label> <br />
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  name= {t("Forme PlaceHolder-Email")}
                  placeholder="you@company.com"
                />
              </div>
              <div className="input-forForme">
                <label htmlFor="feadback">{t("Forme Input-textarea")}</label>
                <br />
                <textarea
                  value={feadback}
                  onChange={(e) => {
                    setFeadback(e.target.value);
                  }}
                  name="feadback"
                  placeholder={t("Forme PlaceHolder-textarea")}
                ></textarea>
              </div>
              <button className="submitBTN">{t("Forme Submit btn")}</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
