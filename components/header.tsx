import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBars,
	faBullhorn,
	faHeart,
	faHouse,
	faLocationDot,
	faMessage,
	faQuestion,
	faTrophy,
	faXmark,
} from "@fortawesome/free-solid-svg-icons";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "home"])),
		},
	};
}

const Header: React.FC = () => {
	const { t, i18n, ready } = useTranslation();

	// if (!ready) return "loading translations...";

	const [Links, setLinks] = React.useState([
		{
			name: "Home",
			link: "/",
			icons: (
				<FontAwesomeIcon
					icon={faHouse}
					className="px-2 text-[1.5rem]"
					color="#E4A954"
				/>
			),
		},
		{
			name: "About Us",
			link: "/about_us",
			icons: (
				<FontAwesomeIcon
					icon={faQuestion}
					className="px-2 text-[1.5rem]"
					color="#E4A954"
				/>
			),
		},
		{
			name: "Initiatives",
			link: "/initiatives",
			icons: (
				<FontAwesomeIcon
					icon={faTrophy}
					className="px-2 text-[1.5rem]"
					color="#E4A954"
				/>
			),
		},
		{
			name: "Events",
			link: "/events",
			icons: (
				<FontAwesomeIcon
					icon={faBullhorn}
					className="px-2 text-[1.5rem]"
					color="#E4A954"
				/>
			),
		},
		{
			name: "Map",
			link: "/map",
			icons: (
				<FontAwesomeIcon
					icon={faLocationDot}
					className="px-2 text-[1.5rem]"
					color="#E4A954"
				/>
			),
		},
		{
			name: "Contact Us",
			link: "/contact_us",
			icons: (
				<FontAwesomeIcon
					icon={faMessage}
					className="px-2 text-[1.5rem]"
					color="#E4A954"
				/>
			),
		},
		{
			name: "Blog",
			link: "/blog",
			icons: (
				<FontAwesomeIcon
					icon={faHeart}
					className="px-2 text-[1.5rem]"
					color="#E4A954"
				/>
			),
		},
	]);

	let [open, setOpen] = React.useState(false);

	return (
		<header className="shadow-md md:shadow-lg ">
			<div className="container mx-auto flex justify-between items-center pt-4 pb-1 h-[62px] md:h-[80px] md:pt-0">
				<a href="/">
					<Image
						className=" w-[51.56px] h-[46.41px] md:w-[100px] md:h-[90px] cursor-pointer "
						src="/images/logo.png"
						alt="Picture of the author"
						width={100}
						height={90}
					/>
				</a>
				<nav className="xl:flex  items-center justify-between  bg-white xl:px-10 px-7 z-30">
					<ul
						className={` md:mt-[30px] xl:flex xl:items-center xl:pb-6  absolute xl:static bg-[#fff] xl:z-auto  left-0 w-full xl:w-auto xl:pl-0 pl-9 transition-all duration-500 ease-in ${
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
								<Link
									className="font-bold md:text-[20px] duration-500"
									href={link.link}
								>
									{t(link.name)}
								</Link>
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
								icon={faXmark}
								className="px-2 text-[2rem]"
								color="#E4A954"
							/>
						) : (
							<FontAwesomeIcon
								icon={faBars}
								className="px-2 text-[2rem]"
								color="#E4A954"
							/>
						)}
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
