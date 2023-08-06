import React from "react";
import { useRouter } from "next/router";
import { appWithTranslation } from "next-i18next";
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

const App = ({ Component, pageProps }) => {
	const router = useRouter();
	React.useEffect(() => {
		AOS.init();
		if (router.locale == "ar") {
			document.documentElement.setAttribute("dir", "rtl");
		}
	}, []);

	return (
		<div className="">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />

			<Component {...pageProps} />

			<Footer />
		</div>
	);
};

export default appWithTranslation(App);
