import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PostCard from "../components/postCard";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "home"])),
		},
	};
};

export default function Home() {
	mapboxgl.accessToken =
		"pk.eyJ1IjoidGhlLW11cnQiLCJhIjoiY2wyOW9xdnB4MGwyODNrbGcwM3VjaXRpZiJ9.YkeXgh-MMQh0ZAyNEIjdZw";

	useEffect(() => {
		const map = new mapboxgl.Map({
			container: "map-container",
			style: "mapbox://styles/mapbox/streets-v11",
			center: ["44.361488", "33.312805"],
			zoom: 5,
		});
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
		return () => map.remove(); // Clean up the map when the component unmounts
	}, []);

	return (
		<main>
			{/* <div className="devider" /> */}

			<div className="md:container overflow-hidden mx-auto w-full h-screen bg-cover bg-center lg:bg-[url('/images/46e6e2148986c4d0850c4434393b07c0.png')]">
				<div
					className="shadow-xl w-full lg:h-5/6 md:my-10 md:ms-1"
					id="map-container"
				/>
			</div>

			<div className="devider" />
		</main>
	);
}
