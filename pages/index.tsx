import React, { useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCommentDots,
	faUserGroup,
	faClock,
	faUsers,
	faLocationDot,
	faDiagramProject,
} from "@fortawesome/free-solid-svg-icons";
import Skeleton from "../components/Skeleton";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import PostCard from "../components/postCard";
import InitiativeCard from "../components/initiativeCard";
import CountUp from "react-countup";
import Map from "../components/map";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { GetStaticProps } from "next";
import Link from "next/link";

type PostFrontmatter = {
	title: string;
	slug: string;
};

type Props = {
	posts: PostFrontmatter[];
};

export const getStaticProps: GetStaticProps<Props> = async ({
	locale,
	params,
}) => {
	const postsDirectory = path.join(process.cwd(), "pages/blog/posts");

	const postFiles = fs.readdirSync(postsDirectory);
	const posts = postFiles.map((filename) => {
		const filePath = path.join(postsDirectory, filename);
		const content = fs.readFileSync(filePath, "utf-8");
		const frontmatter = matter(content) as matter.GrayMatterFile<string>;
		const post: PostFrontmatter = {
			...JSON.parse(JSON.stringify(frontmatter)),
			slug: filename.replace(".md", ""),
		};
		return post;
	});

	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", ["common", "home"])),
			posts,
		},
	};
};

