import React from "react";

export default function SSLSertificate() {

    const imageUrl = "https://picsum.photos/590/369";

    const text = 'Our SSL service already uses 2,048 bit tokens accompanied by 256 encryption, this is the highest level of SSL security for your customers. Our SSL also uses "Point-to-verify" technology which shows real-time and accurate verification data.'

    const data = [
        "More Safer",
        "Improve search engine marketing",
        "Website's reputation is improving"
    ]
    return (
        <div className={`flex w-full py-5 align-item-center justify-content-around gap-3 flex-column-reverse sm:flex-column-reverse md:flex-column-reverse lg:flex-row xl:flex-row `}>
            <div className={`flex w-full lg:align-item-start align-items-center justify-content-center lg:justify-content-start lg:w-5 xl:w-5 md:w-full sm:w-full `}>
                <img className="w-11 lg:w-full" style={{ objectFit: "contain" }} src={imageUrl} alt="lorem" />
            </div>

            <div className="flex flex-column gap-5 lg:w-5 md:w-11 sm:w-11 align-items-start lg:p-0 md:px-5 sm:px-3 px-3">
                <span className="font-bold lg:text-5xl md:text-3xl sm:text-xl text-xl">SSL Sertificate</span>
                <span className="text-500 lg:text-lg md:text-base sm:text-sm text-sm">{text}</span>
                <div className="flex flex-column gap-3">
                    {data.map((item, index) => {
                        return (
                            <div key={index} className="flex flex-row align-items-center gap-3">
                                <i className="pi pi-check" style={{ color: '#55E000', fontSize: '1rem' }} />
                                <div className="font-semibold lg:text-lg md:text-base sm:text-sm text-sm">{item}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}