import React from "react";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
import NextNProgress from "nextjs-progressbar";
import "../styles/globals.css";
import Head from "next/head";
import Header from "../components/header";
import Footer from "../components/footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import AOS from "aos";
import "aos/dist/aos.css";
library.add(fas);

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
	const router = useRouter();
	React.useEffect(() => {
		AOS.init();
		if (router.locale == "ar") {
			document.documentElement.setAttribute("dir", "rtl");
		}
	}, []);

	return (
		<div className="">
			<NextNProgress color="#E4A954" height={6} />

			<Head>
				<title>iraq clean campaign</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<Component {...pageProps} />

			<Footer />
		</div>
	);
};

export default appWithTranslation(App);
