import React from "react";

export default function ProficientPeople() {


    const imageUrl = "https://picsum.photos/590/369";

    return (
        <div className={`flex w-full py-5 align-item-center justify-content-around gap-3 flex-column sm:flex-column md:flex-column lg:flex-row xl:flex-row`}>
            <div className={`flex flex-column gap-5 lg:w-5 md:w-11 sm:w-11 align-items-start lg:p-0 md:px-5 sm:px-3 px-3 `}>
                <span className="font-bold lg:text-5xl md:text-3xl sm:text-xl text-xl">Proficient People</span>
                <span className="text-500">Many things have happened since our establishment in 2001 and have been trusted by millions of users spread all over the world, both domestically and abroad.</span>

                <div className="flex flex-row w-full align-items-center justify-content-evenly py-3">
                    <div className="flex flex-row w-5 align-items-center justify-content-center g-1">
                        <img className="w-3" src="/images/webHosting.png" alt="webHosting" />
                        <div className="flex flex-column gap-1">
                            <span className="font-bold text-lg">1000k++</span>
                            <span className="text-400 text-xs">Hosted Website</span>
                        </div>
                    </div>

                    <div className="flex flex-row w-5 align-items-center justify-content-center g-1">
                        <img className="w-3" src="/images/prosCustomer.png" alt="prosCustomer" />
                        <div className="flex flex-column gap-1">
                            <span className="font-bold text-lg">60%</span>
                            <span className="text-400 text-xs">Web Pros Customer</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full lg:align-item-start align-items-center justify-content-center lg:justify-content-start lg:w-5 xl:w-5 md:w-full sm:w-full">
                <img className="w-11 lg:w-full" style={{ objectFit: "contain" }} src={imageUrl} alt="lorem" />
            </div>
        </div>
    )
}