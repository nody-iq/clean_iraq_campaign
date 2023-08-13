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
				<section className="grid justify-items-center items-center gap-5 py-10">
					<h2 className="h2 py-10">{t("Up Comming Events")}</h2>

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
				</section>
			</div>
			<div className="devider" />
			<JoinUs />
			<div className="devider" />
		</>
	);
};

export default Events;
