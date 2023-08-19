import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import { Button, Modal, Spinner } from "flowbite-react";

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "home"])),
		},
	};
}

const JoinUs: React.FC = () => {
	const [openModal, setOpenModal] = React.useState(false);
	const [Loader, setLoader] = React.useState(false);
	const { t } = useTranslation();
	const router = useRouter();

	return (
		<div className="">
			<Formik
				initialValues={{
					name: "",
					age: "",
					phone: "",
					telegram: "",
					gender: "",
					occupation: "",
					province: router.query.slug,
					employeeOrganization: "",
					requiresTransport: false,
				}}
				validationSchema={Yup.object({
					name: Yup.string().required(t("field is required")),
					age: Yup.string().required(t("field is required")),
					phone: Yup.string()
						.matches(/^\d+$/, t("Phone number must only contain digits"))
						.min(10, t("Phone number must be at least 10 digits"))
						.max(15, t("Phone number can be at most 15 digits"))
						.required(t("Phone number is required")),
					telegram: Yup.string().required(t("field is required")),
					gender: Yup.string().required(t("field is required")),
				})}
				onSubmit={async (values, action) => {
					setLoader(true);
					await axios
						.post(
							"https://docs.google.com/forms/d/e/1FAIpQLSevQF484PATAvlOuIDpGV3jXq5BAe3SRZgSY0Trqo_i7b6l2g/formResponse",
							values
						)
						.then(() => {
							setLoader(false);
							action.resetForm();
							setOpenModal(true);
						})
						.catch(() => {
							setOpenModal(true);
							setLoader(false);
							action.resetForm();
						});
				}}
			>
				{({ errors, touched, values }) => (
					<Form className="form w-full">
						<h1 className="h3 md:h2">{t("Join Us")}</h1>
						<div className="flex flex-col gap-x-3 md:flex-row">
							<div className="flex-grow input-forForme">
								<label className="body-bold" htmlFor="Name">
									{t("Forme Input-Name")}
								</label>
								<br />
								<Field
									type="text"
									id="name"
									name="name"
									placeholder={t("Forme PlaceHolder-Name")}
									className={`${
										errors.name && touched.name && "border-rose-800"
									}`}
								/>
								{errors.name && touched.name && (
									<ErrorMessage
										name="name"
										render={(msg) => <div className="text-rose-800">{msg}</div>}
									/>
								)}
							</div>
							<div className="flex-grow input-forForme">
								<label className="body-bold" htmlFor="age">
									{t("Age")}
								</label>
								<br />
								<Field
									type="number"
									id="age"
									name="age"
									placeholder={t("Age")}
									className={`${
										errors.age && touched.age && "border-rose-800"
									}`}
								/>
								{errors.age && touched.age && (
									<ErrorMessage
										name="age"
										render={(msg) => <div className="text-rose-800">{msg}</div>}
									/>
								)}
							</div>
						</div>
						<div className="input-forForme mt-7">
							<label className="body-bold" htmlFor="phone">
								{t("Phone Number")}
							</label>
							<br />
							<Field
								type="number"
								id="phone"
								name="phone"
								placeholder={t("Phone Number")}
								className={`${
									errors.phone && touched.phone && "border-rose-800"
								}`}
							/>
							{errors.phone && touched.phone && (
								<ErrorMessage
									name="phone"
									render={(msg) => <div className="text-rose-800">{msg}</div>}
								/>
							)}
						</div>
						<div className="input-forForme mt-7">
							<label className="body-bold" htmlFor="Email">
								{t("Telegram ID")}
							</label>
							<br />
							<Field
								type="text"
								id="telegram"
								name="telegram"
								placeholder={t("Telegram ID")}
								className={`${
									errors.telegram && touched.telegram && "border-rose-800"
								}`}
							/>
							{errors.telegram && touched.telegram && (
								<ErrorMessage
									name="telegram"
									render={(msg) => <div className="text-rose-800">{msg}</div>}
								/>
							)}
						</div>
						<div className="input-forForme mt-7">
							<div className="flex justify-between justify-items-center items-center">
								<span className="body-bold">{t("Gender")}</span>
								<div className="ml-4 rtl:mr-4 flex justify-items-center items-center">
									<Field
										type="radio"
										id="gender"
										name="gender"
										value="male"
										className="w-5 h-5"
									/>
									<label className="text-[24px] font-light ml-2 rtl:mr-2">
										{t("Male")}
									</label>
								</div>
								<div className="ml-4 rtl:mr-4 flex justify-items-center items-center">
									<Field
										type="radio"
										id="gender"
										name="gender"
										value="female"
										className="w-5 h-5"
									/>
									<label className="text-[24px] font-light ml-2 rtl:mr-2">
										{t("Female")}
									</label>
								</div>
							</div>
							{errors.gender && touched.gender && (
								<ErrorMessage
									name="gender"
									render={(msg) => <div className="text-rose-800">{msg}</div>}
								/>
							)}
						</div>
						<div className="input-forForme mt-7">
							<label className="body-bold" htmlFor="occupation">
								{t("Occupation (Optional)")}
							</label>
							<Field
								type="text"
								id="occupation"
								name="occupation"
								placeholder={t("Occupation (Optional)")}
							/>
						</div>
						<button type="submit" className="submitBTN mt-7">
							{Loader ? (
								<Spinner aria-label="Success spinner example" color="success" />
							) : (
								<span>{t("Forme Submit btn")}</span>
							)}
						</button>
					</Form>
				)}
			</Formik>
			<Modal show={openModal === true} onClose={() => setOpenModal(false)}>
				<Modal.Header>{t("Registration Successful")}</Modal.Header>
				<Modal.Body>
					<div className="space-y-6">
						<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
							{t(
								"Thank you for registering for our campaign. You are now a part of our movement to make a difference. Stay tuned for updates and events!"
							)}
						</p>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={() => setOpenModal(false)}>{t("Close")}</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default JoinUs;
