import React from "react";
import axios from "axios";
import Hero from "../components/Hero";
import EventCard from "../components/EventCard";
import JoinUs from "../components/JoinUs";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Skeleton from "../components/Skeleton";

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "home"])),
		},
	};
}

const Events: React.FC = () => {
	const { t } = useTranslation();
	const [LatestInitiatuves, setLatestInitiatuves] = React.useState([]);
	const [UpcommingInitiatuves, setUpcommingInitiatuves] = React.useState([]);
	const [Loader, setLoader] = React.useState(true);

	React.useEffect(() => {
		setLoader(true);
		axios
			.get("https://clean-iraq-campaigns.murtadha-altameemi2156.workers.dev")
			.then((response) => {
				setLatestInitiatuves(response.data.slice(0, 4));
				setUpcommingInitiatuves(response.data.slice(4, 7));
				setLoader(false);
			});
	}, []);

	return (
		<>
			<Hero
				bg="bg-[url('/images/events_hero.JPG')]"
				title={t("Events / Campaign")}
			/>
			<div className="container mx-auto">
				<section className="py-10 flex flex-wrap lg:flex-nowrap justify-center items-center">
					<div className="px-10">
						<p className="h3 font-medium  pb-10  text-[30px]">
							{t("I just went out to ask for reform.” These words carry a lot of meanings and teach us a lot, and one of the messages we learn from this is “Reform is to preserve the environment and leave it clean!")}
						</p>
						<p className="h3 font-medium  pb-10  text-[30px]">
							{t("Therefore, we are very happy with our participation in these large campaigns throughout Iraq, and it was an honor for us to be part of the ongoing reform with our heroic youth to preserve the environment and help spread awareness more")}
						</p>
					</div>
					<video className="rounded-[12px] h-[450px]" controls autoPlay >
						<source src="/images/@clean.mp4" />
					</video>
				</section>
				<section className="grid justify-items-center items-center gap-5 py-10">
					<h2 className="h2 py-10">{t("Up Comming Events")}</h2>
					<p className="h3 font-medium  pb-10 text-center text-[30px]">
						{t("Cleaning Iraq starts with you, the choice is yours, and your hand makes the difference. Our campaigns are everywhere in Iraq. Join us and be part of the change. With your efforts and participation, we achieve the best for our country.")}
					</p>
					<div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-10">
						{LatestInitiatuves.map(
							(item, key) =>
								!Loader &&
								item["Photos"] && (
									<div key={key} data-aos="fade-up" data-aos-duration="1000">
										<EventCard
											Province={item["Location Description Arabic"]}
											photo={item["Photos"][0]["full"]["url"]}
											Location_Description={item["Province"]}
											Number_of_Trash_Bags={item["Number of Trash Bags"]}
											Number_of_Volunteers={item["Number of Volunteers"]}
										/>
									</div>
								)
						)}
						{Loader && <Skeleton repeat={3} direction="col" />}
					</div>
				</section>
				<section className="grid justify-items-center items-center gap-5 py-10">
					<h2 className="h2 py-10">{t("Past Events")}</h2>
					<p className="h3 font-medium  pb-10 text-center text-[30px]">
						{t("Thank you to everyone involved in the clean-up campaign, thanks to you we have made a huge change and made these places clean and beautiful.")}
					</p>
					<div className="w-full grid md:grid-cols-2 xl:grid-cols-3 gap-10">
						{UpcommingInitiatuves.map(
							(item, key) =>
								!Loader &&
								item["Photos"] && (
									<div
										key={key}
										className=""
										data-aos="fade-up"
										data-aos-duration="1000"
									>
										<EventCard
											Province={item["Location Description Arabic"]}
											photo={item["Photos"][0]["full"]["url"]}
											Location_Description={item["Province"]}
											Number_of_Trash_Bags={item["Number of Trash Bags"]}
											Number_of_Volunteers={item["Number of Volunteers"]}
										/>
									</div>
								)
						)}
						{Loader && <Skeleton repeat={3} direction="col" />}
					</div>
					<p className="h3 font-medium pt-20 text-center text-[30px]">
						{t("We can all make a positive change, and we must cooperate and strive for a cleaner and more beautiful Iraq. Register your name and be part of the family of ambassadors of cleanliness")}
					</p>
				</section>
			</div>
			<div className="devider" />
			<JoinUs />
			<div className="devider" />
		</>
	);
};

export default Events;