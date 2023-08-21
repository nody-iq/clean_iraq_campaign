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
	const [story, setStory] = React.useState([
		{
			subtitle:
				"Murtada al-Tamimi, a 29-year-old Iraqi expatriate in Canada, works as a software engineer. He came to Baghdad to spend his vacation and watch the sunset with his mother on the banks of the Tigris River but was shocked by the sight and quantity of waste in the places adjacent to the river.",
		},
		{
			subtitle:
				"Murtada decided to clean the banks of the river with his own hands, and documented a video on his page on social media, to find wide support, after which a voluntary campaign called 'Clean Ambassadors' would be launched.",
		},
		{
			subtitle:
				"Mortada said that on the first day, he went alone and cleaned a small area, photographed it and posted it on his Instagram account, and urged others to participate in the cleaning, so his invitation initially received a response from about 20 people, and his mother supported him until the number of participants increased until it reached about 500. person.",
		},
		{
			subtitle:
				"Mortada mentioned that every Friday was allocated for the volunteers to go out to clean the banks of the river, indicating that this aims to make Baghdad more beautiful and to create environmental awareness to eliminate pollution surrounding the river.",
		},
		{
			subtitle:
				"After a month of his campaign, Murtada returned to Canada, but his campaign, which he launched, continued in Iraq.",
		},
		{
			subtitle:
				"The volunteers developed a plan through which they divided the banks of the Tigris into areas so that each part would be cleaned separately, to know the places most in need of cleaning.",
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
				<div className="flex flex-col">
					<h2 className="h1 pt-20 pb-10">{t("Campaign story")}</h2>
					{story.map((text)=>(
						<p className="text-[18px] font-medium lg:text-[21px] pb-3">{t(text.subtitle)}</p>
					))}
					<iframe className="rounded-[12px] h-[500px]" src="https://www.youtube.com/embed/F50xz-jFFrE" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
					<h2 className="h1 py-10">{t("Campaign Expansion")}</h2>
					<p className="text-[18px] font-medium lg:text-[21px] pb-3">
						{t("The campaign launched by Murtada from Baghdad has expanded today to include 15 Iraqi governorates whose youth went out to clean the banks of rivers polluted with waste. The campaign is based on the principle of continuity and sustainability and aims not only for cleaning but also to spread the culture of change and the spirit of cooperation.")}
					</p>
					<p className="text-[18px] font-medium lg:text-[21px] pb-3">
						{t("More than 10000 people are currently participating in the campaign, who collected more than 75,000 bags of waste, with each gathering using 3,000 bags, and everyone feels responsible for the change. Although cleaning the river is a governmental responsibility, the people have an important role in the change to preserve their city and protect it from pollution.")}
					</p>
				</div>
			</main>
		</>
	);
};

export default About;
