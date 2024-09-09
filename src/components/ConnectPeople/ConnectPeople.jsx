import React from "react";


export default function ConnectPeople(){
    const imageUrl = "https://picsum.photos/1330/557";

    return(
        <div className="flex flex-column gap-4 py-5 w-full align-items-center justify-content-center ">
            <div className="flex flex-column w-full align-items-center justify-content-center gap-2">
                <span className="font-bold lg:text-5xl md:text-3xl sm:text-xl text-xl">Get in connect with more people</span>
                <span className="font-light lg:text-xl md:text-lg sm:text-xs text-xs opacity-70">With our best service, make it easy for users to touch them</span>
            </div>
            <img className="w-11" style={{objectFit:"contain"}} src={imageUrl} alt="loremipsum" />
        </div>
    )
}