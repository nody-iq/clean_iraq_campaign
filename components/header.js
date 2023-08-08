import React, { useState } from "react";
// import logoimg from "../public/images/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "home"])),
		},
	};
}


const Header = () => {
	const { t } = useTranslation();

	let Links = [
		{
			name: t("Home"),
			link: "/",
			icons: (
				<FontAwesomeIcon
					icon="fa-solid fa-house"
					className="px-2 text-[1.5rem]"
					color="#E4A954"
				/>
			),
		},
		{
			name: t("About Us"),
			link: "/About",
			icons: (
				<FontAwesomeIcon
					icon="fa-solid fa-question"
					className="px-2 text-[1.5rem]"
					color="#E4A954"
				/>
			),
		},
		{
			name: t("Initiatives"),
			link: "/Initiatives",
			icons: (
				<FontAwesomeIcon
					icon="fa-solid fa-trophy"
					className="px-2 text-[1.5rem]"
					color="#E4A954"
				/>
			),
		},
		{
			name: t("Events"),
			link: "/Events",
			icons: (
				<FontAwesomeIcon
					icon="fa-solid fa-bullhorn"
					className="px-2 text-[1.5rem]"
					color="#E4A954"
				/>
			),
		},
		{
			name: t("Map"),
			link: "/map",
			icons: (
				<FontAwesomeIcon
					icon="fa-solid fa-location-dot"
					className="px-2 text-[1.5rem]"
					color="#E4A954"
				/>
			),
		},
		{
			name: t("Contact Us"),
			link: "/Contact Us",
			icons: (
				<FontAwesomeIcon
					icon="fa-solid fa-message"
					className="px-2 text-[1.5rem]"
					color="#E4A954"
				/>
			),
		},
		{
			name: t("Blog"),
			link: "/Blog",
			icons: (
				<FontAwesomeIcon
					icon="fa-solid fa-heart"
					className="px-2 text-[1.5rem]"
					color="#E4A954"
				/>
			),
		},
	];

	let [open, setOpen] = useState(false);

	return (
		<header class="flex justify-between items-center w-[90%]  mx-auto pt-4 pb-1 h-[62px] md:h-[118px] md:pt-0">
			<a href="/">
				<Image
					className=" w-[51.56px] h-[46.41px] md:w-[100px] md:h-[90px] cursor-pointer "
					src="/images/logo.png"
					alt="Picture of the author"
					width={100}
					height={90}
				/>
			</a>
			<nav className="xl:flex items-center justify-between bg-white xl:px-10 px-7 z-30">
				<ul
					className={`md:mt-[30px] xl:flex xl:items-center xl:pb-8  absolute xl:static bg-[#fff] xl:z-auto  left-0 w-full xl:w-auto xl:pl-0 pl-9 transition-all duration-500 ease-in ${
						open ? "top-[60.5px] md:top-20" : "top-[-540px]"
					}`}
				>
					{Links.map((link) => (
						<li
							key={link.name}
							className="xl:ml-8 xl:my-0 my-7 hover:text-primary flex"
						>
							<div className="w-16 xl:hidden pr-3 pt-[2px] md:px-4 md:pt-1 md:text-3xl text-center">
								{link.icons}
							</div>
							<a
								href={link.link}
								className="font-bold md:text-[24px] duration-500"
							>
								{link.name}
							</a>
						</li>
					))}
				</ul>
			</nav>
			<div className="flex items-center gap-6">
				<LanguageSwitcher />
				<div
					onClick={() => setOpen(!open)}
					className="right-8 top-6 cursor-pointer xl:hidden"
				>
					{open ? (
						<FontAwesomeIcon
							icon="fa-solid fa-xmark"
							className="px-2 text-[2rem]"
							color="#E4A954"
						/>
					) : (
						<FontAwesomeIcon
							icon="fa-solid fa-bars"
							className="px-2 text-[2rem]"
							color="#E4A954"
						/>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
