import React from "react";
import PostCard from "../components/postCard";
import Hero from "../components/Hero";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
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

const Blog: React.FC = ({ posts }: Props) => {
	const { t } = useTranslation();

	return (
		<div>
			<Hero bg="bg-[url('/images/IMG-82975190-4975.png')]" title={t("Blog")} />
			<div className="container mx-auto mb-[75px] mt-10">
				<h2 className="h2 mb-8 md:text-center lg:text-left rtl:lg:text-right">
					{t("Recent blog posts")}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:justify-center gap-10">
					{posts.slice(0, 3).map((item, key) => {
						return (
							<div
								className={`${
									key == 0 ? "md:row-span-2" : ""
								} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary-500 duration-300`}
							>
								<Link href={`./blog/${item["slug"]}`}>
									<PostCard
										key={key}
										title={item["data"]["title"]}
										author={item["data"]["author"]}
										excerpt={item["content"]}
										date={item["data"]["date"]}
										thumbnail={item["data"]["thumbnail"]}
										direction={key == 0 ? "rows" : "cols"}
										duration={(key + 1) * 300}
										notify={false}
									/>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
			<div className="container mx-auto mb-10 mt-10">
				<h2 className="h2 mb-8 text-center lg:text-left rtl:lg:text-right">
					{t("All blog posts")}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:justify-center gap-10">
					{posts.slice(0, 3).map((item, key) => {
						return (
							<div
								className={`${
									key == 0 ? "md:row-span-2" : ""
								} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary-500 duration-300`}
							>
								<Link href={`./blog/${item["slug"]}`}>
									<PostCard
										key={key}
										title={item["data"]["title"]}
										author={item["data"]["author"]}
										excerpt={item["content"]}
										date={item["data"]["date"]}
										thumbnail={item["data"]["thumbnail"]}
										direction="rows"
										duration={(key + 1) * 300}
										notify={false}
									/>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Blog;
