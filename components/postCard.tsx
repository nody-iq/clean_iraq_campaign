import React from "react";
import Image from "next/image";

interface props {
	title: string;
	author: string;
	excerpt: string;
	date: string;
	photos: Array<string>;
	direction: string;
	duration: number;
	notify: boolean;
}

const PostCard: React.FC<props> = ({
	title,
	author,
	excerpt,
	date,
	photos,
	direction,
	duration,
	notify,
}) => {
	return (
		<article
			data-aos="fade-up"
			data-aos-duration={duration ? duration : 1000}
			className={`grid md:grid-${direction}-2 gap-6`}
		>
			<div className={`w-full h-[250px] relative`}>
				<Image
					className="rounded-lg"
					src={photos[0]}
					alt="post image"
					fill
					objectFit="cover"
				/>
			</div>
			<div className="flex flex-col gap-3 relative">
				{notify && (
					<span className="ltr:right-0 rtl:left-0 animate-ping absolute w-2 h-2 rounded-full bg-primary top-1"></span>
				)}
				<h3 className="text-[#548B68] body-bold">
					{author} • {date}
				</h3>
				<div className="flex justify-between">
					<h3 className="h3">{title}</h3>
					<Image
						src="/images/arrow-up-right.svg"
						alt="post image"
						width={35}
						height={35}
					/>
				</div>
				<p className="body grow text-[#667085] line-clamp-2">
					{excerpt.split("<br>")}
				</p>
			</div>
		</article>
	);
};

export default PostCard;
