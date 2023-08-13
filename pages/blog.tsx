import React from "react";
import PostCard from "../components/postCard";
import Hero from "../components/Hero";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import axios from "axios";
import Skeleton from "../components/Skeleton";

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "home"])),
		},
	};
}

const Blog: React.FC = () => {
	const { t } = useTranslation();
	const [LatestPosts, setLatestPosts] = React.useState([]);
	const [generalPost, setGeneralPost] = React.useState([]);
	const [Loader, setLoader] = React.useState(true);

	React.useEffect(() => {
		setLoader(true);
		axios
			.get("https://run.mocky.io/v3/e4722147-2c24-4e86-9a2c-8b10940bdcfa")
			.then((response) => {
				setGeneralPost(response.data.data.slice(0, 3));
				setLatestPosts(response.data.data);
				setLoader(false);
			});
	}, []);

	return (
		<div>
			<Hero bg="bg-[url('/images/IMG-82975190-4975.png')]" title={t("Blog")} />
			<div className="container mx-auto mb-[75px] mt-10">
				<h2 className="h2 mb-8 md:text-center lg:text-left rtl:lg:text-right">
					{t("Recent blog posts")}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:justify-center gap-10">
					{generalPost.map((item, key) => {
						return (
							<div className={key == 0 ? "md:row-span-2" : ""}>
								{!Loader && item["photos"] && (
									<PostCard
										key={key}
										title={item["title"]}
										author={item["author"]}
										excerpt={item["excerpt"]}
										date={item["date"]}
										photos={item["photos"]}
										direction={key == 0 ? "rows" : "cols"}
										duration={(key + 1) * 300}
										notify={false}
									/>
								)}
							</div>
						);
					})}
					{Loader && <Skeleton repeat={2} direction="col" />}
				</div>
			</div>
			<div className="container mx-auto mb-10 mt-10">
				<h2 className="h2 mb-8 text-center lg:text-left rtl:lg:text-right">
					{t("All blog posts")}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:justify-center gap-10">
					{LatestPosts.map((item, key) => {
						return (
							!Loader &&
							item["photos"] && (
								<PostCard
									key={key}
									title={item["title"]}
									author={item["author"]}
									excerpt={item["excerpt"]}
									date={item["date"]}
									photos={item["photos"]}
									direction="rows"
									duration={(key + 1) * 300}
									notify={false}
								/>
							)
						);
					})}
					{Loader && <Skeleton repeat={3} direction="col" />}
				</div>
			</div>
		</div>
	);
};

export default Blog;
