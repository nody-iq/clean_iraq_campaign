


const EventCard =(props)=>{
    return(
        <div className="w-[205px] h-[263px] drop-shadow-[0px_0px_35px_rgba(0,0,0,0.3)] md:w-[311px] md:h-[397px] xl:w-[384px] xl:h-[491px]">
            <img className=" w-[205px] h-[263px] rounded-[12px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] md:w-[311px] md:h-[397px] xl:w-[384px] xl:h-[491px]" src={props.photo} alt="..."/>
            <div className="relative bottom-[100px] w-[224px] h-[124px] opacity-60 blur-[47.0186px] rotate-0 bg-[linear-gradient(270deg,_#548B68_-0.55%,_#437153_22.86%,_#FF9E54_48.36%,_#FFCC4D_73.33%,_#FF675E_99.34%)] rtl:bg-[linear-gradient(90deg,_#548B68_-0.55%,_#437153_22.86%,_#FF9E54_48.36%,_#FFCC4D_73.33%,_#FF675E_99.34%)] md:w-[350px] md:h-[188px] xl:w-[418px] xl:h-[233px] md:bottom-[160px] xl:bottom-[200px]"/>
            <h2 className="text-[20px] font-bold text-white relative bottom-[220px] pl-2 rtl:pr-2 md:text-[30px] xl:text-[45px] md:bottom-[330px] xl:bottom-[430px]">{props.Province}</h2>
            <h3 className="py-3 px-2 mx-2 text-[13px] font-bold bg-white rounded-[12px] absolute bottom-[10px] text-secondary bg-opacity-70 md:text-[20px] xl:text-[24px] md:bottom-[30px] xl:bottom-[40px]">{props.Location_Description}</h3>
            {/* <h3 className="py-3 px-2 bg-white rounded-[12px] absolute bottom-[50px]">ddddd</h3> */}
        </div>
    )
}

export default EventCard;