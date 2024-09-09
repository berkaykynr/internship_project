import React from "react";
import { Card } from 'primereact/card';
import { Rating   } from 'primereact/rating';
import "./custom.scss"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
        
export default function PersonalExperience(){
    const commentData = [
        {
            starCount:4,
            nameSurname:"Michelle Denki",
            imageUrl:"/images/commentUsers/michelle.png",
            comment:"Hostingly is reliable and makes shipping changes easy. The support team was exceedingly helpful when we needed to migrate our blog. A+ on their support team.",
            width:255,
            height:350
        },
        {
            starCount:4.5,
            nameSurname:"Nicholas Thahadjut",
            imageUrl:"/images/commentUsers/nicholas.png",
            comment:"We truly cannot say enough about the level of customer service that Hostingly provides – it’s always a great experience, with very personable and helpful support.",
            width:327,
            height:244
        },
        {
            starCount:5,
            nameSurname:"Mike Shilaturahmy",
            imageUrl:"/images/commentUsers/mike.png",
            comment:"Absolutely fantastic – can't rate it highly enough in terms of speed, support and UI.",
            width:327,
            height:244
        },
        {
            starCount:5,
            nameSurname:"Rebecca Taubath",
            imageUrl:"/images/commentUsers/rebecca.png",
            comment:"I am amazed how my website performance improved drastically and loads fast now. They also have the best support. In particular, technical know-how compared to other hosting providers. So glad I switched to Hostingly!",
            width:327,
            height:300
        },
        {
            starCount:4,
            nameSurname:"Masimo Phowsyesyif",
            imageUrl:"/images/commentUsers/masimo.png",
            comment:"Developer tools to their fast and reliable support. It allows us to focus on our business and not on the server, knowing we are in the best possible hands when it comes to managed hosting.",
            width:327,
            height:244
        },
        {
            starCount:5,
            nameSurname:"Jason Cadle",
            imageUrl:"/images/commentUsers/jason.png",
            comment:"Hostingly provides an amazing service, with a simple control panel and top performance. Their support is even more amazing, always available, and fast at fixing any issue.",
            width:327,
            height:244
        },
        {
            starCount:4,
            nameSurname:"Adam Broadband",
            imageUrl:"/images/commentUsers/adam.png",
            comment:"Kinsta is the best web hosting I have so far. They are quick to help, easy to deal with, and really know their stuff. Plus their servers are super fast!",
            width:327,
            height:300
        },
        {
            starCount:5,
            nameSurname:"Kelvin Koeppow",
            imageUrl:"/images/commentUsers/kelvin.png",
            comment:"Really love the level of experience and support Kinsta’s live chat engineers provide.",
            width:255,
            height:350
        },
        
    ]

    function footer (data){
        return(
            <>
                <div className="flex flex-row align-items-center gap-4">
                    <img className="w-3rem grayscale" src={data.imageUrl} alt="michelle" />
                    <div>{data.nameSurname}</div>
                </div>
            </>
        )
    }

    function header(value){
        return(
            <>
                <Rating className="pl-3 text-yellow-600" value={value} readOnly cancel={false} />
            </>
        )
    }

    function card(data){
        return(
            <div className={`align-items-center justify-content-center ${data.nameSurname === "Michelle Denki" && "mt-0 lg:mt-5 ml-0 lg:ml-8"} ${data.nameSurname === "Mike Shilaturahmy" && "mt-8"}`} style={{width:data.width,height:data.height}}>
                <Card className="py-3" footer={() => footer(data)} header={() => header(data.starCount)} >
                <p className="m-0">
                    {data.comment}
                </p>
                </Card>
            </div>
        )
    }

    return(
        <div className="flex flex-column gap-6 w-full align-items-center justify-content-center py-5">
            <span className="font-bold lg:text-5xl md:text-3xl sm:text-xl text-xl"> Customer's personal experience</span>
          <ResponsiveMasonry
            className="flex w-11"
            columnsCountBreakPoints={{350: 1,700:2, 900: 3, 1285: 4}}
        >
                <Masonry gutter="5rem">
                    { commentData.map((data,index) => {
                        return(
                            <div className="relative" key={index}>
                                {card(data)}
                            </div>
                        )
                    })}
                </Masonry>
          </ResponsiveMasonry>
          <span className="text-cyan-500 hover:text-cyan-700 cursor-pointer underline m-3">Browse more reviews</span>
        </div>
    )
}