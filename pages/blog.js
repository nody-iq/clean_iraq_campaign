import React from 'react'
import PostCard from "../components/postCard";
import Hero from "../components/Hero"
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "home"])),
		},
	};
};

const Blog = () => {
    const { t } = useTranslation();

    const [LatestInitiatuves, setLatestInitiatuves] = React.useState([
		{
			title: "Latest Initiatives",
			author: "Ahmed Khalid",
			excerpt:
				"Linear helps streamline software projects, sprints, tasks, and bug tracking.Here’s how to get...",
			tags: ["Tag1", "Tag2"],
			date: "2015-08-09",
			direction: "col",
			image: "/images/Copy of DSC00394.jpg",
		},
		{
			title: "Latest Initiatives",
			author: "Ahmed Khalid",
			excerpt:
				"Linear helps streamline software projects, sprints, tasks, and bug tracking.Here’s how to get...",
			tags: ["Tag1", "Tag2"],
			date: "2015-08-09",
			direction: "col",
			image: "/images/Copy of DSC00394.jpg",
		},
	]);

	const [LatestPosts, setLatestPosts] = React.useState([
		{
			title: "Latest Initiatives",
			author: "Ahmed Khalid",
			excerpt:
				"Linear helps streamline software projects, sprints, tasks, and bug tracking.Here’s how to get...",
			tags: ["Tag1", "Tag2"],
			date: "2015-08-09",
			direction: "col",
			image: "/images/Copy of DSC00394.jpg",
		},
		{
			title: "Latest Initiatives",
			author: "Ahmed Khalid",
			excerpt:
				"Linear helps streamline software projects, sprints, tasks, and bug tracking.Here’s how to get...",
			tags: ["Tag1", "Tag2"],
			date: "2015-08-09",
			direction: "col",
			image: "/images/Copy of DSC00394.jpg",
		},
		{
			title: "Latest Initiatives",
			author: "Ahmed Khalid",
			excerpt:
				"Linear helps streamline software projects, sprints, tasks, and bug tracking.Here’s how to get...",
			tags: ["Tag1", "Tag2"],
			date: "2015-08-09",
			direction: "col",
			image: "/images/Copy of DSC00394.jpg",
		},
		{
			title: "Latest Initiatives",
			author: "Ahmed Khalid",
			excerpt:
				"Linear helps streamline software projects, sprints, tasks, and bug tracking.Here’s how to get...",
			tags: ["Tag1", "Tag2"],
			date: "2015-08-09",
			direction: "col",
			image: "/images/Copy of DSC00394.jpg",
		},
		{
			title: "Latest Initiatives",
			author: "Ahmed Khalid",
			excerpt:
				"Linear helps streamline software projects, sprints, tasks, and bug tracking.Here’s how to get...",
			tags: ["Tag1", "Tag2"],
			date: "2015-08-09",
			direction: "col",
			image: "/images/Copy of DSC00394.jpg",
		},
		{
			title: "Latest Initiatives",
			author: "Ahmed Khalid",
			excerpt:
				"Linear helps streamline software projects, sprints, tasks, and bug tracking.Here’s how to get...",
			tags: ["Tag1", "Tag2"],
			date: "2015-08-09",
			direction: "col",
			image: "/images/Copy of DSC00394.jpg",
		},
	]);
	const [generalPost, setGeneralPost] = React.useState([
		{
			title: "Latest Initiatives",
			author: "Ahmed Khalid",
			excerpt:
				"Linear helps streamline software projects, sprints, tasks, and bug tracking.Here’s how to get...",
			tags: ["Tag1", "Tag2"],
			date: "2015-08-09",
			direction: "col",
			image: "/images/Copy of DSC00394.jpg",
		},
	]);

  return (
    <div>
        <Hero bg="bg-[url('/images/IMG-82975190-4975.png')]" title={t("Blog")}/>
        <div className="container mx-auto mb-[75px] mt-10">
				<h2 className="h2 mb-8 md:text-center lg:text-left rtl:lg:text-right">
					{t("Recent blog posts")}
				</h2>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center lg:gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:flex lg:justify-center gap-10">
					{generalPost.map((item, key) => {
						return (
							<div>
								<PostCard
									title={t(item.title)}
									author={t(item.author)}
									excerpt={t(item.excerpt)}
									tags={item.tags}
									date={item.date}
									image={item.image}
									direction="rows"
									duration={(key + 1) * 300}
								/>
							</div>
						);
					})}
				</div>
					<div data-aos="fade-in" className="flex flex-col gap-8">
						{LatestInitiatuves.map((item) => {
							return (
								<PostCard
								    title={t(item.title)}
							    	author={t(item.author)}
									excerpt={t(item.excerpt)}
									tags={item.tags}
									date={item.date}
									image={item.image}
									direction="cols"
									new={true}
								/>
							);
						})}
					</div>
				</div>
			</div>
        <div className="container mx-auto mb-10 mt-10">
				<h2 className="h2 mb-8 text-center lg:text-left rtl:lg:text-right">
					{t("All blog posts")}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:justify-center gap-10">
					{LatestPosts.map((item, key) => {
						return (
							<div>
								<PostCard
									title={t(item.title)}
									author={t(item.author)}
									excerpt={t(item.excerpt)}
									tags={item.tags}
									date={item.date}
									image={item.image}
									direction="rows"
									duration={(key + 1) * 300}
								/>
							</div>
						);
					})}
				</div>
			</div>
    </div>
  )
}

export default Blog
