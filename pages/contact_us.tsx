import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, Modal } from "flowbite-react";
import axios from "axios";

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "home"])),
		},
	};
}

const FeadbackPage: React.FC = () => {
	const { t } = useTranslation();
	const [openModal, setOpenModal] = React.useState(false);

	const initialValues = {
		name: "",
		email: "",
		msg: "",
	};

	const validationSchema = Yup.object({
		name: Yup.string().required(t("field is required")),
		email: Yup.string().required(t("field is required")),
		msg: Yup.string().required(t("field is required")),
	});

	const handleSubmit = async (e: any) => {
		const formData = new FormData();
		formData.append("entry.1198253284", e.name);
		formData.append("entry.1358856742", e.email);
		formData.append("entry.208176542", e.msg);

		await axios
			.post(
				"https://docs.google.com/forms/d/e/1FAIpQLSevQF484PATAvlOuIDpGV3jXq5BAe3SRZgSY0Trqo_i7b6l2g/formResponse",
				formData
			)
			.then(() => setOpenModal(true))
			.catch(() => setOpenModal(true));
	};

	return (
		<>
			<main>
				<div className="flex flex-col lg:flex-row h-screen">
					<div className="flex-grow container m-auto flex flex-col justify-center items-center">
						<Formik
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={handleSubmit}
						>
							{({ errors, touched, values }) => (
								<Form className="form w-full">
									<h1 className="h3 md:h2 ">
										{t("Forme Header")} <br />
										{t("Forme Header-br")}
									</h1>
									<p id="p-tag-contactus">
										{t("Forme p-tag")}
										<span className="SPAN"> support@iraqclean.com</span>
									</p>
									<div className="input-forForme">
										<label htmlFor="Name">{t("Forme Input-Name")}</label> <br />
										<Field
											type="text"
											id="name"
											name="name"
											placeholder={t("Forme PlaceHolder-Name")}
											className={`contactUS-input ${
												errors.name && touched.name && "border-rose-800"
											}`}
										/>
										{errors.name && touched.name && (
											<ErrorMessage
												name="name"
												render={(msg) => (
													<div className="text-rose-800">{msg}</div>
												)}
											/>
										)}
									</div>
									<div className="input-forForme">
										<label htmlFor="Email">{t("Forme Input-Email")}</label>{" "}
										<br />
										<Field
											type="email"
											id="name"
											name="email"
											placeholder="you@company.com"
											className={`contactUS-input ${
												errors.email && touched.email && "border-rose-800"
											}`}
										/>
										{errors.email && touched.email && (
											<ErrorMessage
												name="email"
												render={(msg) => (
													<div className="text-rose-800">{msg}</div>
												)}
											/>
										)}
									</div>
									<div className="textarea-div">
										<label htmlFor="feadback">
											{t("Forme Input-textarea")}
										</label>
										<br />
										<Field
											className={`contactUS-input ${
												errors.msg && touched.msg && "border-rose-800"
											}`}
											as="textarea"
											id="msg"
											name="msg"
											placeholder={t("Forme PlaceHolder-textarea")}
										/>
										{errors.msg && touched.msg && (
											<ErrorMessage
												name="msg"
												render={(msg) => (
													<div className="text-rose-800">{msg}</div>
												)}
											/>
										)}
									</div>
									<button type="submit" className="submitBTN">
										{t("Forme Submit btn")}
									</button>
								</Form>
							)}
						</Formik>
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
				<Modal show={openModal === true} onClose={() => setOpenModal(false)}>
					<Modal.Header>{t("ContactMsg")}</Modal.Header>
					<Modal.Body>
						<div className="space-y-6">
							<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
								{t("thankYouMessage")}
							</p>
						</div>
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={() => setOpenModal(false)}>{t("Close")}</Button>
					</Modal.Footer>
				</Modal>
			</main>
		</>
	);
};

export default FeadbackPage;
