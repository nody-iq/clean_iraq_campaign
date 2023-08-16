import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export async function getStaticPaths() {
	const blogPath = path.join(process.cwd(), "pages/blog/posts");
	const fileNames = fs.readdirSync(blogPath);

	const paths = fileNames.map((fileName) => ({
		params: { slug: fileName.replace(/\.md$/, "") },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps({ locale, params }) {
	const postsDirectory = path.join(process.cwd(), "pages/blog/posts");
	const filePath = path.join(postsDirectory, `${params.slug}.md`);
	const content = fs.readFileSync(filePath, "utf-8");
	const frontmatter = matter(content);

	const postFiles = fs.readdirSync(postsDirectory); //list of dir filenames
	const posts = postFiles.map((filename) => {
		const filePath = path.join(postsDirectory, filename);
		const content = fs.readFileSync(filePath, "utf-8");
		const frontmatter = matter(content);
		frontmatter.slug = filename.replace(".md", "");
		return JSON.parse(JSON.stringify(frontmatter));
	});

	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "home"])),
			content,
			postData: JSON.parse(JSON.stringify(frontmatter)),
			posts,
		},
	};
}

const BlogPost = ({ content, postData, posts }) => {
	const { t } = useTranslation();

	return (
		<div>
			<div className="devider" />

			<main className="container mx-auto pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900">
				<div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
					<article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
						<header className="mb-4 lg:mb-6 not-format">
							<address className="flex items-center mb-6 not-italic">
								<div className="inline-flex items-center text-sm text-gray-900 dark:text-white gap-1">
									<img
										className="w-16 h-16 rounded-full"
										src="https://secure.webtoolhub.com/static/resources/icons/set112/261419af.png"
										alt="Jese Leos"
									/>
									<div>
										<a
											href="#"
											rel="author"
											className="text-xl font-bold text-gray-900 dark:text-white"
										>
											{postData.data.author}
										</a>
										<p className="text-base font-light text-gray-500 dark:text-gray-400">
											<time
												pubdate
												datetime="2022-02-08"
												title="February 8th, 2022"
											>
												{postData.data.date}
											</time>
										</p>
									</div>
								</div>
							</address>
							<div className="relative w-full h-96 rounded mb-4">
								<a href="#">
									<Image
										className="rounded-md"
										src={postData.data.thumbnail}
										alt="thumbnail"
										fill
										objectFit="cover"
									/>
								</a>
							</div>
							<ReactMarkdown className="prose lg:prose-xl">
								{postData.content}
							</ReactMarkdown>
						</header>
					</article>
				</div>
			</main>

			<aside
				aria-label="Related articles"
				className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800"
			>
				<div className="container mx-auto max-w-screen-xl">
					<h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
						{t("Related articles")}
					</h2>
					<div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
						{posts.slice(0, 3).map((post) => (
							<article className="max-w-xs">
								<div className="relative w-full h-44 rounded mb-2">
									<a href="#">
										<Image
											className="rounded-md"
											src={post.data.thumbnail}
											alt="thumbnail"
											fill
											objectFit="cover"
										/>
									</a>
								</div>

								<h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white">
									<a href="#">{post.data.title}</a>
								</h2>
								<p className="mb-4 font-light text-gray-500 dark:text-gray-400 line-clamp-2">
									{post.content}
								</p>
								<Link
									className="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"
									href={post.slug}
								>
									{t("Read more")}
								</Link>
							</article>
						))}
					</div>
				</div>
			</aside>
			<div className="devider" />
		</div>
	);
};

export default BlogPost;
