import React from "react";
import "./custom.scss"
export default function BeginJourney(){
    return(
        <div className="flex align-items-center justify-content-center w-full py-6">
            <div className="background_black flex md:flex-row sm:flex-column flex-column align-items-center justify-content-around h-15rem w-11 surface-section border-round bg-cover bg-no-repeat bg-center surface-ground" style={{"backgroundImage": "url(/images/footerBg.png)"}} >
                <div className="flex flex-column gap-2">
                    <span className="font-bold lg:text-5xl md:text-3xl sm:text-xl text-xl text-white md:text-left sm:text-center text-center ">Begin your journey from today</span>
                    <span className="font-light lg:text-lg md:text-lg sm:text-xs text-xs opacity-70 text-white md:text-left sm:text-center text-center">Buildings are constructed in stages, begin with our offer today.</span>
                </div>
                <div className="button_get_started font-bold text-white bg-indigo-500 py-3 cursor-pointer px-5 border-round">
                    <span>Get Started</span>
                </div>
            </div>
        </div>
    )
}