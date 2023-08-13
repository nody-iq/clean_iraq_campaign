import React from "react";
import Hero from "../components/Hero";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "home"])),
		},
	};
}
const About: React.FC = () => {
	const { t } = useTranslation();
	const [avatars, setavatars] = React.useState([
		{
			name: "avatar1",
			image: "/images/avatar1.png",
			title: "Who we are",
			subtitle:
				"The Cleanliness Ambassadors campaign has engaged an estimated 5,000 volunteers across 15 Iraqi governorates, making it one of the largest community-based environmental campaigns in the country.",
			bg: "bg-secondary",
		},
		{
			name: "avatar2",
			image: "/images/avatar2.png",
			title: "Our Message",
			subtitle:
				"This is a campaign from you, and for all of you, we can make a positive change, cooperate and strive for a cleaner and more beautiful Iraq",
			bg: "bg-primary",
		},
		{
			name: "avatar3",
			image: "/images/avatar3.png",
			title: "What we do",
			subtitle:
				"We empower people in communities all over the country to make a difference to their local environment. We encourage groups in every region of the country to organize activities and register with us to gain access to our planning tools and event resources.",
			bg: "bg-secondary",
		},
	]);

	return (
		<>
			<Hero
				bg="bg-[url('/images/about_hero.jpeg')]"
				title={t("ABOUT THE CLEANLINESS AMBASSADORS")}
			/>
			<main className="container mx-auto py-10">
				{avatars.map((item, key) => (
					<div
						key={item.name}
						className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-5 md:gap-10"
						data-aos="fade-up"
						data-aos-duration="1000"
					>
						<div
							className={`${
								key == 1 && "md:order-last"
							} relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] rounded-[50%]`}
						>
							<Image
								className={`rounded-[50%]`}
								src={item.image}
								alt={item.name}
								fill
								objectFit="contain"
							/>
						</div>
						<div className="grid justify-items-center text-center gap-5">
							<div
								className={`${item.bg} flex justify-center items-center rounded-[50%] w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[107px] lg:h-[107px]`}
							>
								<FontAwesomeIcon icon={faQuoteLeft} color="white" size="3x" />
							</div>
							<h2 className="h1">{t(item.title)}</h2>
							<p className="text-[18px] font-medium lg:text-[21px]">
								{t(item.subtitle)}
							</p>
						</div>
					</div>
				))}
			</main>
		</>
	);
};

export default About;
