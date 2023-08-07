import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PostCard(props) {
	return (
		<article
			data-aos="fade-up"
			data-aos-duration={props.duration ? props.duration : 1000}
			className={`grid md:grid-${props.direction}-2 gap-6`}
		>
			<div className={`w-full h-[250px] relative`}>
				<Image
					className="-z-10 rounded-md"
					src={props.image}
					fill
					objectFit="cover"
				/>
			</div>
			<div className="flex flex-col gap-3 relative">
				{props.new && (
					<span class="animate-ping absolute inline-flex w-2 h-2 rounded-full bg-primary right-0 top-1"></span>
				)}
				<h3 className="text-[#548B68] body-bold">
					{props.author} • {props.date}
				</h3>
				<div className="flex justify-between">
					<h3 className="h3">{props.title}</h3>
					<Image src="/images/arrow-up-right.svg" width={35} height={35} />
				</div>
				<p className="body grow text-[#667085] ">{props.excerpt}</p>
				<div className="flex flex-row">
					{props.tags.map((tag) => {
						return (
							<span className="rounded-lg bg-secondary text-white px-2 me-2">
								{tag}
							</span>
						);
					})}
				</div>
			</div>
		</article>
	);
}
