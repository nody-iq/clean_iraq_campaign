import React from 'react'
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "home"])),
		},
	};
};

const JoinUs = () => {
    const { t } = useTranslation();

    // const [joinus , setJoinus] = useState(
    //     {
    //         name: "",
    //         age: 10,
    //         phone: 7701111111 ,
    //         telegramId: "",
    //         gender:"male",
    //         occupation:"student",
    //         governorate:"baghdad"
    //     }
    // )

  return (
    <form className="bg-secondary grid justify-items-center">
          <div className="grid grid-cols justify-items-center items-center gap-5 py-10  md:grid-cols-2 md:justify-items-start md:px-10 md:w-[833px] lg:w-[1033px] xl:w-[1233px]">
            <h1 className="text-[24px] font-bold md:col-span-2 lg:text-[40px] xl:text-[64px]">{t("Join Us")}</h1>

            <input className="h-[40px] w-[400px] rounded-[30px] px-5 md:w-[300px] lg:h-[60px] lg:w-[400px] xl:w-[500px] xl:h-[70px]"
            type="text"
            // value={joinus.name}
            placeholder={t("Name")}></input>

            <input className="h-[40px] w-[400px] rounded-[30px] px-5 md:w-[300px] md:ml-16 rtl:md:mr-16 lg:h-[60px] lg:w-[400px] xl:w-[500px] xl:ml-[110px] rtl:xl:mr-[110px] xl:h-[70px]"
            type="number"
            // value={joinus.age}
            placeholder={t("Age")}></input>

            <input className="h-[40px] w-[400px] rounded-[30px] px-5 md:col-span-2 md:w-[750px] lg:h-[60px] lg:w-[950px] xl:w-[1200px] xl:h-[70px]"
            type="number"
            // value={joinus.phone}
            placeholder={t("Phone Number")}></input>

            <input className="h-[40px] w-[400px] rounded-[30px] px-5 md:col-span-2 md:w-[750px] lg:h-[60px] lg:w-[950px] xl:w-[1200px] xl:h-[70px]"
            type="text"
            // value={joinus.telegramId}
            placeholder={t("Telegram ID")}></input>

            <div className="flex justify-between justify-items-center items-center">
                <span className="text-[24px] font-bold">{t("Gender")}</span>
                <div className="ml-4 rtl:mr-4 flex justify-items-center items-center">
                    <input className="w-5 h-5 "
                    type="radio"
                    // value={joinus.gender}
                    ></input>
                    <label className="text-[24px] font-light ml-2 rtl:mr-2">{t("Male")}</label>
                </div>
                <div className="ml-4 rtl:mr-4 flex justify-items-center items-center">
                    <input className="w-5 h-5"
                    type="radio"
                    // value={joinus.gender}
                    ></input>
                    <label className="text-[24px] font-light ml-2 rtl:mr-2">{t("Female")}</label>
                </div>
            </div>

            <input className="h-[40px] w-[400px] rounded-[30px] px-5 md:col-span-2 md:w-[750px] lg:h-[60px] lg:w-[950px] xl:w-[1200px] xl:h-[70px]"
            type="text"
            // value={joinus.occupation}
            placeholder={t("Occupation (Optional)")}></input>

            <input className="h-[40px] w-[400px] rounded-[30px] px-5 md:col-span-2 md:w-[750px] lg:h-[60px] lg:w-[950px] xl:w-[1200px] xl:h-[70px]"
            type="text"
            // value={joinus.governorate}
            placeholder={t("Governorate")}></input>

            <button className="border-[2.08981px] rounded-bl-[15px] rounded-tr-[15px] bg-primary border-primary h-[40px] w-[400px] md:w-[205px] lg:h-[60px] lg:w-[300px] xl:h-[70px]">
                <span className="text-white font-bold text-[24px]">{t("Submit")}</span>
            </button>
          </div>
        </form>
  )
}

export default JoinUs