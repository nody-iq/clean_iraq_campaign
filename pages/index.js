import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostCard from "../components/postCard";
import CountUp from "react-countup";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "home"])),
		},
	};
}

export default function Home() {
	const { t } = useTranslation();

	const [Statistic, setStatistic] = React.useState([
		{
			icon: "fa-solid fa-clock",
			count: "30",
			title: "Years",
			symbol: "",
		},
		{
			icon: "fa-solid fa-users",
			count: "109",
			title: "People",
			symbol: "K",
		},
		{
			icon: "fa-solid fa-location-dot",
			count: "60",
			title: "Locations",
			symbol: "+",
		},
		{
			icon: "fa-solid fa-diagram-project",
			count: "49322",
			title: "Projects",
			symbol: "",
		},
	]);

	const [LatestInitiatuves, setLatestInitiatuves] = React.useState([
		{
			title: "Latest Initiatives",
			author: "Ahmed Khalid",
			excerpt:
				"Linear helps streamline software projects, sprints, tasks, and bug tracking.Here’s how to get...",
			tags: ["Tag1", "Tag2"],
			date: "2015-08-09",
			direction: "col",
			image: "/images/Copy of DSC00394.jpg",
		},
		{
			title: "Latest Initiatives",
			author: "Ahmed Khalid",
			excerpt:
				"Linear helps streamline software projects, sprints, tasks, and bug tracking.Here’s how to get...",
			tags: ["Tag1", "Tag2"],
			date: "2015-08-09",
			direction: "col",
			image: "/images/Copy of DSC00394.jpg",
		},
	]);

	const [LatestPosts, setLatestPosts] = React.useState([
		{
			title: "Latest Initiatives",
			author: "Ahmed Khalid",
			excerpt:
				"Linear helps streamline software projects, sprints, tasks, and bug tracking.Here’s how to get...",
			tags: ["Tag1", "Tag2"],
			date: "2015-08-09",
			direction: "col",
			image: "/images/Copy of DSC00394.jpg",
		},
		{
			title: "Latest Initiatives",
			author: "Ahmed Khalid",
			excerpt:
				"Linear helps streamline software projects, sprints, tasks, and bug tracking.Here’s how to get...",
			tags: ["Tag1", "Tag2"],
			date: "2015-08-09",
			direction: "col",
			image: "/images/Copy of DSC00394.jpg",
		},
		{
			title: "Latest Initiatives",
			author: "Ahmed Khalid",
			excerpt:
				"Linear helps streamline software projects, sprints, tasks, and bug tracking.Here’s how to get...",
			tags: ["Tag1", "Tag2"],
			date: "2015-08-09",
			direction: "col",
			image: "/images/Copy of DSC00394.jpg",
		},
	]);

	const [Team, setTeam] = React.useState([
		{
			name: "Albert Flores",
			role: "Founder of GearUp",
			img: "/images/11.png",
		},
		{
			name: "Leslie Alexander",
			role: "Co-Founder of Womenia",
			img: "/images/2.png",
		},
		{
			name: "Courtney Henry",
			role: "Founder of CH Beauty",
			img: "/images/3.png",
		},
	]);

	mapboxgl.accessToken =
		"pk.eyJ1IjoidGhlLW11cnQiLCJhIjoiY2wyOW9xdnB4MGwyODNrbGcwM3VjaXRpZiJ9.YkeXgh-MMQh0ZAyNEIjdZw";

	useEffect(() => {
		// const map = new mapboxgl.Map({
		// 	container: "map-container",
		// 	style: "mapbox://styles/mapbox/streets-v11",
		// 	center: ["44.361488", "33.312805"],
		// 	zoom: 5,
		// });
		// new mapboxgl.Marker({
		// 	color: "red",
		// 	offset: ["46.327365561369405", "83.228097350139436"],
		// });
		// 	.setLngLat(["36.327365561369405", "83.228097350139436"])
		// 	.setPopup(new mapboxgl.Popup().setText("title")) // Optional: Add a popup with title
		// 	.addTo(map);
		// const eventMarkers = [
		// 	{
		// 		id: 2,
		// 		lngLat: ["44.361488", "33.312805"],
		// 		title: "Event 1",
		// 	},
		// 	// { id: 2, lngLat: [longitude2, latitude2], title: "Event 2" },
		// ];
		// eventMarkers.forEach((eventMarker) => {
		// 	const { lngLat, title } = eventMarker;
		// 	new mapboxgl.Marker()
		// 		.setLngLat(lngLat)
		// 		.setPopup(new mapboxgl.Popup().setText(title)) // Optional: Add a popup with title  justify-center
		// 		.addTo(map);
		// });
		// return () => map.remove(); // Clean up the map when the component unmounts
	}, []);

	return (
		<main>
			<div className="flex flex-row items-center justify-center bg-secondary/[0.3] md:items-stretch md:grid md:grid-cols-2 lg:bg-inherit relative z-20">
				<div className="flex flex-col w-full justify-center items-center justify-self-start absolute md:ps-8 md:relative">
					<div
						data-aos="fade-right"
						data-aos-duration="1000"
						className="lg:w-[64%] text-center text-white mt-28 md:mt-0 md:text-left md:text-black z-10 flex flex-col"
					>
						<h1 className="fade-right h3 md:h2 md:text-left rtl:md:text-right lg:h1">
							{t("CLEANLINESS AMBASSADORS IN IRAQ")}
						</h1>
						<h3 className="h3 text-[1rem] md:text-[1.4rem] md:text-left rtl:md:text-right">
							{t(
								"A voluntary campaign to organize gatherings to clean public places and spread the culture of cleanliness"
							)}
						</h3>
						<button className="btn py-2 md:py-[1rem] md:w-fit" type="submit">
							{t("Join us")}
						</button>
					</div>

					<div
						data-aos="fade-right"
						data-aos-duration="2000"
						className="hidden absolute left-0 rtl:right-0 bottom-0 -z-10 lg:block"
					>
						<Image
							className="rtl:transform rtl:scale-x-[-1]"
							src="/images/Rectangle 10.png"
							alt="Picture of the author"
							width={608.55}
							height={516.19}
						/>
					</div>
				</div>
				<div
					data-aos="fade-left"
					data-aos-duration="1000"
					className="fade-left md:inherit justify-self-center relative md:justify-self-end md:me-8 -z-30"
				>
					<Image
						className="opacity-75 md:opacity-100"
						src="/images/Group30.png"
						alt="Picture of the author"
						width={533}
						height={533}
					/>
					<div className="animate-bounce bg-white w-max rounded-lg shadow-xl p-2 absolute top-10 right-5 md:p-3 md:right-0 md:top-20">
						<FontAwesomeIcon
							icon="fa-solid fa-comment-dots"
							className="px-2 lg:text-[1.5em]"
							color="#E4A954"
						/>
						<span class="body-bold">{t("Get Involved")}</span>
					</div>
					<div className="animate-bounce bg-white w-max rounded-lg shadow-xl p-2 absolute bottom-5 left-2 md:left-0 md:bottom-12">
						<FontAwesomeIcon
							icon="fa-solid fa-user-group"
							className="px-2 lg:text-[1.5em]"
							color="#E4A954"
						/>
						<span class="body-bold">{t("Partner with Us")}</span>
					</div>
				</div>
			</div>
			<div className="lg:devider" />
			<div className="w-full relative h-auto flex flex-col justify-center bg-[#154A28]/[0.6] lg:h-[500px]">
				<Image
					className="-z-10"
					src="/images/Copy of DSC00388 1.png"
					fill
					objectFit="cover"
				/>

				<div
					data-aos="fade-up"
					data-aos-duration="1000"
					className="grid grid-flow-row justify-items-center justify-center gap-y-20 py-28 md:grid-cols-2 lg:grid-cols-4"
				>
					{Statistic.map((item) => {
						return (
							<div className="flex flex-col justify-center gap-2 align-middle rounded-lg bg-secondary text-center w-[218px] h-[190px]">
								<FontAwesomeIcon
									icon={item.icon}
									className="px-2"
									size="2x"
									color="white"
								/>
								<span className="h2 text-white">
									<CountUp delay={1} end={item.count} enableScrollSpy={true} />
									{item.symbol}
								</span>
								<h2 className="h3 text-white">{t(item.title)}</h2>
							</div>
						);
					})}
				</div>
			</div>
			<div className="devider" />
			<div className="container mx-auto mb-2">
				<h2 className="h2 mb-8 md:text-center lg:text-left rtl:lg:text-right">
					{t("Latest Initiatives")}
				</h2>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center lg:gap-6">
					<div data-aos="fade-in" className="flex flex-col gap-8">
						{LatestInitiatuves.map((item) => {
							return (
								<PostCard
									title={item.title}
									author={item.author}
									excerpt={item.excerpt}
									tags={item.tags}
									date={item.date}
									image={item.image}
									direction="cols"
									new={true}
								/>
							);
						})}
					</div>
					<div data-aos="fade-in">
						<div
							className="shadow-xl w-full h-[500px] lg:h-full"
							id="map-container"
						/>
					</div>
				</div>
			</div>
			<div className="devider" />
			<div className="container mx-auto text-center">
				<h2 className="h2">{t("Our Team")}</h2>
				<p className="body mb-10">
					{t("Meet Our Amazing Hygiene Ambassadors Team Members In Iraq")}.
				</p>
				<div className="flex flex-col items-center md:flex-row gap-10 justify-center">
					{Team.map((item, key) => {
						return (
							<div
								data-aos="fade-in"
								data-aos-duration={2000 - key * 300}
								className="shadow-xl bg-gradient-to-t from-black via-transparent rounded-xl w-[285px] h-[411px] relative overflow-hidden lg:h-[511px]"
							>
								<Image
									className="-z-10"
									src={item.img}
									fill
									objectFit="cover"
									objectPosition="center center"
								/>
								<div className="flex flex-col justify-end h-full p-5">
									<h2 className="body-bold text-white text-center">
										{item.name}
									</h2>
									<h2 className="body text-[#D4D4D8] text-center">
										{item.role}
									</h2>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="devider" />
			<div className="container mx-auto mb-2">
				<h2 className="h2 mb-8 text-center lg:text-left rtl:lg:text-right">
					{t("Recent Posts")}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:flex lg:justify-center gap-10">
					{LatestPosts.map((item, key) => {
						return (
							<div>
								<PostCard
									title={item.title}
									author={item.author}
									excerpt={item.excerpt}
									tags={item.tags}
									date={item.date}
									image={item.image}
									direction="rows"
									duration={(key + 1) * 300}
								/>
							</div>
						);
					})}
				</div>
			</div>
			<div className="devider" />
			<div className="container mx-auto text-center md:w-fit">
				<h2 className="h3 md:h2">{t("Subscribe to our newsletter")}</h2>
				<p className="body mb-10">
					{t(
						"Subscribe to learn about the latest events , Initiatives, and updates."
					)}
				</p>

				<div className="flex flex-col md:flex-row gap-2 md:gap-5 justify-center">
					<input
						type="text"
						className="border-slate-300 input grow w-full"
						placeholder={t("Enter your Email")}
					/>
					<button className="btn py-1 px-4" type="submit">
						{t("Subscribe")}
					</button>
				</div>
				<p className="text-left text-[#667085] mt-2">
					{t("We care about your data in our privacy policy")}
				</p>
			</div>
			<div className="devider" />
		</main>
	);
}
