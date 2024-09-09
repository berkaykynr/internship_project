
import { Divider } from 'primereact/divider';

export default function OurServices(){
    function Service({logo,title,text}){
        return(
            <div className="flex flex-column pt-6 gap-5 ">
                <div className="flex p-2 w-7rem  ">
                   <img className='flex w-full align-self-start' src={logo} alt={`icon hostingly ${logo}`} />
                </div>
                <div className='flex flex-column gap-2'>
                    <span className='lg:text-2xl md:text-xl sm:text-base font-bold text-left'>
                        {title}
                    </span>
                    <span className='w-18rem'>
                        {text}
                    </span>
                </div>
            </div>
        )
    }
    return(
        <div class="flex flex-column p-6 gap-8">
            <div class="flex flex-row align-items-center justify-content-center gap-5">
                <div class="flex flex-column gap-1 w-6 pl-4">
                    <span class="lg:text-5xl md:text-3xl sm:text-xl font-bold text-left ">The Best Service For You</span>
                    <span class="lg:text-5xl md:text-3xl sm:text-xl font-bold text-left">Who Are Growth</span>
                </div>
                <div class="flex flex-row w-6">
                    <span class="font-light lg:text-base md:text-sm sm:text-xs ">Our powerful web hosting tools get the job done right, and are designed so that as you grow, your site can grow with you too.</span>
                </div>
            </div>
            <div className="grid gap-4 w-full align-items-center justify-content-center sm: align-items-start sm:justify-content-start ">
                <div className='flex flex-row align-items-center'>
                    <Service logo="/images/icon1.png" title={"SSL Certificate"} text={"Enter the domain name you want (extensions .com, .id, .online, .live, .store, .info and many more)"}/>
                    <Divider className='flex h-13rem align-self-center opacity-50' layout="vertical" />
                </div>
                <div className='flex flex-row'>
                    <Service logo="/images/icon2.png" title={"Affordable "} text={"You make use of cutting-edge technology and dependable and robust servers"}/>
                    <Divider className='flex h-13rem align-self-center opacity-50' layout="vertical" />
                </div>
                <div className='flex flex-row'>
                    <Service logo="/images/icon3.png" title={"Guarantee"} text={"We have a service guarantee for the first 30 days for your convenience"}/>
                    <Divider className='flex h-13rem align-self-center opacity-50' layout="vertical" />
                </div>
                <Service logo="/images/icon4.png" title={"24/7/356 Support"} text={"We work when you work. Whenever that happens we will always be there"}/>
            </div>
        </div>
    )
}