import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faTwitter,
	faFacebook,
	faYoutube,
	faInstagram,
	faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import axios from "axios";

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "home"])),
		},
	};
}

const Footer: React.FC = () => {
	const { t } = useTranslation();
	const [socials, setSocials] = React.useState([
		{
			name: "Twitter",
			icon: faTwitter,
			url: "https://www.linkedin.com",
		},
		{
			name: "Facebook",
			icon: faFacebook,
			url: "https://facebook.com",
		},
		{
			name: "Youtube",
			icon: faYoutube,
			url: "https://youtube.com",
		},
		{
			name: "Instagram",
			icon: faInstagram,
			url: "https://Instagram.com",
		},
		{
			name: "TikTok",
			icon: faTiktok,
			url: "https://tiktok.com",
		},
	]);
	const [Resources, setResources] = React.useState([
		{ name: "Blog", link: "/Blog" },
		{ name: "Newsletter", link: "/" },
		{ name: "Past Events", link: "/Events" },
		{ name: "Up Comming Events", link: "/Events" },
		{ name: "Initiatives", link: "/Initiatives" },
		{ name: "Support", link: "/Contact Us" },
	]);
	const [Posts, setPosts] = React.useState([]);

	React.useEffect(() => {
		axios
			.get("https://run.mocky.io/v3/e4722147-2c24-4e86-9a2c-8b10940bdcfa")
			.then((response) => {
				setPosts(response.data.data.slice(0, 3));
			});
	}, []);

	return (
		<footer className="">
			<section className="px-10 py-10 bg-primary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-[44px] md:pt-8 md:pb-4">
				<div className="relative flex justify-center items-center gap-[10px] h-[17rem] md:h-full">
					<Image
						src="/images/logo.png"
						alt="clean_Irq"
						fill
						objectFit="contain"
					/>
				</div>
				<div className="hidden xl:grid">
					<h3 className="text-[#E4A954] font-semibold text-[1.2rem] py-3">
						{t("Recent Posts")}
					</h3>
					{Posts.map((item, key) => {
						return (
							<div key={key} className="flex justify-start items-center gap-2">
								<a href={item["link"]}>
									{item["photos"] && (
										<Image
											className="w-[73px] h-[70px] rounded"
											src={item["photos"][0]}
											alt="Picture of the author"
											width={73}
											height={70}
										/>
									)}
								</a>
								<a
									className="text-white w-[110px] flex-grow"
									href={item["link"]}
								>
									{t(item["title"])}
								</a>
							</div>
						);
					})}
				</div>
				<div className="flex-column text-center md:text-start md:gap-[16px] md:pl-[120px]">
					<h3 className="text-[#E4A954] font-semibold text-[1.2rem] py-3">
						{t("Resources")}
					</h3>
					<ul className="">
						{Resources.map((link) => (
							<li key={link.name} className="py-2">
								<a
									href={link.link}
									className="text-[#EAECF0] font-medium text-[16px]"
								>
									{t(link.name)}
								</a>
							</li>
						))}
					</ul>
				</div>
			</section>
			<section className="py-3 bg-[#437153] text-center flex flex-col md:flex-row justify-stretch gap-2">
				<div className="flex-grow">
					<h3 className="text-white">
						{t("© 2023 Iraq Clean Campaign. All rights reserved.")}
					</h3>
				</div>
				<div className="flex-grow flex justify-center gap-2">
					{socials.map((item, key) => (
						<a key={key} href={item.url} target="_blank">
							<FontAwesomeIcon
								icon={item.icon}
								className="px-2 text-[1.5rem]"
								color="white"
							/>
							<i className="fa-brands fa-twitter"></i>
						</a>
					))}
				</div>
			</section>
		</footer>
	);
};

export default Footer;
