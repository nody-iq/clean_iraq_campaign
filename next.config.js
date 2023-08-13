/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

const nextConfig = {
	reactStrictMode: false,
	i18n,
	i18n: {
		locales: ["ar", "en"],
		defaultLocale: "ar",
		localeDetection: false,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "v5.airtableusercontent.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "scontent.fbgw27-1.fna.fbcdn.net",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "i.ibb.co",
				port: "",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
