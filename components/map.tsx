import React, { useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";

const Map: React.FC = () => {
	useEffect(() => {
		mapboxgl.accessToken =
			"pk.eyJ1IjoidGhlLW11cnQiLCJhIjoiY2wyOW9xdnB4MGwyODNrbGcwM3VjaXRpZiJ9.YkeXgh-MMQh0ZAyNEIjdZw";

		const map = new mapboxgl.Map({
			attributionControl: false,
			FullscreenControl: true,
			container: "map-container",
			style: "mapbox://styles/mapbox/streets-v11",
			center: ["44.361488", "33.312805"],
			zoom: 5,
		});

		axios
			.get("https://cleanup-iraq.s3.ap-southeast-1.amazonaws.com/data.json")
			.then((response) => {
				const markers = response.data;
				for (let i = 0; i < markers.length; i += 2) {
					const name = markers[i];
					const data = markers[i + 1].split(" ");
					const lat = data[0];
					const lon = data[1];
					const photos = data.slice(2);

					const el = document.createElement("div");
					el.id = "marker";
					new mapboxgl.Marker({ element: el })
						.setLngLat([lon, lat])
						.setPopup(
							new mapboxgl.Popup().setHTML(
								"<h2 class='h3 text-center mb-2'>" +
									name +
									"</h2> <div class={`w-[250px] h-[250px] relative`}> <Image class='rounded-md' src='https://cleanup-iraq.s3.ap-southeast-1.amazonaws.com/" +
									photos[0] +
									"' alt='post image' fill objectFit='cover' /> </div>"
							)
						)
						.addTo(map);
				}
			});

		return () => map.remove();
	}, []);

	return <div className="w-full h-full" id="map-container" />;
};

export default Map;
