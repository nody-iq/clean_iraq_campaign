import Hero from "../components/Hero"
import EventCard from "../components/EventCard";
import JoinUs from "../components/JoinUs";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }) {
	return {
		props: {
			...(await serverSideTranslations(locale, ["common", "home"])),
		},
	};
};

const Events =() =>{
    const { t } = useTranslation();


    return (
        <>
        <Hero bg="bg-[url('/images/events_hero.JPG')]" title={t("Events / Campaign")}/>
        <section className="grid justify-items-center items-center gap-5 py-10">
            <h2 className="text-[24px] font-bold lg:text-[40px] xl:text-[64px]">{t("Up Comming Events")}</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10" >
                <div className="" data-aos="fade-up" data-aos-duration="1000">
                    <EventCard Province={t("Alahrar Bridge")} Location_Description={t("Baghdad")} photo="/images/alahrar_Bridge.JPG"/>
                </div>
                <div className="hidden md:block" data-aos="fade-up" data-aos-duration="1500">
                    <EventCard Province={t("Alayima Bridge")} Location_Description={t("Baghdad")} photo="/images/alayima_Bridge.JPG"/>
                </div>
                <div className="hidden xl:block" data-aos="fade-up" data-aos-duration="2000">
                    <EventCard Province={t("Bashtabya")} Location_Description={t("Mosul")} photo="/images/Bashtabya.jpg"/>
                </div>
            </div>
        </section>
        <section className="grid justify-items-center items-center gap-5 py-10">
            <h2 className="text-[24px] font-bold lg:text-[40px] xl:text-[64px]">{t("Past Events")}</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-10">
                <div className="" data-aos="fade-up" data-aos-duration="1000">
                    <EventCard Province={t("Alahrar Bridge")} Location_Description={t("Baghdad")} photo="/images/alahrar_Bridge.JPG"/>
                </div>
                <div className="hidden md:block" data-aos="fade-up" data-aos-duration="1500">
                    <EventCard Province={t("Alayima Bridge")} Location_Description={t("Baghdad")} photo="/images/alayima_Bridge.JPG"/>
                </div>
                <div className="hidden xl:block" data-aos="fade-up" data-aos-duration="2000">
                    <EventCard Province={t("Bashtabya")} Location_Description={t("Mosul")} photo="/images/Bashtabya.jpg"/>
                </div>
            </div>
        </section>
        <JoinUs/>
        </>
    )
}

export default Events;