import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import Link from "next/link";

interface props {
	title: string;
	author: string;
	excerpt: string;
	date: string;
	thumbnail: string;
	direction: string;
	duration: number;
	notify: boolean;
	url: string;
}

const PostCard: React.FC<props> = ({
	title,
	author,
	excerpt,
	date,
	thumbnail,
	direction,
	duration,
	notify,
	url,
}) => {
	const { t } = useTranslation();

	return (
		<article
			data-aos="fade-up"
			data-aos-duration={duration ? duration : 1000}
			className={`grid md:grid-${direction}-2 gap-6`}
		>
			<div className={`w-full h-[200px] relative`}>
				<Image
					className="rounded-lg"
					src={thumbnail}
					alt="post image"
					fill
					objectFit="cover"
				/>
			</div>
			<div className="flex flex-col gap-3 relative">
				{notify && (
					<span className="ltr:right-0 rtl:left-0 animate-ping absolute w-2 h-2 rounded-full bg-primary top-1"></span>
				)}
				<h3 className="text-[#548B68] body-bold flex gap-2">
					<span>{author}</span> • <span>{date}</span>
				</h3>
				<div className="flex justify-between">
					<h3 className="h3 line-clamp-1">{title}</h3>
				</div>
				<div className="grow">
					<p className="body text-[#667085] line-clamp-2">
						{excerpt.replace(/\r?\n/g, "")}
					</p>
				</div>
				<Link
					className="flex items-center text-white w-fit bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-1 text-center mb-2"
					href={url}
				>
					{t("Read more")}
					<svg
						className="w-3.5 h-3.5 mx-2 rtl:scale-x-[-1]"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 14 10"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M1 5h12m0 0L9 1m4 4L9 9"
						/>
					</svg>
				</Link>
			</div>
		</article>
	);
};

export default PostCard;
