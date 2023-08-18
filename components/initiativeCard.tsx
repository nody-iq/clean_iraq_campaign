import React from "react";
import Image from "next/image";
import { Table } from "flowbite-react";
import { useTranslation } from "next-i18next";
import CountUp from "react-countup";
import { useRouter } from "next/router";

interface props {
	Date: string;
	Province: string;
	GPS_Lat: string;
	GPS_Lon: string;
	Number_of_Trash_Bags: number;
	Location_Description: string;
	Location_Description_Arabi: string;
	Number_of_Volunteers: number;
	Photo: string;
	direction: string;
	duration: number;
	notify: boolean;
}

const InitiativeCard: React.FC<props> = ({
	Date,
	Province,
	GPS_Lat,
	GPS_Lon,
	Number_of_Trash_Bags,
	Location_Description,
	Location_Description_Arabi,
	Number_of_Volunteers,
	Photo,
	direction,
	duration,
	notify,
}) => {
	const { t } = useTranslation();
	const router = useRouter();

	return (
		<article
			data-aos="fade-up"
			data-aos-duration={duration ? duration : 1000}
			className={`grid md:grid-${direction}-2 gap-6`}
		>
			<div className={`w-full h-[250px] relative`}>
				<Image
					className="-z-10 rounded-md"
					src={Photo}
					alt="post image"
					fill
					objectFit="cover"
				/>
			</div>
			<div className="flex flex-col gap-3 relative">
				<h3 className="text-[#548B68] body-bold">{Date}</h3>
				<div className="flex justify-between">
					<h3 className="h3">{Location_Description}</h3>
					<Image
						src="/images/arrow-up-right.svg"
						alt="post image"
						width={35}
						height={35}
					/>
				</div>
				<Table>
					<Table.Body className="divide-y">
						<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<Table.Cell className="text-base rtl:text-right whitespace-nowrap font-medium text-gray-900 dark:text-white">
								{t("Number of trash bags")}
							</Table.Cell>
							<Table.Cell className="text-[#548B68] text-base font-bold">
								<CountUp
									delay={1}
									end={Number_of_Trash_Bags}
									enableScrollSpy={true}
								/>
							</Table.Cell>
						</Table.Row>
						<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<Table.Cell className="text-base rtl:text-right whitespace-nowrap font-medium text-gray-900 dark:text-white">
								{t("Number of volunteers")}
							</Table.Cell>
							<Table.Cell className="text-[#548B68] text-base font-bold">
								<CountUp
									delay={1}
									end={Number_of_Volunteers}
									enableScrollSpy={true}
								/>
							</Table.Cell>
						</Table.Row>
						<Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
							<Table.Cell className="text-base rtl:text-right whitespace-nowrap font-medium text-gray-900 dark:text-white">
								{t("Location description")}
							</Table.Cell>
							<Table.Cell className="text-[#548B68] text-base font-bold">
								{Province}
							</Table.Cell>
						</Table.Row>
					</Table.Body>
				</Table>
			</div>
		</article>
	);
};

export default InitiativeCard;
