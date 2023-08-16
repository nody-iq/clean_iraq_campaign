import React, { useState } from "react";
import Image from "next/image";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "home"])),
		},
	};
}

const FeadbackPage: React.FC = () => {
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
				<div className="flex flex-col lg:flex-row h-screen">
					<div className="flex-grow container m-auto flex flex-col justify-center items-center">
						<form onSubmit={handleSubmit} className="form">
							<h1 className="h3 md:h2 ">
								{t("Forme Header")} <br />
								{t("Forme Header-br")}
							</h1>
							<p id="p-tag-contactus">
								{t("Forme p-tag")}
								<span className="SPAN">support@iraqclean.com</span>
							</p>
							<div className="input-forForme">
								<label htmlFor="Name">{t("Forme Input-Name")}</label> <br />
								<input
								className="contactUS-input"
									value={name}
									onChange={(e) => {
										setName(e.target.value);
									}}
									type="text"
									name="Name"
									placeholder={t("Forme PlaceHolder-Name")}
								/>
							</div>
							<div className="input-forForme">
								<label htmlFor="Email">{t("Forme Input-Email")}</label> <br />
								<input
								className="contactUS-input"
									value={email}
									onChange={(e) => {
										setEmail(e.target.value);
									}}
									type="email"
									name={t("Forme PlaceHolder-Email")}
									placeholder="you@company.com"
								/>
							</div>
							<div className="textarea-div">
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
					<div className="shadow-lg flex-grow relative h-full w-full hidden lg:block">
						<Image
							className="shadow-lg rtl:transform rtl:scale-x-[-1]"
							src="/images/image.png"
							alt="Picture of the author"
							fill
							objectFit="cover"
						/>
					</div>
				</div>
			</main>
		</>
	);
};

export default FeadbackPage;
