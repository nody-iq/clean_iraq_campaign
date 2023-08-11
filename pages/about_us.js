import {FaQuoteLeft} from '@react-icons/all-files/fa/FaQuoteLeft'
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


const About =()=>{
    const { t } = useTranslation();

    const avatars = [
        {
          name:"avatar1",
          image: "/images/avatar1.png",
          title: "Who we are",
          subtitle: "The Cleanliness Ambassadors campaign has engaged an estimated 5,000 volunteers across 15 Iraqi governorates, making it one of the largest community-based environmental campaigns in the country.",
        },
        {
            name:"avatar2",
            image: "/images/avatar2.png",
            title: "Our Message",
            subtitle: "This is a campaign from you, and for all of you, we can make a positive change, cooperate and strive for a cleaner and more beautiful Iraq",
        },
        {
            name:"avatar3",
            image: "/images/avatar3.png",
            title: "What we do",
            subtitle: "We empower people in communities all over the country to make a difference to their local environment. We encourage groups in every region of the country to organize activities and register with us to gain access to our planning tools and event resources.",  
        },
    ];

    return(
        <>
        <Hero bg="bg-[url('/images/about_hero.jpeg')]" title={t("ABOUT THE CLEANLINESS AMBASSADORS")}/>
        <main className="grid gap-10 py-10 " >
            {
                avatars.map((item)=>(
                    <div key={item.name} className="grid md:grid-cols-2 justify-items-center items-center gap-5 md:gap-10" data-aos="fade-up" data-aos-duration="1000">
                        <img className={`${item.name === "avatar2"?'md:order-last':''} w-[300px] h-[300px] rounded-[50%] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] xl:w-[612px] xl:h-[612px]`} src={item.image} alt={item.name}/>
                        <div className="grid justify-items-center text-center gap-5">
                            <div className={`w-[70px] h-[70px]  ${item.name === "avatar2"?'bg-primary':'bg-yallow'} flex justify-center items-center rounded-[50%] lg:w-[90px] lg:h-[90px] xl:w-[107px] xl:h-[107px]`}>
                                <FaQuoteLeft className="text-white w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] lg:w-[47px] lg:h-[47px]"/>
                            </div>
                            <h2 className="text-[40px] font-bold lg:text-[50px] xl:text-[64px]">{t(item.title)}</h2>
                            <p className="text-[18px] font-medium w-[388.5px] lg:text-[21px] xltext-[24px]">{t(item.subtitle)}</p>
                        </div>
                    </div>
                ))
            }
        </main>
        </>
    )
}

export default About;