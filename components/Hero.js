

const Hero =(props)=>{
    return (
        <section className={`w-full ${props.bg} bg-center bg-contain bg-no-repeat bg-cover `}>
            <div className="w-full bg-primary bg-opacity-50 text-white ">
            <div className="h-[180px] sm:h-[280px] md:h-[350px] lg:h-[475px] xl:h-[600px] max-w-screen-2xl mx-auto flex flex-col justify-center items-center">
                    <h1 className=" text-white text-[18.91px] md:text-[37.02px] xl:text-[64px] uppercase font-bold w-64 h-8 md:w-[490px] md:h-[60px] xl:w-[847px] xl:[103px] text-center">
                        {props.title}
                    </h1>
                </div>
            </div>
        </section>
  );
}

export default Hero;