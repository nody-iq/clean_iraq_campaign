import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "home"])),
		},
	};
}

const Initiatives: React.FC = () => {
	const { t } = useTranslation();
	// const [slides, setSlides] = useState([]); // State to store the photo URLs
	// this is a fack API 👇👇👇
	const slides = [
		{
			url: "/images/initiatves_n1.jpg",
		},
		{
			url: "/images/initiatves_n2.jpg",
		},
		{
			url: "/images/initiatves_n3.JPG",
		},

		{
			url: "/images/initiatves_n4.jpeg",
		},
		{
			url: "/images/initiatves_n5.jpg",
		},
	];
	// this is to git the photos from the d API 👇👇👇
	// useEffect(()=>{
	//   fetch("https://clean-iraq-campaigns.murtadha-altameemi2156.workers.dev")
	//   .then(res => res.json())
	//   .then(data => {
	//     const photoURLs = data.map(item => item.Photos[0]?.large.url); // Extracting large photo URLs
	//       setSlides(photoURLs)
	//       console.log(slides)
	//   })
	//   .catch(error => console.log("error",error))
	// },[])
	const [currentIndex, setCurrentIndex] = useState(2);
	const pervSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};
	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};
	const goToSlidse = (slideIndex) => {
		setCurrentIndex(slideIndex);
	};
	return (
		<>
			<main>
				<div className="intiativesContainer">
					<Hero
						bg="bg-[url('/images/banner.png')]"
						title={t("Campaign Initiatives")}
					/>
					<div className="InitiativesContent">
						<div className="InitiativesCard">
							<div className="CardText">
								<h2>{t("Initiatives Card Header")}</h2>

								<p>
									{t("Initiatives Card text")}
									<a href="#">{t("read More")}</a>
								</p>
							</div>
							<div className="CardImgs ">
								<img src={slides[currentIndex].url} alt="imgs" />
								{/* Left Arrow */}
								<div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
									<BsChevronCompactLeft onClick={pervSlide} size={30} />
								</div>
								{/* Right Arrow */}
								<div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
									<BsChevronCompactRight onClick={nextSlide} size={30} />
								</div>
								<div className="flex top-4 justify-center py-2">
									{slides.map((slide, slideIndex) => (
										<div
											key={slideIndex}
											onClick={() => goToSlidse(slideIndex)}
											className="text-xl cursor-pointer hover:text-2xl text-slate-500 transition-all"
										>
											<RxDotFilled />
										</div>
									))}
								</div>
							</div>
						</div>
						<div className="InitiativesCard">
							<div className="CardText">
								<h2> {t("Initiatives Card Header")}</h2>

								<p>
									{t("Initiatives Card text")}
									<a href="#">{t("read More")}</a>
								</p>
							</div>
							<div className="CardImgs ">
								<img src={slides[currentIndex].url} alt="imgs" />
								{/* Left Arrow */}
								<div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
									<BsChevronCompactLeft onClick={pervSlide} size={30} />
								</div>
								{/* Right Arrow */}
								<div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
									<BsChevronCompactRight onClick={nextSlide} size={30} />
								</div>
								<div className="flex top-4 justify-center py-2">
									{slides.map((slide, slideIndex) => (
										<div
											key={slideIndex}
											onClick={() => goToSlidse(slideIndex)}
											className="text-xl cursor-pointer hover:text-2xl text-slate-500 transition-all"
										>
											<RxDotFilled />
										</div>
									))}
								</div>
							</div>
						</div>
						<div className="read-more-about-Initiatives">
							<a >
								{" "}
								{t("read more about Initiatives BTN")}
							</a>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Initiatives;
