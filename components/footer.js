import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faInstagram,
	faLinkedin,
	faFacebook,
	faTwitter,
	faTiktok,
	faYoutube,
} from "@fortawesome/react-fontawesome";
import { t } from "i18next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "home"])),
		},
	};
};

const Footer = () => {
	const { t } = useTranslation();

	let Campaign = [
		{ name: "Home", link: "/" },
		{ name: "Who are we ?", link: "/About Us" },
		{ name: "Our Mission", link: "/About Us" },
		{ name: "Our Team", link: "/About Us" },
		{ name: "About us", link: "/About Us" },
		{ name: "Contact", link: "/Contact Us" },
	];
	let Resources = [
		{ name: "Blog", link: "/Blog" },
		{ name: "Newsletter", link: "/" },
		{ name: "Past Events", link: "/Events" },
		{ name: "Up Comming Events", link: "/Events" },
		{ name: "Initiatives", link: "/Initiatives" },
		{ name: "Support", link: "/Contact Us" },
	];
	let Posts = [
		{
			image: "/images/f1.png",
			Subtitle: "Bill Walsh leadership lessons",
			imgAlt: "Recent Posts",
			link: "/",
		},
		{
			image: "/images/f2.png",
			Subtitle: "Bill Walsh leadership lessons",
			imgAlt: "Recent Posts",
			link: "/",
		},
		{
			image: "/images/f3.png",
			Subtitle: "Bill Walsh leadership lessons",
			imgAlt: "Recent Posts",
			link: "/",
		},
	];
	const socials = [
		{
			name: "Twitter",
			icon: "fa-brands fa-twitter",
			url: "https://www.twitter.com",
		},
		{
			name: "LinkedIn",
			icon: "fa-solid fa-twitter",
			url: "https://www.linkedin.com",
		},
		{
			name: "Facebook",
			icon: "fa-solid fa-twitter",
			url: "https://facebook.com",
		},
		{
			name: "Youtube",
			icon: "fa-solid fa-twitter",
			url: "https://youtube.com",
		},
		{
			name: "Instagram",
			icon: "fa-solid fa-twitter",
			url: "https://Instagram.com",
		},
		{
			name: "TikTok",
			icon: "fa-solid fa-twitter",
			url: "https://tiktok.com",
		},
	];
	return (
		<footer className=" ">
			<section className="px-10 bg-primary md:grid md:grid-cols-2 md:gap-x-[44px] md:pt-8 md:pb-4 xl:grid xl:grid-cols-5">
				<div className="flex justify-center items-center py-[20px] gap-[10px] ">
					<Image
						className="w-[95px} h-[86px] md:w-[307px] md:h-[278px] xl:w-[290px] xl:h-[257px]"
						src="/images/logo.png"
						alt="clean_Irq"
						width={95}
						height={86}
					/>
				</div>
				<div className="hidden xl:grid">
					<h3 className="text-[#E4A954] font-semibold text-[1.2rem] pl-10 py-3">
						{t("Recent Posts")}
					</h3>
					{Posts.map((item) => (
						<div
							key={item.image}
							className="flex justify-center items-center gap-2"
						>
							<a href={item.link}>
								<Image
									className="w-[73px] h-[70px]"
									src={item.image}
									alt="Picture of the author"
									width={73}
									height={70}
								/>
							</a>
							<a className="text-white w-[110px]" href={item.link}>
								{t(item.Subtitle)}
							</a>
						</div>
					))}
				</div>
				<div className="flex-column text-center  md:text-start md:gap-[16px] md:pl-[120px]">
					<h3 className="text-[#E4A954] font-semibold text-[1.2rem] py-3">
						{t("Campaign")}
					</h3>
					<ul className="">
						{Campaign.map((link) => (
							<li key={link.name} className="py-2">
								<a
									href={link.link}
									className="text-[#EAECF0] font-medium text-[16px] md:gap-[8px]"
								>
									{t(link.name)}
								</a>
							</li>
						))}
					</ul>
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
				<div className="flex-column text-center md:text-start md:gap-[16px] md:pl-[120px]">
					<h3 className="text-[#E4A954] font-semibold text-[1.2rem] py-3">
						{t("Social")}
					</h3>
					<ul className="">
						{socials.map((link) => (
							<li key={link.name} className="py-2">
								<a
									href={link.url}
									className="text-[#EAECF0] font-medium text-[16px]"
								>
									{t(link.name)}
								</a>
							</li>
						))}
					</ul>
				</div>
			</section>
			<section className="h-[88px] bg-[#437153] flex justify-center items-center md:grid md:grid-cols-2 md:gap-x-[44px]">
				<h3 className="text-white text-center">
					{t("© 2023 Iraq Clean Campaign. All rights reserved.")}
				</h3>
				<div className="hidden md:flex justify-center ">
					{socials.map(({ icon, url }) => (
						<a key={url} href={url} className="px-4">
							<FontAwesomeIcon
								className="text-white"
								key={url}
								icon={icon}
								size="2x"
							/>
						</a>
					))}
				</div>
			</section>
		</footer>
	);
};

export default Footer;
