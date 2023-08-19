import React, { useState } from "react";
import Image from "next/image";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import JoinUs from "../../components/JoinUs";
import axios from "axios";

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "home"])),
		},
	};
}

export async function getStaticPaths() {
	const response = await axios.get(
		"https://airtable-serverless-functions.mujzuh.workers.dev/provinces"
	);
	const provinces = response.data.provinces;
	const paths = provinces.map((item) => ({
		params: { slug: item.name },
	}));
	return {
		paths,
		fallback: false,
	};
}

const DynamicPage = () => {
	return (
		<>
			<main className="container mx-auto">
				<div className="devider" />
				<div className="rounded rounded-tr-none shadow-lg lg:flex lg:flex-row lg:items-center lg:relative">
					<div className="w-full lg:-ml-3">
						<JoinUs />
					</div>
					<div className="hidden lg:block shadow-[-4px_5px_0px_1px_#548b68] border-r-0 border-2 rounded-lg rounded-tr-none border-solid border-[#548b68] w-full self-stretch relative">
						<Image
							className="rounded rounded-tr-none shadow-lg rtl:transform rtl:scale-x-[-1]"
							src="/images/DSC01992.jpg"
							alt="Picture"
							fill
							objectFit="cover"
						/>
					</div>
				</div>
				<div className="devider" />
			</main>
		</>
	);
};

export default DynamicPage;
