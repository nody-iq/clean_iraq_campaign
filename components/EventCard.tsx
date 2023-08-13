import Image from "next/image";
import { Table } from "flowbite-react";
import { useTranslation } from "next-i18next";
import CountUp from "react-countup";

interface props {
	Province: string;
	Number_of_Trash_Bags: number;
	Location_Description: string;
	Number_of_Volunteers: number;
	photo: string;
}

const EventCard: React.FC<props> = ({
	Province,
	Number_of_Trash_Bags,
	Location_Description,
	Number_of_Volunteers,
	photo,
}) => {
	const { t } = useTranslation();

	return (
		<div className="group rounded-[12px] relative drop-shadow-[0px_0px_20px_rgba(0,0,0,0.3)] w-full h-[491px]">
			<Image
				className="drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[12px]"
				src={photo}
				alt="..."
				fill
				objectFit="cover"
				sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
			/>

			<Image
				className="hidden md:block absolute -left-10"
				src="/images/Group 12.svg"
				alt="Picture of the author"
				width={94.718}
				height={100}
			/>
			<div className="flex flex-col gap-2 justify-end py-5 overflow-hidden relative w-full h-full">
				<div className="absolute bottom-0 w-full opacity-60 blur-[47.0186px] rotate-0 bg-[linear-gradient(270deg,_#548B68_-0.55%,_#437153_22.86%,_#FF9E54_48.36%,_#FFCC4D_73.33%,_#FF675E_99.34%)] rtl:bg-[linear-gradient(90deg,_#548B68_-0.55%,_#437153_22.86%,_#FF9E54_48.36%,_#FFCC4D_73.33%,_#FF675E_99.34%)] md:w-[350px] md:h-[188px] xl:w-[418px] xl:h-[233px]] " />
				<h2 className="h2 z-10 font-bold text-white pl-2 rtl:pr-2">
					{Province}
				</h2>
				<h3 className="z-10 w-fit py-3 px-2 mx-2 text-[13px] font-bold bg-white rounded-[12px] text-secondary bg-opacity-70 md:text-[20px] lg:text-[24px]">
					{Location_Description}
				</h3>
				<div className="absolute inset-y-full h-full w-full transition duration-700 ease-in-out group-hover:-translate-y-full bg-black/[0.5] z-30 text-white flex flex-col justify-center">
					<div className="flex p-4 h3">
						<h3 className="flex-grow">{t("Number of trash bags")}</h3>
						<h3 className="">{Number_of_Trash_Bags}</h3>
					</div>
					<div className="flex p-4 h3">
						<h3 className="flex-grow">{t("Number of volunteers")}</h3>
						<h3 className="">{Number_of_Volunteers}</h3>
					</div>
					<div className="flex p-4 h3">
						<h3 className="flex-grow">{t("Location description")}</h3>
						<h3 className="">{Location_Description}</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
