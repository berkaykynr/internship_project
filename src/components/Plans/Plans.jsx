import React from "react";
import "./custom.scss"
export default function Plans(){
    const data = [
        {
            title: "New User",
            subTitle:"Suitable for Beginners or Learning Websites",
            price : 2.5,
            priceSubtitle: "$300 bills every year",
            websiteCount:1,
            ssdStorage:"10 GB",
            visitor:"5.000 user",
            domain:false,
            ssl:true,
            bandwith:"100 GB",
            gitAccess:false
        },
        {
            title: "Standart",
            subTitle:"Suitable for Minimum Budget, Landing Page, Personal Blog etc.",
            price : 4.5,
            priceSubtitle: "$500 Billed anually. Save $40",
            websiteCount:1,
            ssdStorage:"10 GB",
            visitor:"5.000 user",
            domain:true,
            ssl:true,
            bandwith:"Unlimited",
            gitAccess:true
        },
        {
            title: "Personal",
            subTitle:"Suitable for SMES, Organizations, Communities, Online Stores,",
            price : 7.5,
            priceSubtitle: "$800 Billed anually. Save $100",
            websiteCount:1,
            ssdStorage:"10 GB",
            visitor:"5.000 user",
            domain:true,
            ssl:true,
            bandwith:"Unlimited",
            gitAccess:true
        },   
        {
            title: "Company",
            subTitle:"Suitable for Business Websites, News Portals, Online Stores, etc",
            price : 10.5,
            priceSubtitle: "$1100 Billed anually. Save $160",
            websiteCount:1,
            ssdStorage:"10 GB",
            visitor:"300.000 user",
            domain:true,
            ssl:true,
            bandwith:"Unlimited",
            gitAccess:true
        },   
     ]

    function Feature({name,limit,isInclude}){
        return(
            <div className={`flex flex-row w-12 align-items-center justify-content-between ${name !== "GIT Access" && "border-bottom-1 border-300"} p-3 `}>
                <div className="flex flex-row gap-2 align-items-center justify-content-center ">
                    {isInclude ? 
                    <i className="pi pi-check" style={{ color: '#55E000',fontSize: '1rem'  }}/>
                    :
                    <i className="pi pi-times" style={{ color: '#E00000',fontSize: '1rem'  }}/>}
                    
                    <span className="font-light lg:text-base md:text-sm sm:text-sm text-sm opacity-70">{name}</span>
                </div>
                <span className="font-bold lg:text-sm md:text-cs sm:text-xs text-xs opacity-70">{limit}</span>
            </div>
        )
    }
    return(
        <div className="flex flex-column w-full align-items-center justify-content-center">
            <div className="flex flex-column align-items-center justify-content-center gap-2">
                <span className="font-bold lg:text-5xl md:text-3xl sm:text-xl text-xl">Choose Your Hosting Plan</span>
                <span className="font-light lg:text-lg md:text-lg sm:text-xs text-xs opacity-70">We are a leading web solutions services provider</span>
            </div>
            <div className="grid py-5 w-full gap-1 align-items-center justify-content-evenly">
                        {
                            data.map((item,index) => (
                                <div key={index} className={`flex ${item.title === "Personal" && "border-indigo-600"} relative mt-8 flex-column gap-3 col-11 md:col-5 lg:col-2 bg-white py-3 px-2  border-1 border-300 border-round-sm`}>
                                    {   
                                    item.title === "Personal" &&
                                        <div className="absolute-recomended absolute w-full flex border-round-top-sm  border-1 p-3 align-items-center justify-content-center ">
                                            <span className="text-white font-bold">Recomended</span>
                                        </div>
                                    }
                                    <div className="flex flex-column align-items-center justify-content-center gap-1">
                                        <span className="text-center font-bold lg:text-3xl md:text-xl sm:text-base text-base">{item.title}</span>
                                        <span className="text-center font-light lg:sm md:sm sm:text-xs text-xs">{item.subTitle}</span>
                                    </div>
                                    <div className="flex flex-column align-items-center justify-content-center gap-1">
                                        <div className="flex flex-row justify-content-end align-items-end"> 
                                            <span className="align-self-center text-center font-bold lg:text-3xl md:text-xl sm:text-base text-base">$ {item.price}</span>
                                            <div className="flex flex-column">
                                                <span className="lg:text-lg md:text-text-base sm:text-sm text-sm">.00</span>
                                                <span className="font-light lg:text-lg md:text-base sm:text-sm text-sm opacity-70">/Month</span>
                                            </div>
                                        </div>
                                        <span style={{color:"#212121"}} className="font-light lg:text-sm md:text-sm sm:text-xs text-xs opacity-70">{item.priceSubtitle}</span>
                                    </div>
                                    <div className="flex w-11 flex-column align-items-center justify-content-center">   
                                        <Feature name={"Website"} limit={item.websiteCount} isInclude={true}/>
                                        <Feature name={"SSD Storage"} limit={item.ssdStorage} isInclude={true}/>
                                        <Feature name={"Visitor"} limit={item.visitor} isInclude={true}/>
                                        <Feature name={"Domain"} limit={"FREE"} isInclude={item.domain}/>
                                        <Feature name={"SSL"} limit={"FREE"} isInclude={item.ssl}/>
                                        <Feature name={"Bandwith"} limit={item.bandwith} isInclude={true}/>
                                        <Feature name={"GIT Access"} limit={"FREE"} isInclude={item.gitAccess}/>
                                    </div>
                                    <div className="flex w-12 align-items-center justify-content-center py-3 align-self-center border-1 border-round-sm cursor-pointer hover:surface-200">
                                        <span className="font-bold  lg:text-lg md:text-lg sm:text-xs text-xs">Choose</span>
                                    </div>
                                </div>
                            ))
                        }
            </div>
        </div>
       
    )
}