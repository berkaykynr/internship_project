import React from "react";

export default function Footer() {

    const data = [
        {
            title: "Web Hosting",
            subTitles: ["Cloud Hosting", "Email Hosting", "Web Hosting Unlimited", "SSL Security", "Transfer Hosting"]
        },
        {
            title: "Domain",
            subTitles: ["Register Domain", "Transfer Domains", "Manage Domains"]
        },
        {
            title: "Company",
            subTitles: ["About Us", "Reviews", "Company Blog", "Contact Us", "Careers"]
        },
        {
            title: "Support",
            subTitles: ["Customer Portal", "Online Chat", "Whatsapp", "Video Tutorial", "Support Portal"]
        }
    ]

    const Logo = ({ logoName }) => {
        return (
            <a href="https://berkaykaynar.com.tr" className="flex border-1 no-underline cursor-pointer hover:surface-300 p-2 border-400 shadow-3 border-circle">
                <i className={`pi ${logoName}`} style={{ color: '#212121', opacity: "60%", fontSize: '1.5rem' }} />
            </a>
        )
    }
    return (
        <div className="flex md:flex-row sm:flex-column flex-column md:gap-0 sm:gap-3 gap-3 w-full surface-200 align-items-center justify-content-between py-6">
            <div className="flex flex-column gap-2 md:w-4 sm:w-11 w-11 align-items-center justify-content-start">
                <div className="flex w-8 flex-row gap-2 py-3 align-content-start justify-content-start">
                    <img className="w-1rem " style={{ objectFit: "contain" }} src="/images/logo.png" alt="hostingly" />
                    <span className="font-bold lg:text-3xl md:text-xl sm:text-base text-base ">Hostingly</span>
                </div>
                <span className="flex w-8 font-light lg:text-base md:text-base sm:text-xs text-xs opacity-70">Our mission is to help millions of people harness the potential of the internet to build online success</span>
                <div className="flex w-8 flex-row gap-4 align-items-start justify-content-start">
                    <Logo logoName={"pi-facebook"} />
                    <Logo logoName={"pi-youtube"} />
                    <Logo logoName={"pi-instagram"} />
                </div>
            </div>
            <div className="flex sm:gap-0  gap-3 sm:flex-row flex-column md:w-8 sm:w-11 w-11 justify-content-evenly">
                {
                    data.map((item, index) => (
                        <div key={index} className="flex flex-column align-items-center gap-3 align-self-start w-full">
                            <span className="font-bold lg:text-lg md:text-lg sm:text-xs text-xs">{item.title}</span>
                            {
                                item.subTitles.map((item, index) => (
                                    <span key={index} className="font-light cursor-pointer lg:text-sm md:text-sm sm:text-xs text-xs opacity-70">{item}</span>
                                ))
                            }
                        </div>
                    ))
                }
            </div>

        </div>
    )
}