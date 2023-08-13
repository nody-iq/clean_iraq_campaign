import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "home"])),
		},
	};
}

type Inputs = {
	example: string;
	exampleRequired: string;
};

const JoinUs: React.FC = () => {
	const { t } = useTranslation();
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	return (
		<div className="container m-auto">
			<form className="form" onSubmit={handleSubmit(onSubmit)}>
				{/* <input defaultValue="test" {...register("example")} />

				<input
					{...register("exampleRequired", { required: true })}
				/>
				{errors.exampleRequired && <span>This field is required</span>} */}

				<h1 className="h3 md:h2">{t("Join Us")}</h1>

				<div className="flex flex-col gap-x-3 md:flex-row">
					<div className="flex-grow input-forForme">
						<label className="body-bold" htmlFor="Name">
							{t("Forme Input-Name")}
						</label>{" "}
						<br />
						<input
							type="text"
							name="Name"
							placeholder={t("Forme PlaceHolder-Name")}
						/>
					</div>
					<div className="flex-grow input-forForme">
						<label className="body-bold" htmlFor="Name">
							{t("Age")}
						</label>{" "}
						<br />
						<input type="number" name="Name" placeholder={t("Age")} />
					</div>
				</div>
				<div className="input-forForme">
					<label className="body-bold" htmlFor="Email">
						{t("Phone Number")}
					</label>{" "}
					<br />
					<input
						type="number"
						name={t("Forme PlaceHolder-Email")}
						placeholder={t("Phone Number")}
					/>
				</div>
				<div className="input-forForme mt-7">
					<label className="body-bold" htmlFor="Email">
						{t("Telegram ID")}
					</label>{" "}
					<br />
					<input type="text" name="phone" placeholder={t("Telegram ID")} />
				</div>
				<div className="input-forForme mt-7">
					<div className="flex justify-between justify-items-center items-center">
						<span className="body-bold">{t("Gender")}</span>
						<div className="ml-4 rtl:mr-4 flex justify-items-center items-center">
							<input className="w-5 h-5 " type="radio"></input>
							<label className="text-[24px] font-light ml-2 rtl:mr-2">
								{t("Male")}
							</label>
						</div>
						<div className="ml-4 rtl:mr-4 flex justify-items-center items-center">
							<input className="w-5 h-5" type="radio"></input>
							<label className="text-[24px] font-light ml-2 rtl:mr-2">
								{t("Female")}
							</label>
						</div>
					</div>
				</div>
				<div className="input-forForme mt-7">
					<label className="body-bold" htmlFor="Email">
						{t("Occupation (Optional)")}
					</label>
					<input
						type="text"
						name="phone"
						placeholder={t("Occupation (Optional)")}
					/>
				</div>
				<div className="input-forForme mt-7">
					<label className="body-bold" htmlFor="Email">
						{t("Governorate")}
					</label>{" "}
					<br />
					<input type="text" name="phone" placeholder={t("Governorate")} />
				</div>
				<button type="submit" className="submitBTN mt-7">
					{t("Forme Submit btn")}
				</button>
			</form>
		</div>
	);
};

export default JoinUs;