const Home: React.FC = ({ posts }: Props) => {
	const router = useRouter();
	const { t } = useTranslation();
	const [Team, setTeam] = React.useState([
		{
			name: "Albert Flores",
			role: "Founder of GearUp",
			img: "/images/11.png",
		},
		{
			name: "Leslie Alexander",
			role: "Co-Founder of Womenia",
			img: "/images/2.png",
		},
		{
			name: "Courtney Henry",
			role: "Founder of CH Beauty",
			img: "/images/3.png",
		},
	]);
	const [Statistic, setStatistic] = React.useState([
		{
			icon: faClock,
			count: 1,
			title: "Years",
			symbol: "+",
		},
		{
			icon: faUsers,
			count: 109,
			title: "People",
			symbol: "K",
		},
		{
			icon: faLocationDot,
			count: 60,
			title: "Locations",
			symbol: "+",
		},
		{
			icon: faDiagramProject,
			count: 49322,
			title: "Projects",
			symbol: "",
		},
	]);
	const [LatestInitiatives, setLatestInitiatives] = React.useState([]);
	const [LatestPosts, setLatestPosts] = React.useState([]);
	const [Loader, setLoader] = React.useState({
		LatestInitiatives: true,
		LatestPosts: true,
	});

	useEffect(() => {
		setLoader({
			LatestInitiatives: true,
			LatestPosts: true,
		});

		axios
			.get("https://clean-iraq-campaigns.murtadha-altameemi2156.workers.dev")
			.then((response) => {
				setLatestInitiatives(response.data.slice(0, 3));
			});
		axios
			.get("https://run.mocky.io/v3/e4722147-2c24-4e86-9a2c-8b10940bdcfa")
			.then((response) => {
				setLatestPosts(response.data.data);
				setLoader({
					LatestInitiatives: false,
					LatestPosts: false,
				});
			});
	}, []);

	return (
		<main>
			<div className="lg:devider" />
			<section className="flex flex-row items-center justify-center md:bg-secondary/[0.5] md:items-stretch md:grid md:grid-cols-2 lg:bg-inherit relative">
				<div className="bg-black/[0.5] h-full w-full absolute md:bg-secondary/[0] md:flex flex-col justify-center md:ps-8 md:relative">
					<div
						data-aos="fade-top"
						data-aos-duration="1000"
						className="lg:w-[64%] text-center xs:px-2 text-white mt-[12rem] md:mt-0 md:text-left md:text-black flex flex-col gap-2"
					>
						<h1 className="fade-top h3 md:h2 md:text-left rtl:md:text-right lg:h1">
							{t("CLEANLINESS AMBASSADORS IN IRAQ")}
						</h1>
						<h3 className="h3 p text-[1rem] md:text-[1.4rem]  md:text-left rtl:md:text-right">
							{t(
								"A voluntary campaign to organize gatherings to clean public places and spread the culture of cleanliness"
							)}
						</h3>
						<button
							className="btn  py-2 w-fit h2 self-center md:self-auto"
							type="submit"
							onClick={() => {
								router.push(`/contact_us`);
							}}
						>
							{t("Join us")}
						</button>
					</div>

					<div
						data-aos="fade-top"
						data-aos-duration="2000"
						className="hidden absolute left-0 rtl:right-0 bottom-0 lg:block -z-10"
					>
						<Image
							className="rtl:transform rtl:scale-x-[-1]"
							src="/images/Rectangle 10.png"
							alt="Picture of the author"
							width={608.55}
							height={516.19}
						/>
					</div>
				</div>
				<div
					data-aos="fade-top"
					data-aos-duration="1000"
					className="fade-top md:inherit justify-self-center relative md:justify-self-end md:me-8 -z-30 md:z-auto"
				>
					<Image
						className="opacity-75 md:opacity-100"
						src="/images/Group30.png"
						alt="Picture of author"
						width={533}
						height={533}
					/>
					<div className="hidden md:block animate-bounce bg-white w-max rounded-lg shadow-xl p-2 absolute top-10 right-5 md:p-3 md:right-0 md:top-20">
						<FontAwesomeIcon
							icon={faCommentDots}
							className="px-2 lg:text-[1.5em]"
							color="#E4A954"
						/>
						<span className="body-bold">{t("Get Involved")}</span>
					</div>
					<div className="hidden md:block animate-bounce bg-white w-max rounded-lg shadow-xl p-2 absolute bottom-5 left-2 md:left-0 md:bottom-12">
						<FontAwesomeIcon
							icon={faUserGroup}
							className="px-2 lg:text-[1.5em]"
							color="#E4A954"
						/>
						<span className="body-bold">{t("Partner with Us")}</span>
					</div>
				</div>
			</section>
			<div className="lg:devider" />
			<section className="w-full relative h-auto flex flex-col justify-center bg-[#154A28]/[0.6] lg:h-[500px]">
				<Image
					className="-z-10"
					src="/images/Copy of DSC00388 1.png"
					fill
					alt="image"
					objectFit="cover"
				/>

				<div
					data-aos="fade-top"
					data-aos-duration="1000"
					className="grid grid-flow-row justify-items-center justify-center gap-y-20 py-28 md:grid-cols-2 lg:grid-cols-4"
				>
					{Statistic.map((item, key) => {
						return (
							<div
								key={key}
								className="flex flex-col justify-center gap-2 align-middle rounded-lg bg-secondary text-center w-[218px] h-[190px]"
							>
								<FontAwesomeIcon
									icon={item.icon}
									className="px-2"
									size="2x"
									color="white"
								/>
								<span className="h2 text-white">
									<CountUp delay={1} end={item.count} enableScrollSpy={true} />
									{item.symbol}
								</span>
								<h2 className="h3 text-white">{t(item.title)}</h2>
							</div>
						);
					})}
				</div>
			</section>
			<div className="devider" />
			<section className="container mx-auto mb-2">
				<h2 className="h2 mb-8 md:text-center lg:text-left rtl:lg:text-right">
					{t("Latest Initiatives")}
				</h2>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center lg:gap-6">
					<div data-aos="fade-in" className="flex flex-col gap-8">
						{LatestInitiatives.map((item, key) => {
							return (
								!Loader.LatestInitiatives &&
								item["Photos"] && (
									<InitiativeCard
										key={key}
										Date={item["Date"]}
										Province={item["Province"]}
										GPS_Lat={item["GPS Lat"]}
										GPS_Lon={item["GPS Lon"]}
										Number_of_Trash_Bags={item["Number of Trash Bags"]}
										Location_Description={item["Location Description"]}
										Location_Description_Arabi={
											item["Location Description Arabi"]
										}
										Number_of_Volunteers={item["Number of Volunteers"]}
										Photo={item["Photos"][0]["full"]["url"]}
										direction="cols"
										duration={(key + 1) * 300}
										notify={true}
									/>
								)
							);
						})}
						{Loader.LatestInitiatives && (
							<Skeleton repeat={2} direction="row" />
						)}
					</div>
					<div className="h-full" data-aos="fade-in">
						<div className="shadow-xl w-full h-[500px] lg:h-[540px]">
							<Map />
						</div>
					</div>
				</div>
			</section>
			<div className="devider" />
			<section className="container mx-auto text-center">
				<h2 className="h2">{t("Our Team")}</h2>
				<p className="body mb-10">
					{t("Meet Our Amazing Hygiene Ambassadors Team Members In Iraq")}.
				</p>
		 <div className="flex gap-10 mx-auto justify-center flex-wrap"
		      data-aos="fade-top"
			  data-aos-duration="2000"
		 >
          <div className="bg-white w-[300px] h-[420px]  rounded-[25px] shadow-2xl flex flex-col  classForCards relative">
            <div className="bg-primary py-8 rounded-[25px_25px_0px_25px] flex items-center justify-center cardTopSection ">
              <img
                className=" w-[120px] h-[120px] rounded-[50%] border-2 border-solid border-[white] p-1 object-cover"
                src="/images/teamMember1.jpg"
              />
            </div>
            <div className="text-center py-6 px-3">
              <h1>{t("Murtadha name")}</h1>
              <p className="py-5 text-gray-500">
			 {t("Murtadha description")}

              </p>
			  <div className="-translate-x-2/4 absolute left-2/4 bottom-9">
              <button className="font-bold text-green-800 py-2 px-6 border-2 rounded-[0px_15px_0px_15px] border-[#548B68]">
                <a href="https://www.instagram.com/the.murt/" target="_blanck">
                  {t("Instagram")}
                </a>
              </button>
			  </div>
            </div>
          </div>
          <div className="bg-white w-[300px]  h-[420px] rounded-[25px] shadow-2xl  flex flex-col classForCards relative" >
            <div className="bg-primary py-8 rounded-[25px_25px_0px_25px] flex items-center justify-center cardTopSection ">
              <img
                className=" w-[120px] h-[120px] rounded-[50%] border-2 border-solid border-[white] p-1 object-cover"
                src="/images/teamMember2.jpg"
              />
            </div>
            <div className="text-center py-6  px-3 ">
              <h1>{t("Mohamed name")}</h1>
              <p className="py-5 text-gray-500">
				{t("Mohamed job")} <br/> {t("Mohamed Responsibilities")}  <br/>.
 			  </p>
			  <div className="-translate-x-2/4 absolute left-2/4 bottom-9">
              <button className="font-bold text-green-800 py-2 px-6 border-2 rounded-[0px_15px_0px_15px] border-[#548B68] ">
                <a href="https://www.instagram.com/abodora89/" target="_blanck">
				{t("Instagram")}
                </a>
              </button>
			  </div>
            </div>
          </div>
          <div className="bg-white w-[300px]  h-[420px] rounded-[25px] shadow-2xl flex flex-col  classForCards relative">
            <div className="bg-primary py-8 rounded-[25px_25px_0px_25px] flex items-center justify-center cardTopSection">
              <img
                className=" w-[120px] h-[120px] rounded-[50%] border-2 border-solid border-[white] p-1 object-cover"
                src="/images/teamMember3.jpg"
              />
            </div>
            <div className="text-center py-6  px-3">
              <h1>{t("Saif name")}</h1>
              <p className="py-5 text-gray-500">
			  {t("Saif description")}
              </p>
			  <div className="-translate-x-2/4 absolute left-2/4 bottom-9">
              <button className="font-bold text-green-800 py-2 px-6 border-2 rounded-[0px_15px_0px_15px] border-[#548B68]">
                <a href="https://www.instagram.com/saif_a_kareem/" target="_blanck">
                {t("Instagram")}
                </a>
              </button>
			  </div>
            </div>
          </div>
		  <div className="bg-white w-[300px]  h-[420px] rounded-[25px] shadow-2xl flex flex-col  classForCards relative">
            <div className="bg-primary py-8 rounded-[25px_25px_0px_25px] flex items-center justify-center cardTopSection">
              <img
                className=" w-[120px] h-[120px] rounded-[50%] border-2 border-solid border-[white] p-1 object-cover"
                src="/images/teamMember4.jpg"
              />
            </div>
            <div className="text-center py-6 px-3">
              <h1>{t("Hassan name")}</h1>
              <p className="py-5 text-gray-500">
			  {t("Hassan description")}
              </p>
			  <div className="-translate-x-2/4 absolute left-2/4 bottom-9">

              <button className="font-bold text-green-800 py-2 px-6 border-2 rounded-[0px_15px_0px_15px] border-[#548B68]">
                <a href="https://www.instagram.com/the.murt/" target="_blanck">
				{t("Instagram")}
                </a>
              </button>
			  </div>
            </div>
          </div>
        </div>
			</section>
			<div className="devider" />
			<section className="container mx-auto mb-2">
				<h2 className="h2 mb-8 text-center lg:text-left rtl:lg:text-right">
					{t("Recent Posts")}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-10">
					{posts.slice(0, 3).map((item, key) => {
						return (
							<div
								className={`transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary-500 duration-300`}
							>
								<PostCard
									key={key}
									title={item["data"]["title"]}
									author={item["data"]["author"]}
									excerpt={item["content"]}
									date={item["data"]["date"]}
									thumbnail={item["data"]["thumbnail"]}
									url={`./blog/${item["slug"]}`}
									direction="rows"
									duration={(key + 1) * 300}
									notify={false}
								/>
							</div>
						);
					})}
				</div>
			</section>
			<div className="devider" />
			<section className="container mx-auto text-center md:w-fit flex flex-col gap-2">
				<div id="mc_embed_shell">
					<div id="mc_embed_signup">
						<form
							action="https://app.us21.list-manage.com/subscribe/post?u=54199cfbda90b1d0c838f971a&amp;id=bf8dfbaaf4&amp;f_id=00ff63e1f0"
							method="post"
							id="mc-embedded-subscribe-form"
							name="mc-embedded-subscribe-form"
							className="validate"
							target="_self"
						>
							<div className="flex flex-col gap-4" id="mc_embed_signup_scroll">
								<h2 className="h3 md:h2">{t("Subscribe to our newsletter")}</h2>{" "}
								<p className="body">
									{t(
										"Subscribe to learn about the latest events , Initiatives, and updates."
									)}
								</p>
								<div>
									<div className="mc-field-group flex flex-col md:flex-row gap-2 md:gap-5 justify-center">
										<input
											type="email"
											name="EMAIL"
											className="border-slate-300 input grow w-full mt-0 rounded-lg"
											placeholder={t("Enter your Email")}
											id="mce-EMAIL"
											required
										/>

										<button className="btn py-0 px-4" type="submit">
											{t("Subscribe")}
										</button>
									</div>
									<span
										id="mce-EMAIL-HELPERTEXT"
										className="helper_text"
									></span>
									<div id="mce-responses" className="clear foot">
										<div
											className="response hidden"
											id="mce-error-response"
										></div>
										<div
											className="response hidden"
											id="mce-success-response"
										></div>
									</div>
									<div
										aria-hidden="true"
										className="hidden absolute left-[-5000px]"
									>
										<input
											type="text"
											name="b_54199cfbda90b1d0c838f971a_bf8dfbaaf4"
											value=""
										/>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</section>
			<div className="devider" />
		</main>
	);
};

export default Home;
