import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage } from "@fortawesome/free-solid-svg-icons";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const LanguageSwitcher: React.FC = () => {
	const router = useRouter();
	const { t } = useTranslation();
	const languages = [
		{ value: "ar", label: "AR" },
		{ value: "en", label: "EN" },
	];

	const handleLanguageChange = (locale) => {
		document.documentElement.setAttribute(
			"dir",
			locale == "en" ? "ltr" : "rtl"
		);
		router.push(router.pathname, router.asPath, { locale });
	};

	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
					{router.locale == "ar" ? "AR" : "EN"}
					<FontAwesomeIcon
						icon={faLanguage}
						className="px-2 lg:text-[1.5em]"
						color="#E4A954"
					/>
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="z-30 absolute mt-2 w-full rounded-md bg-white shadow-lg">
					<div className="py-1">
						{languages.map((item, key) => {
							return (
								<Menu.Item key={key}>
									{({ active }) => (
										<button
											onClick={() => handleLanguageChange(item.value)}
											className={classNames(
												active ? "bg-gray-100 text-gray-900" : "text-gray-700",
												"body block px-4 py-2 w-full"
											)}
										>
											{item.label}
										</button>
									)}
								</Menu.Item>
							);
						})}
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default LanguageSwitcher;
